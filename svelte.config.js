import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 preprocess: preprocess(),
 kit: {
  adapter: adapter({
    pages: 'docs',
    assets: 'docs',
    fallback: null
  }),
  paths: {
    base: ''
  },
  prerender: {
    default: true
  }
 }
};
export default config;