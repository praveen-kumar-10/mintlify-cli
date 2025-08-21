#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { generateProject } from "../lib/generateProject.js";

const program = new Command();

program
  .name("mintlify-cli")
  .description("CLI tool to generate Next.js docs site from markdown content")
  .version("1.0.0");

program
  .argument("[contentDir]", "Path to markdown content folder", "./docs-content")
  .argument("[outputDir]", "Path to output site folder", "site")
  .action(async (contentDir, outputDir) => {
    try {
      await generateProject(contentDir, outputDir);
      console.log(chalk.green(`✅ Docs site generated at ${outputDir}`));
    } catch (err) {
      console.error(chalk.red("❌ Error generating site:"), err.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
