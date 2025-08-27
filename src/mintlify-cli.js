import fs from "fs-extra";
import path from "path";
import simpleGit from "simple-git";
import chalk from "chalk";
import ora from "ora";
import { execa } from "execa";

export class MintlifyCLI {
  constructor(options) {
    this.templateRepo = options.templateRepo;
    this.contentRepo = options.contentRepo;
    this.templatePath = options.templatePath || ".temp/template";
    this.contentPath = options.contentPath || ".temp/content";
    this.vercelToken = options.vercelToken;
    this.githubToken = options.githubToken;
  }

  async ensureRepo(repo, targetPath) {
    if (fs.existsSync(targetPath)) {
      console.log(chalk.green(`✔ Using pre-cloned repo at ${targetPath}`));
      return targetPath;
    }

    const spinner = ora(`Cloning ${repo}...`).start();
    const repoUrl = `https://x-access-token:${this.githubToken}@github.com/${repo}.git`;

    try {
      await simpleGit().clone(repoUrl, targetPath);
      spinner.succeed(`Cloned ${repo}`);
      return targetPath;
    } catch (err) {
      spinner.fail(`Failed to clone ${repo}`);
      throw err;
    }
  }

  async copyContent(contentPath, templatePath) {
    const spinner = ora("Copying content files into template...").start();
    try {
      // overwrite files inside template with files from content
      await fs.copy(contentPath, templatePath, { overwrite: true });
      spinner.succeed("Content merged into template");
    } catch (err) {
      spinner.fail("Failed to copy content files");
      throw err;
    }
  }

  async buildProject(templatePath) {
    const spinner = ora("Building project...").start();
    try {
      await execa("npm", ["install"], { cwd: templatePath, stdio: "inherit" });
      await execa("npm", ["run", "build"], {
        cwd: templatePath,
        stdio: "inherit",
      });
      spinner.succeed("Build completed");
    } catch (err) {
      spinner.fail("Build failed");
      throw err;
    }
  }

  async deployToVercel(templatePath) {
    const spinner = ora("Deploying to Vercel...").start();
    try {
      await execa("npx", ["vercel", "--prod", "--token", this.vercelToken], {
        cwd: templatePath,
        stdio: "inherit",
      });
      spinner.succeed("Deployment successful");
    } catch (err) {
      spinner.fail("Deployment failed");
      throw err;
    }
  }

  async deploy() {
    console.log(chalk.cyan("🚀 Mintlify CLI - Starting deployment..."));

    // Step 1: get template + content paths
    const templatePath = this.templateRepo
      ? await this.ensureRepo(this.templateRepo, this.templatePath)
      : this.templatePath;

    const contentPath = this.contentRepo
      ? await this.ensureRepo(this.contentRepo, this.contentPath)
      : this.contentPath;

    console.log(chalk.yellow(`Template path: ${templatePath}`));
    console.log(chalk.yellow(`Content path: ${contentPath}`));

    // Step 2: copy content files into template
    await this.copyContent(contentPath, templatePath);

    // Step 3: build project
    await this.buildProject(templatePath);

    // Step 4: deploy to Vercel
    await this.deployToVercel(templatePath);
  }
}
