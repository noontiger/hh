# hh — Personal Portfolio

A single-page personal portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages at **https://noontiger.github.io/hh/**.

The visual design is inspired by [Brittany Chiang's v4 portfolio](https://github.com/bchiang7/v4) (MIT licensed). Per the original license, credit is given: design & layout by **Brittany Chiang** ([brittanychiang.com](https://brittanychiang.com)). The content here is intended to be replaced with the owner's own information — edit `src/data/content.ts` and redeploy.

## Develop

```bash
npm install
npm run dev      # local preview at http://localhost:4321/hh/
npm run build    # static build to ./dist
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and publishes to GitHub Pages automatically.
