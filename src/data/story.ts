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

export const hero = {
  title: "Happy Girlfriend's Day",
  subtitle: "For the most beautiful chapter of my life.",
  cta: "Begin Our Story",
};

export const song = {
  title: "About You",
  artist: "The 1975",
  /** Put your mp3 at public/media/audio/about-you.mp3 */
  src: "/media/audio/about-you.mp3",
  prompt: "Play this before reading.",
};

export type TimelineEntry = {
  date: string;
  title: string;
  description: string;
  photo?: string;
  video?: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "The beginning",
    title: "The day we met",
    description:
      "I didn't know it yet, but the whole shape of my life changed in the space of a few ordinary minutes.",
    photo: memory1,
  },
  {
    date: "That same night",
    title: "First conversation",
    description:
      "We talked until the words stopped being small. I remember looking at the time and not caring at all.",
  },
  {
    date: "Somewhere after",
    title: "First laugh together",
    description:
      "You laughed at something stupid I said, and I decided right there that I'd spend a long time trying to hear it again.",
    photo: memory3,
  },
  {
    date: "The first frame",
    title: "First photo",
    description:
      "Slightly blurry, badly lit, both of us mid-sentence. Still my favourite picture ever taken.",
    photo: memory2,
  },
  {
    date: "Finally",
    title: "First date",
    description:
      "I rehearsed things to say and forgot all of them. It didn't matter — you made the silence feel easy.",
    video: "/media/videos/first-date.mp4",
  },
  {
    date: "Unforgettable",
    title: "Our funniest memory",
    description:
      "We still can't tell this story to anyone else without ruining it. It's ours, and that's the best part.",
  },
  {
    date: "Quietly, at 2am",
    title: "The day I realised I loved you",
    description:
      "Nothing dramatic happened. You were just there, being you, and something in me went very quiet and very sure.",
  },
  {
    date: "Right now",
    title: "Today",
    description:
      "Still choosing you. Still amazed that you chose me back.",
  },
];

export type GalleryPhoto = { src: string; caption: string; alt: string };

/** Add as many as you like — the grid handles dozens. */
export const gallery: GalleryPhoto[] = [
  { src: memory1, caption: "the night everything started", alt: "A couple under warm street lights at night" },
  { src: memory2, caption: "our table, our rain", alt: "Two coffee cups by a rainy window at night" },
  { src: memory3, caption: "your hand, always", alt: "Two hands reaching for each other under fairy lights" },
  { src: memory2, caption: "late again", alt: "Warm café window at night" },
  { src: memory3, caption: "the walk home", alt: "Hands under string lights" },
  { src: memory1, caption: "you, laughing", alt: "Silhouette of a couple at night" },
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
    title: "That drive at night",
    note: "Windows down, your voice louder than the radio.",
    src: "/media/videos/drive.mp4",
    poster: memory1,
  },
  {
    title: "Rain on the window",
    note: "Nowhere to be. My favourite kind of afternoon.",
    src: "/media/videos/rain.mp4",
    poster: memory2,
  },
];

export type LoveNote = { title: string; body: string };

export const loveNotes: LoveNote[] = [
  {
    title: "The first time I saw you...",
    body: "I remember thinking that you looked like someone I already missed. It made no sense then. It makes perfect sense now. I've replayed that moment so many times that I'm not sure anymore which details are memory and which ones I added because I wanted them to be true — but the feeling has never changed.",
  },
  {
    title: "I still remember...",
    body: "The exact sound of your voice on the phone at two in the morning, half asleep, telling me to go to bed and staying on the line anyway. If I could keep one recording of my life, it would probably be that.",
  },
  {
    title: "I hope years from now...",
    body: "We're somewhere quiet, older, a little softer around the edges, and you still turn to tell me something small — and I still stop everything to listen. I don't need a bigger dream than that one.",
  },
  {
    title: "I never told you this...",
    body: "There were days I was having a genuinely awful time and the only reason I got through them well was that I knew I'd get to talk to you at the end of it. You were the good part I was walking toward. You still are.",
  },
];

