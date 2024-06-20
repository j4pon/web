import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://j4pon.github.io',
  base: '',
  integrations: [tailwind(), react({
    include: ['**/react/*']
  })],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    },
    fallback:{
      "en":"es"
    }
  }
});