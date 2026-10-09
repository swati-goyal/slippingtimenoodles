// Fallback content used whenever Sanity has nothing published yet. The site is
// designed to render completely without a CMS connection, so every page reads
// from Sanity first and falls back to these shapes.

export const defaultHomePage = {
  eyebrow: 'a personal atlas / est. 2026',
  heroTitleLineOne: 'slipping time',
  heroTitleLineTwo: 'noodles.',
  heroSubtitle:
    "A life doesn't sort itself into folders. Mine loops — a proof aches like a poem, a poem behaves like an engineering problem, and Tuesday keeps looping back through 1998. This is where the noodle goes when it slips.",
  scrollCue: 'keep pulling the thread',
  writingTitle: 'Writing',
  writingMark: '01 — not a sequence, just a number',
  writingIntro:
    "Poems, essays, and the feminist pieces that wouldn't stay quiet. Some of it signs its real name. Some of it hides as Knightess.",
  writingQuote: [
    '[ a placeholder verse — swap this for a real fragment ]',
    'the noodle does not know it is a noodle',
    'it only knows it is slipping, and calls that living',
  ],
  writingPlaceholderNote: 'drop in three lines of your own here. this is a stand-in, not your voice.',
  writingLinks: [
    { label: 'Medium — under my own name', href: '#' },
    { label: 'Medium — as Knightess', href: '#' },
    { label: 'Tumblr — bhasad', href: '#' },
    { label: 'the full archive', href: '#archive' },
  ],
  portraitTitle: 'Portraits of People',
  portraitMark: '02 — people, not labels',
  portraitIntro:
    'A place to keep written portraits of the people in my life, without names or judgments. I want to notice how I remember them, what was actually interesting, and what was only a passing observation.',
  portraits: [
    {
      body:
        'A person who moves through a room as though they are listening for the shape of it before they enter it. They are graceful without trying to be, and their attention lands on a person as if it has already decided to stay.',
    },
    {
      body:
        'Someone whose warmth is easy to mistake for certainty, though it is really a soft kind of courage. They make conversation feel larger than it is, and leave behind a sense that other people are allowed to be vivid too.',
    },
    {
      body:
        'A quick observation that lingered longer than it should have: the kind of person who keeps their feeling hidden in the posture of the body, in the pause before speaking, in the way they notice everything and call it ordinary.',
    },
  ],
  archiveTitle: 'Archive',
  archiveMark: '§ — the whole pile, searchable',
  archiveIntro:
    'Every poem, essay, and stray note, hosted here in full — filter by kind or thread, or just search for the word you half-remember.',
  mathTitle: 'Math & Curiosities',
  mathMark: '∞ — math & other curiosities',
  mathIntro:
    'Half-finished proofs, things I find beautiful, and the slow work of a mathematician-in-training. Not a lecture. A sketchbook.',
  mathCards: [
    {
      title: 'Mathematics for Poets',
      body: 'A big mathematical idea, opened with a poem that already knew it. Quarterly, unhurried, in progress.',
      tag: 'ongoing — current focus',
    },
    {
      title: 'Reading log',
      body: "Notes from Wolf's Proof, Logic, and Conjecture, and whatever comes after it, in the years before Hagen.",
      tag: 'rebuilding — 2026–2029',
    },
  ],
  engineeringTitle: 'Engineering',
  engineeringMark: '02 — curiosity, credentialed',
  engineeringIntro:
    'The part of the site that looks the most like a CV, framed the way it actually feels: as curiosity that happens to pay rent.',
  engineeringEntries: [
    {
      role: 'SDET — Orbem, Munich',
      period: '2025 – present',
      detail: 'Testing infrastructure for research & ML systems, MRI-adjacent',
    },
    {
      role: 'Currently deepening AI / CS engineering skills',
      period: 'current focus',
      detail: 'Testing infrastructure for research & ML systems, MRI-adjacent',
    },
  ],
  betweenTitle: 'In Between',
  betweenMark: '— — everything in between',
  betweenIntro: "No folder for these. That's the point.",
  betweenCards: [
    { title: 'Astrophotography', body: 'A rig, a budget, and a lot of patient waiting for clear sky.' },
    { title: 'Lindy hop', body: 'Boogie Bären, still on Level 1, still delighted by it.' },
    { title: 'German, A1.2', body: 'The current gate to almost everything else on this list.' },
    { title: 'Puzzles & folklore', body: 'Jigsaw pieces, selkies, and the odd corner of mythology.' },
  ],
  footerTitle: 'say hello, or don’t — the noodle keeps slipping either way.',
  footerLine: 'slippingtimenoodles.com · built to loop, not to finish',
};

// Placeholder pieces so /writing and /archive render before anything is
// published. Each needs a slug because /writing/[slug] builds from it.
export const defaultWriting = [
  {
    title: '[placeholder] on forgetting slowly',
    slug: 'on-forgetting-slowly',
    type: 'poem',
    identity: 'self',
    date: '2026',
    tags: ['love', 'distance'],
    body: 'a placeholder stanza\nswap this for your real poem\nkeep the ache, lose the name',
  },
  {
    title: '[placeholder] a pretty man, said on purpose',
    slug: 'a-pretty-man-said-on-purpose',
    type: 'poem',
    identity: 'knightess',
    date: '2026',
    tags: ['gender', 'inversion'],
    body: 'another placeholder stanza\nyou know how this line should go\nbetter than I do',
  },
  {
    title: '[placeholder] why we test what we build',
    slug: 'why-we-test-what-we-build',
    type: 'essay',
    identity: 'self',
    date: '2026',
    tags: ['engineering', 'philosophy'],
    body: 'A placeholder essay opening. Replace with your real paragraphs — this is just holding the shape and the formatting.',
  },
  {
    title: '[placeholder] reading notes — Wolf, ch.1',
    slug: 'reading-notes-wolf-ch-1',
    type: 'note',
    identity: 'self',
    date: '2026',
    tags: ['math', 'proof'],
    body: 'Placeholder reading notes. Swap for your actual annotations from Proof, Logic, and Conjecture.',
  },
  {
    title: '[placeholder] a shape for testing infrastructure',
    slug: 'a-shape-for-testing-infrastructure',
    type: 'note',
    identity: 'self',
    date: '2026',
    tags: ['engineering', 'work'],
    body: 'Placeholder work note. Replace with something real from your notebook.',
  },
];

export const defaultArtwork = [
  { title: '[placeholder] untitled sketch', year: '2026', src: '', caption: 'graphite — swap src for a real photo of this' },
  { title: '[placeholder] noodle study', year: '2026', src: '', caption: 'ink — swap src for a real photo of this' },
  { title: '[placeholder] a stray doodle', year: '2026', src: '', caption: 'pencil — swap src for a real photo of this' },
];

// One entry per page, used to build the nav and the short index on the homepage.
export const pages = [
  { href: '/writing', label: 'Writing', blurb: 'poems, essays, and the pieces that would not stay quiet' },
  { href: '/portraits', label: 'Portraits', blurb: 'people, not labels' },
  { href: '/archive', label: 'Archive', blurb: 'the whole pile, searchable' },
  { href: '/math', label: 'Math', blurb: 'half-finished proofs and things I find beautiful' },
  { href: '/engineering', label: 'Engineering', blurb: 'curiosity that happens to pay rent' },
  { href: '/between', label: 'In Between', blurb: 'no folder for these' },
  { href: '/artwork', label: 'Artwork', blurb: 'graphite, ink, and the odd doodle' },
];
