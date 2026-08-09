import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tutorials = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/tutorials',
	}),
	schema: z.object({
		title: z.string(),
		category: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	tutorials,
};
