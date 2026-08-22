import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const sanityConfigured = Boolean(projectId && projectId !== 'your_sanity_project_id');

const client = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion: '2026-01-01', useCdn: true })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function sanityImage(source: unknown) {
  return builder && source ? builder.image(source).width(900).auto('format').url() : '';
}

export async function getArtwork() {
  if (!client) return [];

  const items = await client.fetch(
    `*[_type == "artwork"] | order(sortOrder asc, _createdAt asc) {
      title,
      year,
      caption,
      image
    }`,
  );

  return items.map((item: { title: string; year?: number; caption?: string; image: unknown }) => ({
    title: item.title,
    year: item.year || '',
    caption: item.caption || '',
    src: sanityImage(item.image),
  }));
}
