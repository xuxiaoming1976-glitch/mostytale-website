import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://mostytale.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    compress(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
