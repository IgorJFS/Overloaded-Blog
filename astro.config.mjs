// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://overloaded-blog.vercel.app',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [vue(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: 'lightningcss'
    }
  }
});