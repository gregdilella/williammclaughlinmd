import { educationTopics } from '$lib/data/education';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Generate all education pages at build time
export const prerender = true;

export const load: PageLoad = ({ params }) => {
  const topic = educationTopics.find((t) => t.slug === params.slug);

  if (!topic) {
    throw error(404, 'Education topic not found');
  }

  return { topic };
};

// Tell SvelteKit about all valid slugs for prerendering
export function entries() {
  return educationTopics.map((t) => ({ slug: t.slug }));
}
