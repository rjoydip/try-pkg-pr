# Agents / AI Tooling

## Project overview

A Bun-based library wired up for [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new) continuous preview releases.

## Key commands

| Task            | Command                             |
| --------------- | ----------------------------------- |
| Dev (watch)     | `bun run dev`                       |
| Test            | `bun test`                          |
| Lint            | `bun run lint`                      |
| Format          | `bun run format`                    |
| Typecheck       | `bun run typecheck`                 |
| Build           | `bun run build:all`                 |
| Publish preview | `bun run publish:preview` (CI only) |

## Structure

```bash
src/
  index.ts      — public re-exports
  greet.ts      — greet() function
  math.ts       — add / subtract / multiply
  version.ts    — version constant
  cli.ts        — CLI entry
tests/
  greet.test.ts
  math.test.ts
  integration.test.ts
.github/workflows/
  ci.yml                  — lint + test + preview publish on push/PR
  preview-approved.yml    — publish only on approved PRs (safer)
```

## pkg.pr.new notes

- Install the [GitHub App](https://github.com/apps/pkg-pr-new) on the repo before the workflow will work.
- `publish:preview` runs `npx pkg-pr-new publish --packageManager=bun`.
- Preview URL format: `https://pkg.pr.new/try-pkg-pr@<sha>`.
