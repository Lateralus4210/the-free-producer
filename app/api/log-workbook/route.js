import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Required env vars:
//   GOOGLE_SERVICE_ACCOUNT_EMAIL  — service account email
//   GOOGLE_PRIVATE_KEY            — private key (with literal \n for newlines)
//   GOOGLE_SHEET_ID               — spreadsheet ID from the sheet URL
//
// Sheet column layout (row per session+area combo):
//   A: sessionId | B: timestamp | C: type | D: areaName | E: score
//   F: q1 | G: q2 | H: q3 | I: q4 | J: extraData (JSON)

async function getSheet() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export async function POST(req) {
  // If creds aren't configured, skip silently — never break the user's session
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SHEET_ID) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const body = await req.json();
    const { sessionId, type, areaName, score, answers } = body;

    const timestamp = new Date().toISOString();
    let row;

    if (type === 'area') {
      row = [
        sessionId,
        timestamp,
        'area',
        areaName || '',
        score ?? '',
        answers?.[0] ?? '',
        answers?.[1] ?? '',
        answers?.[2] ?? '',
        answers?.[3] ?? '',
        '',
      ];
    } else if (type === 'reflection') {
      row = [
        sessionId,
        timestamp,
        'reflection',
        '',
        '',
        answers?.[0] ?? '',
        answers?.[1] ?? '',
        answers?.[2] ?? '',
        answers?.[3] ?? '',
        JSON.stringify({ q5: answers?.[4], q6: answers?.[5], q7: answers?.[6] }),
      ];
    } else if (type === 'action-plan') {
      row = [
        sessionId,
        timestamp,
        'action-plan',
        '',
        '',
        '',
        '',
        '',
        '',
        JSON.stringify(answers),
      ];
    } else {
      return NextResponse.json({ ok: true });
    }

    const sheets = await getSheet();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:J',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Workbook log error:', err?.message);
    return NextResponse.json({ ok: false, error: err?.message }, { status: 500 });
  }
}
