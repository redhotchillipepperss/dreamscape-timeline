/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE.
 *  This single file controls all the words, dates and media of
 *  the whole experience. Nothing else needs to be touched.
 *
 *  Media: drop your files into
 *    public/media/photos/   → reference as "/media/photos/name.jpg"
 *    public/media/videos/   → reference as "/media/videos/name.mp4"
 *    public/media/audio/    → reference as "/media/audio/about-you.mp3"
 * ─────────────────────────────────────────────────────────────
 */

import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

/** Fallback images used wherever you haven't dropped your own yet. */
export const placeholderPhotos = [memory1, memory2, memory3];

export const her = {
  name: "Divyangi",
  nickname: "Rawrokiebye",
};

export const hero = {
  title: "Happy Girlfriend's Day, Divyangi ❤️",
  subtitle: "For the girl who turned an ordinary story reply into the best part of my life.",
  cta: "Begin Our Story",
};

export const song = {
  title: "Something about you",
  artist: "Eyedress",
  /** Put your mp3 at public/media/audio/about-you.mp3 */
  src: "/media/audio/eyedress.mp3",
  prompt: "Play this before reading.",
};

export type TimelineEntry = {
  date: string;
  title: string;
  description: string;
  quote?: string;
  photo?: string;
  video?: string;
  slow?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: "The very beginning",
    title: "The story reply that changed everything",
    description:
      "You had posted \"The Man Who Sold The World\". I replied without overthinking it — and somehow that tiny, ordinary message rearranged my entire life.",
    quote: "I'm so glad you knew Nirvana. Hail Kurt Cobain.",
    photo: memory1,
  },
  {
    date: "21 March · Dahanu Festival",
    title: "The first time I saw you",
    description:
      "I still remember how nervous I was before meeting you. I kept wondering… \"What if she doesn't like me?\" I tried acting normal, but inside I was overthinking every little thing. And when I finally saw you… everything became so much easier. The only thing I wanted in that moment was to hold your hand.",
    photo: memory3,
  },
  {
    date: "19 April 2026 · 2:19 AM",
    title: "The Night I Asked You",
    description:
      "I still remember how nervous I was while typing that message. I kept rewriting it again and again because nothing felt good enough. Even today… I still feel I could've done better. But if there's one thing I know — every single word came from my heart.",
  },
  {
    date: "6 June",
    title: "Our First Kiss",
    description:
      "I still remember 6th June. The moment everything else disappeared. You looked so unbelievably beautiful. Your smile, your eyes, the way you looked at me… I don't think I'll ever find words beautiful enough to describe how stunning you were. If I could relive one moment forever, it would be that one.",
    photo: memory2,
    slow: true,
  },
  {
    date: "Somewhere in between",
    title: "The late-night calls",
    description:
      "Half-asleep, talking about nothing, neither of us willing to hang up first. Those hours are still my favourite place to go back to.",
  },
  {
    date: "Right now",
    title: "Today",
    description: "Still choosing you, Rawrokiebye. Still amazed that you chose me back.",
  },
];

export type GalleryPhoto = { src: string; caption: string; alt: string };

/** Add as many as you like — the grid handles dozens. */
export const gallery: GalleryPhoto[] = [
  { src: memory1, caption: "Our First Selfie", alt: "A couple under warm street lights at night" },
  { src: memory3, caption: "Festival Memories", alt: "Two hands reaching for each other under fairy lights" },
  { src: memory2, caption: "Us", alt: "Two coffee cups by a rainy window at night" },
  { src: memory1, caption: "Random Happy Days", alt: "Silhouette of a couple at night" },
  { src: memory3, caption: "Favorite Pictures", alt: "Hands under string lights" },
  { src: memory2, caption: "Late Night Memories", alt: "Warm café window at night" },
];

export type VideoMemory = { title: string; note: string; src: string; poster: string };

