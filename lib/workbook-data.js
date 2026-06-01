export const AREAS = [
  {
    number: "01",
    name: "Ideation",
    description:
      "Ideation covers your entire creative ecosystem, meaning the lifestyle habits, inputs, and relationship with your craft that make ideas possible in the first place.",
    lowScore: [
      "Staring at a blank screen",
      "Starting things and abandoning them",
      "Feeling like the spark is gone but not knowing why",
    ],
    highScore: [
      "Ideas arrive naturally",
      "You sit down with a direction or a feeling and the work flows",
      "You have systems for capturing ideas before they disappear",
    ],
    questions: [
      "How often do you sit down to create and find yourself with nothing to start from?",
      "When did you last consume something — music, film, art — that excited or surprised you? What was it?",
      "Do you still know why you started making music, and does that reason feel alive to you right now? What did it for you?",
      "How balanced is your creative life with the rest of your life — rest, relationships, experiences outside the DAW?",
    ],
  },
  {
    number: "02",
    name: "Composition",
    description:
      "Composition covers every musical decision you make in shaping an idea into a finished arrangement — structure, melody, harmony, and how all the elements relate to each other.",
    lowScore: [
      "Getting stuck in loops you can't develop",
      "Melodies that meander without identity",
      "Arrangement problems that get misread as mixing problems",
    ],
    highScore: [
      "You can take an idea and develop it confidently",
      "Your melodies have identity",
      "You think in layers and relationships rather than isolated parts",
    ],
    questions: [
      "Do your tracks tend to stay as loops or fragments, or do you regularly finish full arrangements?",
      "When a melody isn't working, can you diagnose specifically what's wrong — or does it just feel vaguely off? How do you usually do it and what signs do you look for?",
      "How intentional are your structural decisions? Do you know why sections start and end where they do?",
      "Are there harmonic clashes in your music you can hear but can't explain or fix?",
    ],
  },
  {
    number: "03",
    name: "Music Theory",
    description:
      "Music Theory covers your working knowledge of harmony, rhythm, and melody as practical tools that serve the music you're actually making — not a checklist of academic concepts.",
    lowScore: [
      "Something sounds wrong but you can't identify what",
      "Elements clash in ways you can't explain",
      "Theory feels out of reach or gets in the way of your instincts",
    ],
    highScore: [
      "Your ear and your knowledge work together",
      "You make intentional harmonic choices",
      "You trust your ear when it overrules the theory",
    ],
    questions: [
      "When something sounds harmonically off in your music, can you identify and fix it specifically? What issues have you found most commonly in your tracks?",
      "Do you find yourself using theoretical concepts like modes without being sure why or whether the music calls for them? Why do you think that is, if so?",
      "Has theory ever gotten in the way of your music by making you second-guess something that actually sounded good? How so?",
      "How comfortable are you working in the specific harmonic language of the genre you make? Can you describe what that language sounds like?",
    ],
  },
  {
    number: "04",
    name: "DAW Proficiency",
    description:
      "DAW Proficiency covers your practical command of your tools and workflow — how efficiently and confidently you can execute your musical ideas inside your chosen software.",
    lowScore: [
      "The software feels like an obstacle",
      "Sessions are disorganized",
      "You spend time hunting for things instead of creating",
      "Opening your DAW feels like obligation rather than possibility",
    ],
    highScore: [
      "Your relationship with your software feels almost invisible",
      "Shortcuts are automatic",
      "Your session loads and you're creating immediately",
    ],
    questions: [
      "When you open a new session, how long before you're actually making music versus setting things up?",
      "How organized are your projects, files, and mixer? Could you find anything you made six months ago in under two minutes?",
      "Do you have a template? Does it actually reflect how you work, or is it outdated?",
      "Is there a point in your workflow where the software consistently slows you down or pulls you out of the creative flow? What is that point?",
    ],
  },
  {
    number: "05",
    name: "Mixing",
    description:
      "Mixing covers the process of balancing, shaping, and spatially placing your elements so they work together rather than against each other — both a technical discipline and a creative one.",
    lowScore: [
      "Levels that are all over the place",
      "Muddiness in the low-mids",
      "Elements that sound isolated and dry",
      "Perfectionism keeps you working on the same mix for weeks",
    ],
    highScore: [
      "You level first, always",
      "Your technical fundamentals are second nature",
      "You trust your ear over your meters",
      "You know when the mix is done",
    ],
    questions: [
      "Do you level your tracks before reaching for any plugins, or do you jump straight to processing? What level do you usually set your faders at before starting?",
      "When a mix feels wrong, can you identify specifically whether the problem is technical, spatial, or behavioral? What's been most common in your experience?",
      "How long do you typically spend mixing a track? Is that amount of time actually serving the music?",
      "Do you trust your ear when it tells you something sounds right, even when the meters say otherwise? Do you know how to trust your ears?",
    ],
  },
  {
    number: "06",
    name: "Mastering",
    description:
      "Mastering covers the final processing applied to a finished stereo mix — making it sound its best across all playback systems and cohesive alongside other tracks in a body of work.",
    lowScore: [
      "Treating mastering as an extension of mixing",
      "Over-relying on loudness targets",
      "Not mastering at all",
      "Understanding it conceptually but not yet having the ear for it",
    ],
    highScore: [
      "You come to mastering with fresh ears",
      "You listen before you process",
      "Your processing is subtle and intentional",
      "You trust your ear over your meters",
    ],
    questions: [
      "Do you understand the difference between what mixing is for and what mastering is for? How would you describe them in your own words?",
      "Are you making mastering decisions based primarily on what sounds right, or on hitting specific loudness numbers?",
      "Do you give yourself adequate time between finishing a mix and mastering it? How long do you usually set aside, or do you go straight into mastering?",
      "When you put multiple tracks from your catalogue back to back, do they feel like a unified body of work? Or do you master with a primary focus on each individual track?",
    ],
  },
  {
    number: "07",
    name: "Collaboration",
    description:
      "Collaboration covers every relationship in your creative ecosystem that requires working with another person toward a shared goal — other producers, engineers, visual artists, venues, and everyone else who touches your music.",
    lowScore: [
      "Making music alone out of fear rather than preference",
      "Struggling to share creative control",
      "Not knowing how to find or approach collaborators",
      "Difficulty translating your creative vision to others",
    ],
    highScore: [
      "You have a network of fruitful relationships",
      "You communicate your creative vision clearly",
      "You hold your identity with confidence and flexibility at the same time",
    ],
    questions: [
      "Is your creative isolation a philosophical choice or a fear-based default? Or do you go out of your way to avoid making music by yourself?",
      "When you collaborate, do you share creative control or do you quietly undo input you didn't ask for? Whichever way you lean, why do you think that is?",
      "Can you articulate your creative vision clearly to someone outside the music world — a designer, a venue, a friend? How do you do it?",
      "Who in your creative ecosystem do you think of as a collaborator beyond other producers or musicians?",
    ],
  },
  {
    number: "08",
    name: "Artwork & Content",
    description:
      "Artwork & Content covers the visual identity and content presence that exists around your music — how your work is represented visually and how you show up as an artist in public.",
    lowScore: [
      "No consistent visual identity",
      "Posting in bursts and disappearing",
      "Paralyzed by the idea of content creation",
      "Visual presence that undermines the music it's supposed to represent",
    ],
    highScore: [
      "Coherent visual identity across platforms",
      "Content that feels effortless and genuine",
      "A sustainable cadence that doesn't require performing a version of yourself that doesn't exist",
    ],
    questions: [
      "If someone found your music on one platform and then looked you up on another, would they encounter a coherent artistic identity? If so, explain that.",
      "What stops you from showing up more consistently online — lack of time, lack of ideas, or discomfort with being seen?",
      "Does your current content reflect your personality, or does it feel like a promotional exercise? Why?",
      "When did you last post something that had nothing to do with promoting music? Did it perform better than your promotional posts? How did it feel?",
    ],
  },
  {
    number: "09",
    name: "Release Process",
    description:
      "Release Process covers everything that happens between a finished, mastered track and that track being live and available to listeners — both the practical mechanics and the psychological work of letting go.",
    lowScore: [
      "A folder full of finished music that has never been released",
      "Tracks pulled back at the last minute",
      "Haphazard releases with incomplete metadata",
      "Believing that if you release it, people will come",
    ],
    highScore: [
      "A reliable system",
      "Release dates that get honored",
      "Clean metadata",
      "Genuine peace with letting go — you've learned the music does more good in the world than on your hard drive",
    ],
    questions: [
      "How many finished or nearly-finished tracks do you have that have never been released? What's actually stopping them?",
      "Do you have a consistent release process — a checklist, a timeline, a distributor relationship you understand well? If so, what is it?",
      "Is your artist name, metadata, and genre tagging consistent across everything you've released?",
      "When you imagine releasing something imperfect, what's the first feeling that comes up?",
    ],
  },
  {
    number: "10",
    name: "Promo",
    description:
      "Promo covers the full range of activities through which you make your music discoverable and build a genuine audience around it — from social media presence to playlist pitching to building a community.",
    lowScore: [
      "Releasing music and doing nothing to help anyone find it",
      "Showing up in bursts and disappearing",
      "Promotional discomfort so acute it prevents any visibility",
      "Not knowing where to start",
    ],
    highScore: [
      "You show up consistently",
      "Your content feels like you",
      "You know how to pitch",
      "You understand how discovery actually works",
      "You have a genuine community around your work",
    ],
    questions: [
      "What have you done in the last month specifically to help new listeners find your music?",
      "Is your absence from social media a bandwidth issue or a discomfort issue — and why do you think that is?",
      "Have you ever pitched your music to a playlist curator, blog, or music supervisor? If so, which ones and how did it go? If not, what's stopped you?",
      "What does your current promotional strategy actually look like, and is it something you're executing consistently?",
    ],
  },
];

