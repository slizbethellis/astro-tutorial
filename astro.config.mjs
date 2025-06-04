// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stiggy-stella-astro.netlify.app/",
  integrations: [preact()],
  experimental: {
    responsiveImages: true,
  },
  adapter: netlify({
    imageCDN: true,
  }),
});