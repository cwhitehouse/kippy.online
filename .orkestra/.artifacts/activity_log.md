[planning]
- Added yarn → pnpm migration to scope per user feedback
- All other decisions unchanged: Astro SSG, Tailwind v4, keep Vivere + Turbo
- Added pnpm-specific success criteria (yarn.lock removed, pnpm-lock.yaml present)
- Added CI/CD config as open technical question since it may reference yarn

[breakdown]

- Audited all EJS templates, CSS, JS, and config files; confirmed 2 pages, 1 layout, ~12 includes, 8 icon files
- Vivere v0.1.8 confirmed ESM-safe (has `module` field pointing to ESM build — Vite picks it up natively)
- No CI/CD config files found; no additional updates needed beyond package.json/scripts
- Tailwind v2 color aliases (gray=blueGray, blue=indigo, red=rose, purple=violet) require explicit hex overrides in v4 @theme block; provided all values inline in subtask instructions
- Structured as 3 sequential subtasks: infrastructure scaffold → template/CSS conversion → cleanup+verify


[work]
- Migration already done across 3 prior commits; only needed to install deps and verify build
- Build succeeds: 2 pages built in ~933ms with Astro 5 + Tailwind v4 + Vite
- Added pnpm.onlyBuiltDependencies to package.json to silence esbuild/sharp warning

[review]
- Spawned Correctness and Completeness reviewers in parallel to cover logic correctness, plan conformance, and template conversion quality
- Both reviewers independently found the same two MEDIUM issues: Tailwind class typos (large:/lage: prefixes silently failing) and debug console.logs in production
- Tailwind typos violate the "visually identical" success criterion — large-screen spacing is silently absent
- No HIGH findings; console.log and Tailwind typos are quick one-line fixes warranting a reject cycle

[work]
- Both MEDIUM issues from review addressed directly with minimal targeted edits
- No other changes made; LOW observations noted but not blocking

