// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlos-diaz-07.github.io',
  base: '/eborarchers',
  output: 'static',
  integrations: [sitemap()],
});
