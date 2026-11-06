#!/bin/bash
# ---
# description: Astro dev server for kippy.online (pnpm dev).
# ---
[ -d node_modules ] || pnpm install --frozen-lockfile || exit 1
exec pnpm dev --host 0.0.0.0 --port "$PORT"
