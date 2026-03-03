# Migrate to Astro and modernize build system

## 1. Summary

Replace the existing Eleventy + Webpack + PostCSS build pipeline with Astro in static output mode, and switch the package manager from yarn to pnpm. The site's two pages (`index` and `projects`) will be converted from EJS templates to Astro components. Tailwind CSS will be upgraded from v2 to v4 using its native Vite plugin. Vivere and Turbo are retained as-is — they will be bundled by Astro's Vite pipeline instead of Webpack. The result is a single, unified build tool (Astro/Vite) replacing the current three-tool orchestration (Eleventy + Webpack + PostCSS CLI), managed with pnpm.

## 2. Scope

**In scope:**
- Switch package manager from yarn to pnpm (remove `yarn.lock`, add `pnpm-lock.yaml`)
- Install and configure Astro (static/SSG mode)
- Convert EJS layouts, pages, and includes to `.astro` components
- Install and configure Tailwind v4 via its Vite plugin (`@tailwindcss/vite`)
- Migrate `tailwind.config.js` settings (custom colors, fonts, utilities) to Tailwind v4's CSS-based config
- Replace Webpack with Astro/Vite for bundling `main.js` (Vivere + Turbo)
- Preserve all existing content, copy, images, and assets
- Update `package.json` scripts (`dev`, `build`, `preview`)
- Remove now-unnecessary packages: `@11ty/eleventy`, `webpack`, `webpack-cli`, `postcss-cli`, `npm-run-all`, `rimraf`, `@mightyplow/eleventy-plugin-cache-buster`

**Out of scope:**
- Content changes or visual redesign
- Replacing or modifying Vivere or Turbo
- Adding new pages or features

## 3. Success Criteria

- `pnpm build` completes without errors and outputs a static site
- `pnpm dev` starts a local dev server with hot reload
- Both pages (`/` and `/projects`) render visually identical to the current site
- Dark mode toggle works (Vivere's `page` component)
- Turbo navigation works between pages
- All Tailwind custom utilities (colors, fonts, grid) are preserved and applied correctly
- No Webpack, Eleventy, PostCSS CLI, or yarn processes remain in the dev/build pipeline
- `yarn.lock` is removed and `pnpm-lock.yaml` is present
- Built output is deployable as a static site (same as before)

## 4. Open Technical Questions

- Does `vivere` (v0.1.8) have any Webpack-specific imports or CJS-only entry points that might need adjustment for Vite's ESM-first bundler? The breakdown agent should check the `vivere` package's `exports` field.
- The current `tailwind.config.js` uses custom colors and a `content` glob for EJS files — the breakdown agent should audit all custom Tailwind config so nothing is missed during the v4 CSS-config migration.
- Eleventy's cache-buster plugin adds hashes to CSS/JS URLs. Astro/Vite handles this automatically — the breakdown agent should confirm no manual cache-busting logic exists elsewhere.
- Any CI/CD or deployment config (e.g. Netlify, Vercel config files) may reference `yarn` or Eleventy build commands and will need updating.
