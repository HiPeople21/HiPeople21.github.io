import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 preprocess: preprocess(),
 kit: {
  adapter: adapter({
    pages: 'docs',
    assets: 'docs',
    fallback: 'index.html'
  }),
  paths: {
    base: ''
  },
  prerender: {
    default: false
  }
 }
};
export default config;