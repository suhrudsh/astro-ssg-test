// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "wycjyw7e",
      dataset: "production",
      useCdn: false,
      apiVersion: "2026-03-02",
      studioBasePath: "/studio",
    }),
    react(),
  ],

  adapter: cloudflare(),
});