# Mintlify CLI

A CLI tool for deploying documentation sites using Next.js templates and markdown content.

## Installation

Install from GitHub npm packages:

```bash
npm install -g @your-username/mybizz-docs-cli
```

## Usage

Deploy your documentation:

```bash
mintlify deploy
--template-repo your-username/docs-starter-template
--content-repo your-username/mintlify
--vercel-token YOUR_VERCEL_TOKEN
--github-token YOUR_GITHUB_TOKEN
```

## Commands

- `mintlify deploy` - Deploy documentation to Vercel
- `mintlify version` - Show CLI version

## Development

### Clone the repository

```bash
git clone https://github.com/praveen-kumar-10/mintlify-cli.git
cd mintlify-cli
```

### Install dependencies

```bash
npm install
```

### Test locally

```bash
node src/index.js deploy --help
```

### Publish to GitHub packages

```bash
npm publish
```

## Requirements

- Node.js 16 or higher
- GitHub personal access token with repo permissions
- Vercel deployment token

## How It Works

1. Clones your static Next.js template repository
2. Clones your markdown content repository
3. Merges content into template's `/content` directory
4. Builds the Next.js site
5. Deploys to Vercel using Vercel CLI
6. Cleans up temporary files

The template repository stays static - no commits are made to it during deployment.
