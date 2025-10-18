# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Monorepo managed by pnpm workspaces. Root app is a Remix + Vite frontend with a Convex backend. Supporting packages: chef-agent (agent loop, prompts, tools), chefshot (E2E/browser automation), test-kitchen (eval harness), template (starter app), proxy and iframe-worker (dev/runtime helpers).
- Node >= 18.18.0. Use pnpm 9.x.

Install
- pnpm i

Run (local dev)
- Terminal A (frontend/server): pnpm run dev
- Terminal B (Convex backend): npx convex dev

Build and start
- Build: pnpm run build
- Start (after build): pnpm run start
- Preview (build then serve): pnpm run preview

Typecheck and lint
- Typecheck: pnpm run typecheck
- Lint: pnpm run lint
- Auto-fix: pnpm run lint:fix

Tests (Vitest)
- All tests: pnpm run test
- Watch mode: pnpm run test:watch
- Single file: pnpm run test -- convex/messages.test.ts
- Filter by test name: pnpm run test -- -t "name or pattern"
- Package-specific (workspace) tests, examples:
  - pnpm -C convex run test
  - pnpm -C chef-agent run test

E2E and evals
- Chefshot (E2E via browser automation): node chefshot/chefshot.js "Let's build a chat app!" --output-dir generated-app --messages-file messages.json --prod
- Braintrust evals (from test-kitchen): cd test-kitchen && npx braintrust eval initialGeneration.eval.ts

Gotchas
- The UI is accessible at http://127.0.0.1:{port}/ (not http://localhost:{port}/) during local dev.

High-level architecture
- app/ (Remix + Vite)
  - routes/: Remix routes for UI and API endpoints (e.g., api.*.ts files), entry.server/client, root.tsx, components/, styles/.
  - lib/ and utils/: client/server helpers (compression, snapshots, env, etc.).
- convex/ (Convex backend)
  - schema.ts defines tables and indexes; functions organized by domain (messages, share, snapshot, admin, etc.).
  - http.ts exposes HTTP endpoints; crons.ts schedules background tasks; tests via Vitest with convex/test setup.
- chef-agent/
  - Agent loop core: tools/, prompts/, parsing, context management; tested with Vitest.
- chefshot/
  - CLI to drive the web app via Playwright for E2E and artifact capture.
- test-kitchen/
  - Evaluation harness (Braintrust) to score/validate end-to-end generations.
- template/
  - The starter app Chef generates; includes its own Vite/Convex dev scripts.
- proxy/ and iframe-worker/
  - Helpers for dev previews and iframe communication when running generated apps.

CI signals (what breaks the pipeline)
- CI runs: pnpm run typecheck, pnpm run lint, pnpm run test (see .github/workflows/ci.yml). Keep these green.

Important Convex rules (.cursor/rules/convex_rules.mdc)
- Use the new Convex function syntax with validators for args and returns; return v.null() when no value is returned.
- Public API: query, mutation, action. Internal/private: internalQuery, internalMutation, internalAction.
- Call functions via ctx.runQuery/Mutation/Action using generated FunctionReferences (api.* or internal.*), not direct imports.
- HTTP endpoints live in convex/http.ts and use httpAction within an httpRouter.
- Prefer indexed queries (withIndex/withSearchIndex); avoid filter for large scans. Use .unique() for single-document queries.
- Pagination uses paginationOptsValidator; queries ending in .paginate() return { page, isDone, continueCursor }.
- Cron scheduling via cronJobs().interval/cron with FunctionReferences, exported as default from crons.ts.
- File storage: use ctx.storage.getUrl(); metadata via ctx.db.system.get on the _storage table.
- Be strict with Id<'table'> types; prefer explicit Record/Array typings where applicable.

Workspace reference
- Packages listed in pnpm-workspace.yaml: chefshot, test-kitchen, chef-agent. Use pnpm -C <pkg> <script> for per-package workflows.
