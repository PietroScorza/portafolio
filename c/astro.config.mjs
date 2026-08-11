// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = repository ? `/${repository}/` : '/';
const siteUrl =
  repository && process.env.GITHUB_REPOSITORY_OWNER
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${repository}/`
    : undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: basePath,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
