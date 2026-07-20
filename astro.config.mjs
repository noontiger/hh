import { defineConfig } from 'astro/config';

// base '/hh' serves the site at https://noontiger.github.io/hh/
export default defineConfig({
  site: 'https://noontiger.github.io',
  base: '/hh',
  output: 'static',
  trailingSlash: 'ignore',
});
