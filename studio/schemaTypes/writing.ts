import { defineField, defineType } from 'sanity';

export const writing = defineType({
  name: 'writing',
  title: 'Writing',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['poem', 'essay', 'note'] }, validation: (rule) => rule.required() }),
    defineField({ name: 'identity', title: 'Published as', type: 'string', options: { list: ['self', 'knightess'] }, initialValue: 'self' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 12, validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
});
