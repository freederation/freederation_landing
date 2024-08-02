import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    mdsvex({ extension: 'md' }), // No dot here
    sveltePreprocess(),
    vitePreprocess(),
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
