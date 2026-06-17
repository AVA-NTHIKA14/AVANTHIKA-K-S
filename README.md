# Avanthika K S — Portfolio

Built from the Figma design with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js 14 app, so it deploys to Vercel, Netlify, or any Node host with zero config:

```bash
npx vercel
```

(Push to GitHub and import into Vercel for the simplest path — this sandbox's network is restricted to package registries, so the live deploy step needs to happen from your own machine or a connected Vercel account.)

## Structure

- `app/page.tsx` — assembles all sections
- `app/components/` — Header, HeroSection, AboutSection, ProcessSection, WorkSection, AISection, ContactSection
- `app/globals.css` — Inter font import, dark theme base styles

## Notes

- The About Me portrait and Work card thumbnails use placeholder graphics (the original Figma image assets are stored on Figma's temporary CDN and weren't reachable from the build sandbox). Swap in real images by replacing the placeholder `<div>`/`<svg>` blocks in `AboutSection.tsx` and `WorkSection.tsx` with your own `<img>` or `next/image` tags.
- Color palette: black `#000`, accent yellow `#facc15`, white/translucent text per the design.
- All sections are scroll-triggered with Framer Motion (`useInView`) and the header/nav smooth-scrolls to each section by id (`about-me`, `process`, `work`, `ai-in-my-process`, `contact`).
