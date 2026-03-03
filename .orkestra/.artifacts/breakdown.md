# Technical Design: Astro Migration

## Architecture Overview

Replace the 3-tool build pipeline (Eleventy + Webpack + PostCSS CLI) with Astro in static SSG mode using its built-in Vite pipeline. Package manager switches from yarn to pnpm.

**File mapping (EJS → Astro):**
- `src/layouts/default.ejs` → `src/layouts/Layout.astro`
- `src/index.ejs` → `src/pages/index.astro`
- `src/projects.ejs` → `src/pages/projects.astro`
- `src/includes/page/navigation.ejs` → `src/components/Navigation.astro`
- `src/includes/page/footer.ejs` → `src/components/Footer.astro`
- `src/includes/page/dark-mode.ejs` → `src/components/DarkMode.astro`
- `src/includes/work/stub.ejs` → `src/components/WorkStub.astro`
- `src/includes/projects/stub.ejs` → `src/components/ProjectStub.astro`
- `src/includes/projects/vivere.ejs` → `src/components/VivereDemo.astro`
- `src/includes/icons/*.ejs` → `src/components/icons/*.astro` (8 icon files)

**Assets:** Move `src/assets/` → `public/assets/` (preserves existing `/assets/xxx` URL paths)

**Scripts:** `src/scripts/main.js` and `src/scripts/components/page.js` stay unchanged; bundled by Vite via a `<script>` import in Layout.astro

**Tailwind v4:** Replace `tailwind.config.js` and `postcss.config.js` with CSS-based config using `@theme` directive and `@custom-variant`

## Key Technical Decisions

1. **Vivere is ESM-safe**: vivere v0.1.8 has a `module` field pointing to `dist/vivere.es2017-esm.js` — Vite picks this up natively; no CJS adapter needed

2. **Color remapping**: Tailwind v2 used non-standard color aliases (`gray`=blueGray, `blue`=indigo, `red`=rose, `purple`=violet). We override these in `@theme` with hardcoded hex values.

3. **Dark mode class strategy**: `@custom-variant dark (&:where(.dark, .dark *));` in main.css

4. **Hoverable variant**: `@custom-variant hoverable (@media (hover: hover));` in main.css + `@screen hoverable {}` blocks → `@media (hover: hover) {}`

5. **No data-turbo-track**: Vite hashes asset filenames in production; Turbo behavior is preserved without the explicit attribute

6. **No CI/CD updates needed**: No netlify.toml, vercel.json, or similar files found in the project

## Subtask Sequence

1. **Infrastructure** — pnpm + Astro scaffold (package.json, astro.config.mjs, public/ assets)
2. **Templates + CSS** — All EJS→Astro conversion and Tailwind v4 CSS config (depends on 1)
3. **Cleanup + Verification** — Remove old build files, run pnpm build (depends on 2)


---

## Proposed Subtasks

### 1. Scaffold Astro project infrastructure

Rewrite package.json for pnpm + Astro, create astro.config.mjs, move static assets to public/, and install dependencies.

**Depends on:** none

### 2. Convert all EJS templates to Astro and migrate CSS to Tailwind v4

Create all Astro components, layout, and pages from the EJS templates. Migrate main.css to Tailwind v4 CSS syntax with @theme config for custom colors, fonts, and variants.

**Depends on:** subtask 1

### 3. Remove legacy build files and verify pnpm build

Delete all old Eleventy, Webpack, PostCSS, and yarn artifacts. Run pnpm build to confirm the Astro build completes without errors.

**Depends on:** subtask 2
