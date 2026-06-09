import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://saint-sins.github.io',
  base: '/my-portfolio',
  integrations: [mdx(), sitemap(), tailwind()]
});