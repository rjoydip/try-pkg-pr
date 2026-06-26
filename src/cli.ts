#!/usr/bin/env bun
import { greet, version } from "./index.ts";

const args = process.argv.slice(2);
const command = args[0];

function printHelp(): void {
  console.log(`try-pkg-pr v${version}

Usage:
  bun run cli <command> [options]

Commands:
  greet <name>      Print a greeting
  version           Print the version
  help              Show this help
`);
}

switch (command) {
  case "greet": {
    const name = args[1] ?? "World";
    console.log(greet({ name, loud: args.includes("--loud") }));
    break;
  }
  case "version": {
    console.log(version);
    break;
  }
  default:
    printHelp();
}