export const videos: VideoMemory[] = [
  {
    title: "The way you laugh",
    note: "Twelve seconds I've watched a hundred times.",
    src: "/media/videos/laugh.mp4",
    poster: memory3,
  },
  {
    title: "Dahanu, 21 March",
    note: "The day my hands wouldn't stop shaking.",
    src: "/media/videos/drive.mp4",
    poster: memory1,
  },
  {
    title: "2:19 AM",
    note: "The night I finally said it.",
    src: "/media/videos/rain.mp4",
    poster: memory2,
  },
];

export type LoveNote = { title: string; body: string };

export const loveNotes: LoveNote[] = [
  {
    title: "The Story Reply That Changed Everything",
    body: "I wasn't trying to start anything. You posted The Man Who Sold The World and I typed \"I'm so glad you knew Nirvana. Hail Kurt Cobain.\" and put my phone down like it was nothing. It was nothing. That's the part that still gets me — the biggest thing that ever happened to me looked exactly like nothing while it was happening. If I had scrolled past, I'd never have known what I was missing. I think about that more often than I should.",
  },
  {
    title: "The Girl From Dahanu",
    body: "21 March. I changed my shirt three times, walked around the festival twice before you got there, and told myself to just be normal. Then you showed up and I forgot the entire script. You were standing there and my only coherent thought was that I wanted to hold your hand. That's it. Everything I'd been panicking about for days turned out to be nothing, because being near you was the easiest thing I've ever done.",
  },
  {
    title: "2:19 AM",
    body: "I rewrote that message so many times, Divyangi ❤️. Deleted it, typed it again, changed one word, deleted it again. It was 2:19 in the morning and I remember my heart going stupidly fast when I finally pressed send. I still think I could have said it better. I probably always will. But I meant every single word of it, and I'd send it again a thousand times.",
  },
  {
    title: "June 6",
    body: "I don't have good enough words for that day and I've tried. You looked at me and the rest of the world just stopped mattering. Your smile, your eyes, the way you were looking at me — I keep going back to it. If someone told me I could keep exactly one moment forever and lose the rest, I know which one I'd pick without thinking.",
  },
  {
    title: "Dear Rawrokiebye",
    body: "Nobody else gets to call you that, and I like that a lot more than I let on. You are the person I want to tell things to first — the good news, the bad news, the completely pointless news at 1am. Thank you for being patient with me, for laughing at my terrible jokes, for making days that should have been ordinary into ones I still remember. I love you. Quietly and loudly and all the time.",
  },
];

/** "If We Could Pause Time" — the slow, quiet section. */
export const pauseTime = {
  eyebrow: "if we could pause time",
  title: "If We Could Pause Time",
  lines: [
    "If I could pause time...",
    "I'd pause it in every moment you smiled.",
    "I'd pause it when you laughed so hard you couldn't breathe.",
    "I'd pause it during our late-night conversations.",
    "I'd pause it every time you looked at me.",
    "Because those are the moments I never want to lose.",
  ],
  button: "One More Memory",
};

/** Editable — each click of "One More Memory" pulls one of these. */
export const pausedMemories: string[] = [
  "The first time we talked — a Nirvana story, and nothing was ever the same after it.",
  "Dahanu Festival. 21 March. My hands would not stop shaking.",
  "Our first kiss, and the way the whole world went quiet.",
  "Late-night calls where neither of us wanted to hang up first.",
  "The day I realised I loved you — nothing dramatic, you were just being you.",
  "The day you made me laugh until my stomach actually hurt.",
  "The random photo you sent for no reason that made my entire week.",
  "Every tiny, pointless moment that somehow became unforgettable.",
];

/** "The Little Things" — floating cards. */
export const littleThings: string[] = [
  "The way you smile.",
  "The way you say my name.",
  "The random photos you send.",
  "The way you make bad days feel lighter.",
  "The way talking to you became my favorite part of the day.",
  "The way silence with you never feels awkward.",
  "The way your eyes light up.",
  "The way you somehow became home.",
];

export const finalQuote = [
  "In the end, it was never about grand moments.",
  "It was always the little things... and you.",
];

