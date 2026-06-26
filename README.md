# try-pkg-pr

[![CI](https://github.com/rjoydip/try-pkg-pr/actions/workflows/ci.yml/badge.svg)](https://github.com/rjoydip/try-pkg-pr/actions/workflows/ci.yml)
[![pkg.pr.new](https://pkg.pr.new/badge/rjoydip/try-pkg-pr)](https://pkg.pr.new/~/rjoydip/try-pkg-pr)
[![License](https://img.shields.io/github/license/rjoydip/try-pkg-pr)](./LICENSE)
[![Bun](https://img.shields.io/badge/Bun-1.3+-green)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-blue)](https://www.typescriptlang.org/)

A minimal **Bun**-based library pre-wired for
[pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new) continuous preview releases.
Every push and pull request automatically publishes a preview build — no NPM access required.

## Quick start

```bash
bun install
bun run dev         # watch mode
bun test            # run tests
```

## Install a preview build

After opening a PR, pkg.pr.new posts a comment like:

```bash
bun add https://pkg.pr.new/try-pkg-pr@<sha>
```

## Setup checklist

1. **Install the GitHub App** → [https://github.com/apps/pkg-pr-new](https://github.com/apps/pkg-pr-new)  
   (required for the publish step to work)
2. Replace `YOUR_USERNAME` in this README and the badge URLs.
3. Push a branch or open a PR — the preview URL appears as a comment automatically.

## API

```ts
import { greet, version } from "try-pkg-pr";

greet({ name: "World" }); // "Hello, World!"
greet({ name: "World", loud: true }); // "HELLO, WORLD!"

version; // "0.1.0"
```

## CLI

```bash
bunx try-pkg-pr greet Alice
bunx try-pkg-pr greet Alice --loud
bunx try-pkg-pr version
```

## Scripts

| Script                    | Description                              |
| ------------------------- | ---------------------------------------- |
| `bun run dev`             | Watch-mode dev server                    |
| `bun test`                | Run all tests                            |
| `bun run build:all`       | Build library + CLI                      |
| `bun run lint`            | Lint with oxlint                         |
| `bun run format`          | Format with oxfmt                        |
| `bun run typecheck`       | TypeScript check                         |
| `bun run publish:preview` | Publish preview via pkg.pr.new (CI only) |

## Tech stack

- **Runtime / bundler / test runner**: Bun
- **Language**: TypeScript
- **Linter**: oxlint
- **Formatter**: oxfmt
- **Preview releases**: pkg.pr.new
- **CI**: GitHub Actions

## License

MIT
