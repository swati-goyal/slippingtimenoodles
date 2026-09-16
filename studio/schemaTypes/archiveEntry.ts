import { defineField, defineType } from 'sanity';

export const archiveEntry = defineType({
  name: 'archiveEntry',
  title: 'Archive Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['poem', 'essay', 'note'] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'identity',
      title: 'Published as',
      type: 'string',
      options: { list: ['self', 'knightess'] },
      initialValue: 'self',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 10,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
});