export const memoryJar: string[] = [
  "The night we stayed up talking about nothing important and everything at once.",
  "You falling asleep mid-call and insisting later that you didn't.",
  "The song that came on at exactly the right moment.",
  "Dahanu, and the walk where neither of us wanted to go home.",
  "The way you looked at me across a crowd of people.",
  "Sharing one pair of headphones.",
  "Laughing so hard we had to stop walking.",
  "2:19 AM, and the first time you said it back.",
  "That terrible meal we still talk about.",
  "You texting me goodnight and then talking for two more hours.",
];

/** Random floating "I love you" messages. */
export const loveMessages: string[] = [
  "I love you, Divyangi ❤️",
  "I was just thinking about you.",
  "You're my favourite person.",
  "I'd choose you again. Immediately.",
  "You make everything softer.",
  "Missing you a little right now.",
  "Hail Kurt Cobain.",
  "You're the best thing that ever happened to me.",
  "I hope you know how loved you are.",
  "Come here.",
  "I still get nervous around you sometimes.",
  "You're my calm.",
  "Thank you for staying.",
  "You're beautiful. Especially unposed.",
  "I love your mind.",
  "Everything reminds me of you.",
  "I'd listen to you talk forever.",
  "You're home.",
  "I'm so proud of you.",
  "You make me laugh like nobody else.",
  "I love the life we're building.",
  "Rawrokiebye.",
  "Your happiness is my favourite thing.",
  "I love you more than yesterday.",
  "You feel like a song I never get tired of.",
  "I love how you love things.",
  "You're my person, always.",
  "I keep falling for you.",
  "I love the way you exist.",
  "Nothing is boring with you.",
  "You have the best heart I know.",
  "I love being known by you.",
  "You're my quiet place.",
  "I love you in the ordinary hours.",
  "You still surprise me.",
  "You make me feel lucky.",
  "I love you at 3am.",
  "You are so easy to adore.",
  "I love your laugh most of all.",
  "Being yours is my favourite fact.",
  "I love that we're us.",
  "You made me believe in this.",
  "I'd do all of it again.",
  "I love you, quietly and loudly.",
  "Always you.",
];

export const scrapbook = [
  { caption: "us, unposed", photo: memory1, rotate: -3 },
  { caption: "dahanu", photo: memory2, rotate: 2.5 },
  { caption: "hand in hand", photo: memory3, rotate: -1.5 },
  { caption: "our corner of the world", photo: memory2, rotate: 3 },
];

export const favorites = [
  { label: "Songs that are ours", items: ["About You — The 1975", "The Man Who Sold The World — Nirvana", "Robbers — The 1975"] },
  { label: "Movies we keep rewatching", items: ["Before Sunrise", "Call Me By Your Name", "La La Land"] },
  { label: "Food that means us", items: ["Late-night noodles", "Anything from the festival stalls", "Anything you eat off my plate"] },
  { label: "Dream destinations", items: ["Kyoto in spring", "A quiet coast in Italy", "Anywhere, honestly"] },
  { label: "Nickname", items: ["Rawrokiebye — only I get to use it."] },
  { label: "Favourite dates", items: ["21 March", "19 April, 2:19 AM", "6 June"] },
];

export const starMessage = {
  title: "This one is us.",
  body: "Two small lights that found each other in an absurd amount of dark. Whatever happens, that already happened — and nothing can un-happen it.",
};

export const secretMessage = {
  hint: "Some things are only for you.",
  title: "You found it, Rawrokiebye.",
  body: "I knew you would. You always notice the things other people walk past. That's one of the thousand reasons I love you — and I'm going to keep telling you about the other nine hundred and ninety-nine for as long as you'll let me.",
};

export const gratitude = {
  lines: [
    "Thank you...",
    "for making ordinary days feel unforgettable.",
    "For turning random conversations into memories.",
    "For making me feel loved in ways I never knew I needed.",
    "I hope years from now...",
    "we'll look back at this website together...",
    "and smile at how our story began.",
  ],
};

export const ending = {
  lines: ["If I had to choose again...", "It would always be you."],
  closing: "Happy Girlfriend's Day, Divyangi ❤️",
};
