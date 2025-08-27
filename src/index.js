#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import simpleGit from "simple-git";
import fs from "fs-extra";
import { execSync } from "child_process";
import path from "path";
import ora from "ora";
import { fileURLToPath } from "url";

// For __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MintlifyCLI {
  constructor(githubToken) {
    this.githubToken = githubToken;
    this.git = simpleGit();
  }

  async deploy(options) {
    console.log(chalk.blue.bold("🚀 Mintlify CLI - Starting deployment..."));
    console.log(chalk.gray(`Template: ${options.templateRepo}`));
    console.log(chalk.gray(`Content: ${options.contentRepo}`));

    try {
      const templateDir = await this.cloneTemplate(
        options.templateRepo,
        options.githubToken
      );

      const contentDir = await this.cloneContent(
        options.contentRepo,
        options.githubToken
      );

      await this.validateContent(contentDir);
      await this.mergeContent(contentDir, templateDir);
      await this.buildSite(templateDir);
      await this.deployToVercel(templateDir, options.vercelToken);
      await this.cleanup([templateDir, contentDir]);

      console.log(chalk.green.bold("✅ Documentation deployed successfully!"));
      console.log(chalk.cyan("🌐 Your site should be live on Vercel"));
    } catch (error) {
      console.error(chalk.red.bold("❌ Deployment failed:"), error.message);
      process.exit(1);
    }
  }

  async cloneTemplate(repo, token) {
    const spinner = ora("Cloning template repository...").start();

    try {
      const tempDir = path.join(
        process.cwd(),
        ".temp",
        `template-${Date.now()}`
      );
      await fs.ensureDir(tempDir);

      const repoUrl = `https://${token}@github.com/${repo}.git`;
      await this.git.clone(repoUrl, tempDir, ["--depth", "1"]);

      spinner.succeed("Template repository cloned");
      return tempDir;
    } catch (error) {
      spinner.fail("Failed to clone template repository");
      throw new Error(`Template clone failed: ${error.message}`);
    }
  }

  async cloneContent(repo, token) {
    const spinner = ora("Cloning content repository...").start();

    try {
      const tempDir = path.join(
        process.cwd(),
        ".temp",
        `content-${Date.now()}`
      );
      await fs.ensureDir(tempDir);

      const repoUrl = `https://${token}@github.com/${repo}.git`;
      await this.git.clone(repoUrl, tempDir, ["--depth", "1"]);

      spinner.succeed("Content repository cloned");
      return tempDir;
    } catch (error) {
      spinner.fail("Failed to clone content repository");
      throw new Error(`Content clone failed: ${error.message}`);
    }
  }

  async validateContent(contentDir) {
    const spinner = ora("Validating content structure...").start();

    try {
      const requiredFiles = ["docs.json", "index.mdx"];

      for (const file of requiredFiles) {
        const filePath = path.join(contentDir, file);
        const exists = await fs.pathExists(filePath);
        if (!exists) {
          throw new Error(`Required file missing: ${file}`);
        }
      }

      const docsConfigPath = path.join(contentDir, "docs.json");
      const docsConfig = await fs.readJson(docsConfigPath);

      if (!docsConfig.name) {
        throw new Error('docs.json must have a "name" field');
      }

      spinner.succeed("Content validation passed");
    } catch (error) {
      spinner.fail("Content validation failed");
      throw new Error(`Validation failed: ${error.message}`);
    }
  }

  async mergeContent(contentDir, templateDir) {
    const spinner = ora("Merging content with template...").start();

    try {
      const contentTargetDir = path.join(templateDir, "content");
      await fs.ensureDir(contentTargetDir);

      const contentFiles = await fs.readdir(contentDir);

      for (const file of contentFiles) {
        if (file.startsWith(".git")) continue;

        const sourcePath = path.join(contentDir, file);
        const targetPath = path.join(contentTargetDir, file);

        await fs.copy(sourcePath, targetPath);
      }

      spinner.succeed("Content merged successfully");
    } catch (error) {
      spinner.fail("Failed to merge content");
      throw new Error(`Merge failed: ${error.message}`);
    }
  }

  async buildSite(templateDir) {
    const spinner = ora("Building Next.js site...").start();

    try {
      const originalCwd = process.cwd();
      process.chdir(templateDir);

      execSync("npm install", { stdio: "pipe" });
      execSync("npm run build", { stdio: "pipe" });

      process.chdir(originalCwd);
      spinner.succeed("Next.js site built successfully");
    } catch (error) {
      spinner.fail("Failed to build site");
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async deployToVercel(templateDir, vercelToken) {
    const spinner = ora("Deploying to Vercel...").start();

    try {
      const originalCwd = process.cwd();
      process.chdir(templateDir);

      execSync(`npx vercel --prod --token ${vercelToken} --yes`, {
        stdio: "pipe",
        env: { ...process.env, VERCEL_TOKEN: vercelToken },
      });

      process.chdir(originalCwd);
      spinner.succeed("Deployed to Vercel successfully");
    } catch (error) {
      spinner.fail("Failed to deploy to Vercel");
      throw new Error(`Vercel deployment failed: ${error.message}`);
    }
  }

  async cleanup(dirs) {
    const spinner = ora("Cleaning up temporary files...").start();

    try {
      for (const dir of dirs) {
        const exists = await fs.pathExists(dir);
        if (exists) {
          await fs.remove(dir);
        }
      }

      const tempDir = path.join(process.cwd(), ".temp");
      const tempExists = await fs.pathExists(tempDir);
      if (tempExists) {
        const tempContents = await fs.readdir(tempDir);
        if (tempContents.length === 0) {
          await fs.remove(tempDir);
        }
      }

      spinner.succeed("Cleanup completed");
    } catch (error) {
      spinner.warn("Cleanup had some issues, but deployment was successful");
    }
  }
}

const program = new Command();

program
  .name("mintlify-cli")
  .description(
    "CLI tool for deploying documentation sites with Next.js templates"
  )
  .version("1.0.0");

program
  .command("deploy")
  .description(
    "Deploy documentation to Vercel using template + content approach"
  )
  .requiredOption(
    "--template-repo <repo>",
    "Template repository in format: owner/repo-name"
  )
  .requiredOption(
    "--content-repo <repo>",
    "Content repository in format: owner/repo-name"
  )
  .requiredOption("--vercel-token <token>", "Vercel deployment token")
  .requiredOption("--github-token <token>", "GitHub personal access token")
  .action(async (options) => {
    try {
      const cli = new MintlifyCLI(options.githubToken);
      await cli.deploy(options);
    } catch (error) {
      console.error(chalk.red("Deployment failed:", error.message));
      process.exit(1);
    }
  });

program
  .command("version")
  .description("Show CLI version")
  .action(() => {
    console.log(chalk.blue("Mintlify CLI v1.0.0"));
  });

program.parse();

export { MintlifyCLI };
