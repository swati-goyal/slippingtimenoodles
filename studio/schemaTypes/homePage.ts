import { defineArrayMember, defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Hero eyebrow',
      type: 'string',
      initialValue: 'a personal atlas / est. 2026',
    }),
    defineField({
      name: 'heroTitleLineOne',
      title: 'Hero title line one',
      type: 'string',
      initialValue: 'slipping time',
    }),
    defineField({
      name: 'heroTitleLineTwo',
      title: 'Hero title line two',
      type: 'string',
      initialValue: 'noodles.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle',
      type: 'text',
      rows: 5,
      initialValue:
        "A life doesn't sort itself into folders. Mine loops — a proof aches like a poem, a poem behaves like an engineering problem, and Tuesday keeps looping back through 1998. This is where the noodle goes when it slips.",
    }),
    defineField({
      name: 'scrollCue',
      title: 'Scroll cue',
      type: 'string',
      initialValue: 'keep pulling the thread',
    }),
    defineField({
      name: 'writingTitle',
      title: 'Writing title',
      type: 'string',
      initialValue: 'Writing',
    }),
    defineField({
      name: 'writingMark',
      title: 'Writing mark',
      type: 'string',
      initialValue: '01 — not a sequence, just a number',
    }),
    defineField({
      name: 'writingIntro',
      title: 'Writing intro',
      type: 'text',
      rows: 3,
      initialValue:
        "Poems, essays, and the feminist pieces that wouldn't stay quiet. Some of it signs its real name. Some of it hides as Knightess.",
    }),
    defineField({
      name: 'writingQuote',
      title: 'Writing quote lines',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        '[ a placeholder verse — swap this for a real fragment ]',
        'the noodle does not know it is a noodle',
        'it only knows it is slipping, and calls that living',
      ],
    }),
    defineField({
      name: 'writingPlaceholderNote',
      title: 'Writing placeholder note',
      type: 'string',
      initialValue: 'drop in three lines of your own here. this is a stand-in, not your voice.',
    }),
    defineField({
      name: 'writingLinks',
      title: 'Writing links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'href', type: 'string' }),
          ],
        }),
      ],
      initialValue: [
        { label: 'Medium — under my own name', href: '#' },
        { label: 'Medium — as Knightess', href: '#' },
        { label: 'Tumblr — bhasad', href: '#' },
        { label: 'the full archive', href: '#archive' },
      ],
    }),
    defineField({
      name: 'portraitTitle',
      title: 'Portraits title',
      type: 'string',
      initialValue: 'Portraits of People',
    }),
    defineField({
      name: 'portraitMark',
      title: 'Portraits mark',
      type: 'string',
      initialValue: '02 — people, not labels',
    }),
    defineField({
      name: 'portraitIntro',
      title: 'Portrait intro',
      type: 'text',
      rows: 3,
      initialValue:
        'A place to keep written portraits of the people in my life, without names or judgments. I want to notice how I remember them, what was actually interesting, and what was only a passing observation.',
    }),
    defineField({
      name: 'portraits',
      title: 'Portraits',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'body', type: 'text', rows: 6 }),
          ],
        }),
      ],
      initialValue: [
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
    }),
    defineField({
      name: 'archiveTitle',
      title: 'Archive title',
      type: 'string',
      initialValue: 'Archive',
    }),
    defineField({
      name: 'archiveMark',
      title: 'Archive mark',
      type: 'string',
      initialValue: '§ — the whole pile, searchable',
    }),
    defineField({
      name: 'archiveIntro',
      title: 'Archive intro',
      type: 'text',
      rows: 3,
      initialValue:
        'Every poem, essay, and stray note, hosted here in full — filter by kind or thread, or just search for the word you half-remember.',
    }),
    defineField({
      name: 'mathTitle',
      title: 'Math title',
      type: 'string',
      initialValue: 'Math & Curiosities',
    }),
    defineField({
      name: 'mathMark',
      title: 'Math mark',
      type: 'string',
      initialValue: '∞ — math & other curiosities',
    }),
    defineField({
      name: 'mathIntro',
      title: 'Math intro',
      type: 'text',
      rows: 3,
      initialValue:
        'Half-finished proofs, things I find beautiful, and the slow work of a mathematician-in-training. Not a lecture. A sketchbook.',
    }),
    defineField({
      name: 'mathCards',
      title: 'Math cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'body', type: 'text', rows: 4 }),
            defineField({ name: 'tag', type: 'string' }),
          ],
        }),
      ],
      initialValue: [
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
    }),
    defineField({
      name: 'engineeringTitle',
      title: 'Engineering title',
      type: 'string',
      initialValue: 'Engineering',
    }),
    defineField({
      name: 'engineeringMark',
      title: 'Engineering mark',
      type: 'string',
      initialValue: '02 — curiosity, credentialed',
    }),
    defineField({
      name: 'engineeringIntro',
      title: 'Engineering intro',
      type: 'text',
      rows: 3,
      initialValue:
        'The part of the site that looks the most like a CV, framed the way it actually feels: as curiosity that happens to pay rent.',
    }),
    defineField({
      name: 'engineeringEntries',
      title: 'Engineering entries',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'role', type: 'string' }),
            defineField({ name: 'period', type: 'string' }),
            defineField({ name: 'detail', type: 'string' }),
          ],
        }),
      ],
      initialValue: [
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
    }),
    defineField({
      name: 'betweenTitle',
      title: 'Between title',
      type: 'string',
      initialValue: 'In Between',
    }),
    defineField({
      name: 'betweenMark',
      title: 'Between mark',
      type: 'string',
      initialValue: '— — everything in between',
    }),
    defineField({
      name: 'betweenIntro',
      title: 'Between intro',
      type: 'text',
      rows: 2,
      initialValue: "No folder for these. That's the point.",
    }),
    defineField({
      name: 'betweenCards',
      title: 'Between cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'body', type: 'text', rows: 3 }),
          ],
        }),
      ],
      initialValue: [
        { title: 'Astrophotography', body: 'A rig, a budget, and a lot of patient waiting for clear sky.' },
        { title: 'Lindy hop', body: 'Boogie Bären, still on Level 1, still delighted by it.' },
        { title: 'German, A1.2', body: 'The current gate to almost everything else on this list.' },
        { title: 'Puzzles & folklore', body: 'Jigsaw pieces, selkies, and the odd corner of mythology.' },
      ],
    }),
    defineField({
      name: 'footerTitle',
      title: 'Footer title',
      type: 'string',
      initialValue: 'say hello, or don’t — the noodle keeps slipping either way.',
    }),
    defineField({
      name: 'footerLine',
      title: 'Footer line',
      type: 'string',
      initialValue: 'slippingtimenoodles.com · built to loop, not to finish',
    }),
  ],
  preview: {
    select: {
      title: 'heroTitleLineOne',
      subtitle: 'eyebrow',
    },
  },
});
