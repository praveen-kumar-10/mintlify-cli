#!/usr/bin/env node
import { Command } from "commander";
import { MintlifyCLI } from "./mintlify-cli.js";

const program = new Command();

program
  .command("deploy")
  .option("--template-repo <repo>", "GitHub template repository (user/repo)")
  .option("--content-repo <repo>", "GitHub content repository (user/repo)")
  .option("--template-path <path>", "Path to pre-cloned template repo")
  .option("--content-path <path>", "Path to pre-cloned content repo")
  .requiredOption("--vercel-token <token>", "Vercel token")
  .requiredOption("--github-token <token>", "GitHub token")
  .action(async (opts) => {
    const cli = new MintlifyCLI(opts);
    await cli.deploy();
  });

program.parse();
