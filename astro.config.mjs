// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for sitemap & <meta> tags. Update once the domain is live.
  site: 'https://mingchaosun.com',

  // Plain static HTML/CSS/JS — ideal for GitHub Pages.
  // No `base` needed: custom domain + user/org pages serve from root.
  // If you ever deploy to a *project* repo (username.github.io/<repo>), set: base: '/<repo>'
  output: 'static',

  integrations: [sitemap()]
});