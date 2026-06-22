#!/bin/bash
set -e

echo "Starting GitHub Pages setup..."

PROJECT_DIR="$HOME/Desktop/Machaya Law Firm/legal-compass-harare"
cd "$PROJECT_DIR"

if [ ! -f "package.json" ]; then
  echo "ERROR: package.json not found. You are not inside the React project folder."
  exit 1
fi

if [ ! -d ".git" ]; then
  echo "ERROR: This folder is not a Git repository."
  exit 1
fi

REMOTE_URL=$(git remote get-url origin)
REMOTE_CLEAN="${REMOTE_URL%.git}"
REPO_NAME="${REMOTE_CLEAN##*/}"
OWNER=$(echo "$REMOTE_CLEAN" | sed -E 's#(git@github.com:|https://github.com/)([^/]+)/.*#\2#')

BASE_PATH="/$REPO_NAME/"

if [ "$REPO_NAME" = "$OWNER.github.io" ]; then
  BASE_PATH="/"
fi

BRANCH=$(git branch --show-current)

if [ -z "$BRANCH" ]; then
  BRANCH="main"
fi

echo "GitHub repo detected: $REPO_NAME"
echo "Git branch detected: $BRANCH"
echo "Vite base path will be: $BASE_PATH"

if [ -f "vite.config.ts" ]; then
  VITE_CONFIG="vite.config.ts"
elif [ -f "vite.config.js" ]; then
  VITE_CONFIG="vite.config.js"
else
  echo "ERROR: vite.config.ts or vite.config.js not found."
  exit 1
fi

echo "Updating $VITE_CONFIG..."

node - "$VITE_CONFIG" "$BASE_PATH" <<'NODE'
const fs = require("fs");

const file = process.argv[2];
const base = process.argv[3];

let content = fs.readFileSync(file, "utf8");

if (/base\s*:/.test(content)) {
  content = content.replace(
    /base\s*:\s*(['"`])[^'"`]*\1\s*,?/m,
    `base: "${base}",`
  );
} else if (/defineConfig\s*\(\s*\([^)]*\)\s*=>\s*\(\s*\{/.test(content)) {
  content = content.replace(
    /defineConfig\s*\(\s*\([^)]*\)\s*=>\s*\(\s*\{/,
    match => `${match}\n  base: "${base}",`
  );
} else if (/defineConfig\s*\(\s*\{/.test(content)) {
  content = content.replace(
    /defineConfig\s*\(\s*\{/,
    match => `${match}\n  base: "${base}",`
  );
} else {
  console.error(`Could not automatically update ${file}.`);
  console.error(`Manually add this inside defineConfig: base: "${base}",`);
  process.exit(1);
}

fs.writeFileSync(file, content);
NODE

echo "Creating GitHub Pages workflow..."

mkdir -p .github/workflows

cat > .github/workflows/deploy.yml <<YAML
name: Deploy React Site to GitHub Pages

on:
  push:
    branches:
      - $BRANCH
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: |
          if [ -f package-lock.json ]; then
            npm ci
          else
            npm install
          fi

      - name: Build project
        run: npm run build

      - name: Add SPA fallback for GitHub Pages
        run: cp dist/index.html dist/404.html

      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
YAML

echo "Adding .nojekyll file..."

mkdir -p public
touch public/.nojekyll

echo "Installing dependencies..."

if [ -f package-lock.json ]; then
  npm install
else
  npm install
fi

echo "Testing production build..."

npm run build

echo "Adding SPA fallback locally..."

cp dist/index.html dist/404.html

echo "Committing changes..."

git add .

if git diff --cached --quiet; then
  echo "No new changes to commit."
else
  git commit -m "Configure GitHub Pages deployment"
fi

echo "Pushing to GitHub..."

git push origin "$BRANCH"

echo ""
echo "DONE."
echo ""
echo "Now go to GitHub:"
echo "Repository → Settings → Pages"
echo "Under Build and deployment, set Source to: GitHub Actions"
echo ""
echo "Then open:"
echo "Repository → Actions"
echo "You should see the deployment running."
echo ""
echo "Your site will be available at:"
echo "https://$OWNER.github.io/$REPO_NAME/"