/** "100 Reasons" — add or edit freely; the counter adapts. */
export const reasons: string[] = [
  "The way you say my name when you're happy.",
  "You laugh at your own jokes before you finish them.",
  "You remember the tiny things I mention once.",
  "The way you get quiet when a song matters to you.",
  "You're kind to people who can do nothing for you.",
  "Your handwriting.",
  "How you look first thing in the morning.",
  "You let me be a mess without making me feel like one.",
  "The way you dance when you think nobody's watching.",
  "You always steal food off my plate and pretend you didn't.",
  "Your terrible, wonderful taste in movies.",
  "You make ordinary evenings feel like something.",
  "The way you argue with me and still hold my hand.",
  "You never made me feel like too much.",
  "Your voice on a bad day.",
  "How excited you get about small good news.",
  "You always find the moon before I do.",
  "The way you fall asleep mid-sentence.",
  "You're braver than you give yourself credit for.",
  "You forgive quickly and completely.",
  "The way your eyes go soft when you're tired.",
  "You send me things that made you think of me.",
  "You're honest even when it's inconvenient.",
  "How safe silence feels with you.",
  "You make me want to be better without ever asking me to be.",
];

export const memoryJar: string[] = [
  "The night we stayed up talking about nothing important and everything at once.",
  "You falling asleep on my shoulder and insisting later that you didn't.",
  "The song that came on at exactly the right moment.",
  "That walk in the cold when neither of us wanted to go home.",
  "The way you looked at me across a room full of people.",
  "Sharing one pair of headphones.",
  "Laughing so hard we had to stop walking.",
  "The first time you said it back.",
  "That terrible meal we still talk about.",
  "You texting me goodnight and then talking for two more hours.",
];

/** Random floating "I love you" messages. */
export const loveMessages: string[] = [
  "I love you.",
  "I was just thinking about you.",
  "You're my favourite person.",
  "I'd choose you again. Immediately.",
  "You make everything softer.",
  "Missing you a little right now.",
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
  "You're worth every mile.",
  "I'd wait.",
  "Your happiness is my favourite thing.",
  "I love you more than yesterday.",
  "You feel like a song I never get tired of.",
  "Even your bad moods are dear to me.",
  "I love how you love things.",
  "You're my person, always.",
  "I keep falling for you.",
  "You're the reason I look forward to evenings.",
  "I love the way you exist.",
  "I'd give you the last bite. Every time.",
  "Nothing is boring with you.",
  "You have the best heart I know.",
  "I love being known by you.",
  "You're my quiet place.",
  "I love you in the ordinary hours.",
  "You still surprise me.",
  "You make me feel lucky.",
  "I love you at 3am.",
  "You are so easy to adore.",
  "You're the good news.",
  "I love your laugh most of all.",
  "Being yours is my favourite fact.",
  "I love that we're us.",
  "You made me believe in this.",
  "I'd do all of it again.",
  "You're my whole soft spot.",
  "I love you, quietly and loudly.",
  "Always you.",
];

export const scrapbook = [
  { caption: "us, unposed", photo: memory1, rotate: -3 },
  { caption: "the rain day", photo: memory2, rotate: 2.5 },
  { caption: "hand in hand", photo: memory3, rotate: -1.5 },
  { caption: "our corner of the world", photo: memory2, rotate: 3 },
];

export const favorites = [
  { label: "Her favourite songs", items: ["About You — The 1975", "Robbers — The 1975", "Cigarettes After Sex — Apocalypse"] },
  { label: "Movies we keep rewatching", items: ["Before Sunrise", "Call Me By Your Name", "La La Land"] },
  { label: "Food that means us", items: ["Late-night noodles", "The bakery near yours", "Anything you cook"] },
  { label: "Dream destinations", items: ["Kyoto in spring", "A quiet coast in Italy", "Anywhere, honestly"] },
  { label: "Nickname", items: ["Only I get to use it."] },
  { label: "Favourite memories", items: ["That walk home", "The 2am call", "Today"] },
];

export const starMessage = {
  title: "This one is us.",
  body: "Two small lights that found each other in an absurd amount of dark. Whatever happens, that already happened — and nothing can un-happen it.",
};

export const secretMessage = {
  hint: "Some things are only for you.",
  title: "You found it.",
  body: "I knew you would. You always notice the things other people walk past. That's one of the thousand reasons I love you — and I'm going to keep telling you about the other nine hundred and ninety-nine for as long as you'll let me.",
};

export const ending = {
  lines: ["If I had to choose again...", "It would always be you."],
  closing: "Happy Girlfriend's Day ❤️",
};
