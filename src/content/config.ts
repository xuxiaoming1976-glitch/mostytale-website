import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.enum(['cleaning', 'golf-bags', 'accessories']),
    shortDescription: z.string(),
    amazonUrl: z.string().url(),
    amazonAsin: z.string(),
    rating: z.number().min(0).max(5),
    reviewCount: z.number().int().min(0),
    isFeatured: z.boolean().default(false),
    images: z.array(z.string()).default([]),
    specs: z.object({
      dimensions: z.string(),
      weight: z.string(),
      material: z.string(),
      color: z.string(),
    }),
    features: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })),
    howItWorks: z.array(z.object({
      step: z.number(),
      title: z.string(),
      description: z.string(),
    })),
    whatIsIncluded: z.array(z.string()),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.string().default('MOSTY Team'),
    image: z.string().optional(),
    category: z.enum(['Guides', 'Performance', 'Gear', 'Reviews', 'Tips']),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  products: productsCollection,
  blog: blogCollection,
};