export const REFLECTION_PROMPTS = [
  "What would need to change so that the music you're making a year from now, you're more proud of than the music you're making today?",
  "Which of your 10 Skill Tree scores surprised you the most, and what does that surprise tell you about your music journey to this point?",
  "Is there one area where you know exactly what the problem is but have been avoiding dealing with it? What's actually stopping you?",
  "What does going professional actually mean to you specifically? Have you ever written it down?",
  "Who in your life actually knows what you're trying to build with your music, and do they believe in it?",
  "When was the last time making music felt like play rather than work or obligation?",
  "If you released everything on your hard drive tomorrow, what would actually happen? And how does imagining that feel?",
];

export const ACTION_PLAN_STEPS = [
  {
    label: "Step 1 — Your Skill Tree Summary",
    instruction: "Transfer your scores from the assessment above into the summary below.",
    type: "score-summary",
  },
  {
    label: "Step 2 — Identify Your Focus Areas",
    instruction:
      "Look at your scores and identify the two or three areas with the most room for growth. These don't have to be your lowest scores, but they should be the areas where focused work would make the biggest difference for where you specifically want to go.",
    type: "focus-areas",
    fields: [
      { key: "focusAreas", prompt: "My top focus areas are:" },
      { key: "focusReason", prompt: "I chose these because:" },
    ],
  },
  {
    label: "Step 3 — Define Your Goal",
    instruction: "What does going professional actually mean to you? Be as specific as possible. Write it down.",
    type: "goal",
    fields: [
      { key: "goal12mo", prompt: "In 12 months, I want to:" },
      { key: "goalChange", prompt: "The most important thing I need to change to get there is:" },
    ],
  },
  {
    label: "Step 4 — Your Next Three Actions",
    instruction:
      "Based on your focus areas and your goal, identify three specific, concrete actions you can take in the next 30 days. These should be things you could put on a calendar right now.",
    type: "actions",
    fields: [
      { key: "action1", prompt: "Action 1:" },
      { key: "action1date", prompt: "Complete by:" },
      { key: "action2", prompt: "Action 2:" },
      { key: "action2date", prompt: "Complete by:" },
      { key: "action3", prompt: "Action 3:" },
      { key: "action3date", prompt: "Complete by:" },
    ],
  },
  {
    label: "Step 5 — Accountability",
    instruction:
      "Who in your life will know about this plan? Name one person you'll share it with — someone who will check in on you and notice if you're not following through.",
    type: "accountability",
    fields: [
      { key: "accountabilityPerson", prompt: "I will share this plan with:" },
      { key: "accountabilityDate", prompt: "I will check in with them by:" },
    ],
  },
];
