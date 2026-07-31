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
  title: "Happy Girlfriend's Day, Divyangi 💗",
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
      "You had posted a reel about nirvana. I replied without overthinking it — and somehow that tiny, ordinary message rearranged my entire life.",
    quote: "I'm soo fucking glad i knew nirvana",
  //  photo: memory3,
    
  },
  {
    date: "21 March · Dahanu Festival",
    title: "The first time I saw you",
    description:
      "I still remember how nervous I was before meeting you. I kept wondering… \"What if she doesn't like me?\" I tried acting normal. You were and are soo pretty. The only thing i wanted to do was hold your hands at that time",
  //  photo: memory3,
  },
  {
    date: "19 April 2026 · 2:19 AM",
    title: "The Night I Asked You",
    description:
      "I still remember how nervous I was while typing that message. i could no more wait for us to be together. Even today… I still feel I could've done better. But if there's one thing I know, every single word came from my heart. I lovvee youu so much 💗",
  //  photo: memory1,
  
  },
  {
    date: "6 June",
    title: "Our First Kiss",
    description:
      "I still remember 6th June. The moment everything else disappeared. You looked so unbelievably beautiful. Your smile, your eyes, the way you looked at me… I don't think I'll ever find words beautiful enough to describe how stunning you were. If I could relive one moment forever, it would be that one.",
    //photo: memory2,
    slow: true,
  },
  
  {
    date: "Right now",
    title: "Today",
    description: "Still choosing you, Divyangi. Still amazedd that you chose me backkk.",
  },
];

export type GalleryPhoto = { src: string; caption: string; alt: string };

/** Add as many as you like — the grid handles dozens. */
export const gallery: GalleryPhoto[] = [
  { src: "/media/photos/firstselfie2.jpg", caption: "Our first selfie", alt: "A couple under warm street lights at night" },
  { src: "/media/photos/hereyes.jpg", caption: "Ohh god, those eyes", alt: "Silhouette of a couple at night" },
  { src: "/media/photos/photobooth.jpg", caption: "Favorite pictures 💗", alt: "Hands under string lights" },
  { src: "/media/photos/fitcheck.jpg", caption: "First ever fitcheck", alt: "Hands under string lights" },
  { src: "/media/photos/mycam.jpg", caption: "From goated cam 🗣", alt: "Hands under string lights" },


];

export type VideoMemory = { title: string; note: string; src: string; poster: string };

export const videos: VideoMemory[] = [
  {
    title: "The way you laugh",
    note: "15 seconds I've watched a hundred times.",
    src: "/media/videos/mainclip.mp4",
    poster: "/media/photos/thumbn.jpg",
  },
  {
    title: "Random date",
    note: "God you look soo pretty.",
    src: "/media/videos/market.mp4",
    poster: "/media/photos/teddy.jpg",
  },
  {
    title: "birthday night",
    note: "i wish that day never ended",
    src: "/media/videos/birthday.mp4",
    poster: "/media/photos/flower2.jpg",
  },
];

export type LoveNote = { title: string; body: string };

export const loveNotes: LoveNote[] = [
  {
    title: "The Story Reply That Changed Everything",
    body: "I wasn't trying to start anything. You posted a reel about nirvana and I typed \"the man who sold the world.\" and put my phone down like it was nothing. It was nothing. That's the part that still gets me — the biggest thing that ever happened to me looked exactly like nothing while it was happening. If I had scrolled past, I'd never have known what I was missing. The man who brought us together",
  },
  {
    title: "The Girl From Dahanu",
    body: "21 March. I changed my shirt three times and yk I don't have any😭. Then you showed up and I forgot the entire script. You looked so gorgeous more than i could imagine. You were standing there and my only coherent thought was that I wanted to hold your hand, which too I successfully did the 2nd day for which I'm so glad.",
  },
  {
    title: "2:19 AM",
    body: "I rewrote that message so many times, Divyangi 💗. Deleted it, typed it again, changed one word, deleted it again, hence you said 'kaha gayab ho gaya😭' It was 2:19 in the morning and I remember my heart going stupidly fast when I finally pressed send. I still think I could have said it better. I probably always will. But I meant every single word of it. I love you so muchh divyangi💗.",
  },
  {
    title: "June 6",
    body: "I don't have good enough words for that day and I've tried. You looked at me and the rest of the world just stopped mattering. Your smile, your eyes, the way you were looking at me, I keep going back to it. If someone told me I could keep exactly one moment forever and lose the rest, I know which one I'd pick without thinking.",
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
  "The way you smile, soo beautiful.",
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
  "Dahanu, and the hug where neither of us wanted to go home.",
  "The way you looked at me across a crowd of people.",
  "Sharing one pair of headphones.",
  "Laughing so hard we had to stop walking.",
  "2:19 AM, and the first time you said it back.",
  "momos of 7th 🗣🗣.",
  "You texting me goodnight and then talking for two more hours.",
];

/** Random floating "I love you" messages. */
export const loveMessages: string[] = [
  "I love you, Divyangi 💗",
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
  { caption: "", photo: "/media/photos/her6.jpg", rotate: -3 },
  { caption: "", photo: "/media/photos/her7.jpg", rotate: 2.5 },
  { caption: "", photo: "/media/photos/her3.jpg", rotate: -2 },
  { caption: "", photo: "/media/photos/her4.jpg", rotate: -1 },
  { caption: "", photo: "/media/photos/her1.jpg", rotate: 2 },
  { caption: "", photo: "/media/photos/her5.jpg", rotate: -3 },
  { caption: "", photo: "/media/photos/her2.jpg", rotate: 2.5 },
  { caption: "", photo: "/media/photos/her8.jpg", rotate: -1},
  { caption: "", photo: "/media/photos/her9.jpg", rotate: 2 },
  { caption: "", photo: "/media/photos/her10.jpg", rotate: -3 },



  
  
];


export const favorites = [
  { label: "Songs that are ours", items: ["About You — The 1975", "The Man Who Sold The World — Nirvana", "Its been so long - The Living Tombstone"] },
  { label: "Dream destinations", items: ["In your arms, thats all i want rn"] },
  { label: "Favourite dates", items: ["21 March", "19 April", "6 June", "7 june"] },
];


export const starMessage = {
  title: "This one is us.",
  body: "Two small lights that found each other in an absurd amount of dark. Whatever happens, that already happened — and nothing can un-happen it.",
};

export const secretMessage = {
  hint: "Some things are only for you.",
  title: "You found it!.",
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
  closing: "Happy Girlfriend's Day, Divyangi 💗",
};
