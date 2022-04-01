import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://github.com/sveltejs/svelte-preprocess
 // for more information about preprocessors
 preprocess: preprocess(),
 prerender : { 
   default: true
  },
 kit: {
 // hydrate the <div id="svelte"> element in src/app.html
  adapter: adapter({
    pages: 'docs',
    assets: 'docs',
    fallback: null
  }),
  paths: {
    base: '/hipeople21.github.io'
  }
 }
};
export default config;