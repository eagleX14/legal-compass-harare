const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");

function run(cmd, options = {}) {
  console.log(`\n▶ ${cmd}`);
  const result = spawnSync(cmd, {
    shell: true,
    stdio: "inherit",
    ...options,
  });

  return result.status === 0;
}

function exists(file) {
  return fs.existsSync(path.join(process.cwd(), file));
}

console.log("=== Machaya Law Firm GitHub Pages Repair ===");
console.log("Project:", process.cwd());

if (!exists("package.json")) {
  console.error("❌ package.json not found. You are in the wrong folder.");
  process.exit(1);
}

if (!exists("src")) {
  console.error("❌ src folder not found. This does not look like the React project root.");
  process.exit(1);
}

let repoName = "legal-compass-harare";
let owner = "eagleX14";
let branch = "main";

try {
  const remote = execSync("git remote get-url origin", { encoding: "utf8" }).trim();
  const clean = remote.replace(/\.git$/, "");
  repoName = clean.split("/").pop();
  const match = clean.match(/github\.com[:/](.+?)\/(.+)$/);
  if (match) owner = match[1];
} catch {
  console.log("Could not detect GitHub remote. Using defaults.");
}

try {
  branch = execSync("git branch --show-current", { encoding: "utf8" }).trim() || "main";
} catch {
  branch = "main";
}

const basePath = repoName === `${owner}.github.io` ? "/" : `/${repoName}/`;

console.log("Repo:", repoName);
console.log("Owner:", owner);
console.log("Branch:", branch);
console.log("Base path:", basePath);

console.log("\n=== Checking app files ===");

const possibleEntries = [
  "src/main.tsx",
  "src/main.jsx",
  "src/main.ts",
  "src/main.js",
];

let entry = possibleEntries.find(exists);

if (!entry) {
  console.log("No main entry file found. Checking for App component...");

  const appFile = ["src/App.tsx", "src/App.jsx", "src/App.ts", "src/App.js"].find(exists);

  if (!appFile) {
    console.error("❌ No src/main file and no src/App file found.");
    console.error("Here are your src files:");
    run("find src -maxdepth 4 -type f | sort");
    process.exit(1);
  }

  console.log(`Found ${appFile}. Creating src/main.tsx...`);

  const cssImport = exists("src/index.css")
    ? `import "./index.css";\n`
    : exists("src/App.css")
      ? `import "./App.css";\n`
      : "";

  fs.writeFileSync(
    "src/main.tsx",
    `import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
${cssImport}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`
  );

  entry = "src/main.tsx";
}

console.log("Using entry file:", entry);

console.log("\n=== Creating index.html if missing ===");

if (!exists("index.html")) {
  fs.writeFileSync(
    "index.html",
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Machaya & Associates Legal Practitioners | Law Firm in Harare, Zimbabwe</title>
    <meta
      name="description"
      content="Machaya & Associates Legal Practitioners is a Harare-based law firm offering litigation, estates, corporate law, conveyancing, family law, employment law, intellectual property, tax law, and dispute resolution services."
    />

    <meta property="og:title" content="Machaya & Associates Legal Practitioners" />
    <meta
      property="og:description"
      content="Trusted legal counsel in Harare, Zimbabwe. Contact Machaya & Associates for civil, criminal, corporate, family, estate, conveyancing, employment, IP, tax, and dispute resolution services."
    />
    <meta property="og:type" content="website" />

    <script type="module" src="/${entry}"></script>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
`
  );

  console.log("Created index.html");
} else {
  console.log("index.html already exists.");
}

console.log("\n=== Fixing vite.config.ts base path ===");

const viteFile = exists("vite.config.ts")
  ? "vite.config.ts"
  : exists("vite.config.js")
    ? "vite.config.js"
    : null;

if (!viteFile) {
  console.error("❌ vite.config.ts or vite.config.js not found.");
  process.exit(1);
}

let vite = fs.readFileSync(viteFile, "utf8");

if (/base\s*:/.test(vite)) {
  vite = vite.replace(/base\s*:\s*["'`][^"'`]*["'`]\s*,?/m, `base: "${basePath}",`);
} else if (/defineConfig\s*\(\s*\{/.test(vite)) {
  vite = vite.replace(/defineConfig\s*\(\s*\{/, `defineConfig({\n  base: "${basePath}",`);
} else if (/defineConfig\s*\(\s*\([^)]*\)\s*=>\s*$begin:math:text$\\s\*\\\{\/\.test\(vite\)\) \{
  vite \= vite\.replace\(\/defineConfig\\s\*\\\(\\s\*\\\(\[\^\)\]\*$end:math:text$\s*=>\s*\(\s*\{/, match => `${match}\n  base: "${basePath}",`);
} else {
  console.error("❌ Could not automatically edit vite config.");
  console.error(`Manually add this inside defineConfig: base: "${basePath}",`);
  process.exit(1);
}

fs.writeFileSync(viteFile, vite);
console.log(`Updated ${viteFile}`);

console.log("\n=== Creating GitHub Pages workflow ===");

fs.mkdirSync(".github/workflows", { recursive: true });

fs.writeFileSync(
  ".github/workflows/deploy.yml",
  `name: Deploy React Site to GitHub Pages

on:
  push:
    branches:
      - ${branch}
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
          node-version: 22
          cache: npm

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
`
);

fs.mkdirSync("public", { recursive: true });
fs.writeFileSync("public/.nojekyll", "");

console.log("Workflow created.");

console.log("\n=== Cleaning temporary files ===");
run("rm -f setup-github-pages.sh");
run("rm -f vite.config.ts.backup.*");
run("rm -f vite.config.js.backup.*");

console.log("\n=== Installing dependencies ===");
if (!run("npm install")) {
  console.error("❌ npm install failed.");
  process.exit(1);
}

console.log("\n=== Building project ===");
if (!run("npm run build")) {
  console.error("❌ Build failed. Look at the error above.");
  process.exit(1);
}

console.log("\n=== Creating local SPA fallback ===");
run("cp dist/index.html dist/404.html");

console.log("\n=== Git status ===");
run("git status --short");

console.log("\n=== Commit and push ===");
run("git add .");

const committed = run('git commit -m "Repair GitHub Pages deployment"');
if (!committed) {
  console.log("No commit made. Maybe there were no new changes.");
}

if (!run(`git push origin ${branch}`)) {
  console.error("❌ Git push failed.");
  process.exit(1);
}

console.log("\n✅ DONE");
console.log(`Site will be: https://${owner.toLowerCase()}.github.io/${repoName}/`);
console.log("Now check GitHub → Settings → Pages → Source: GitHub Actions");
console.log("Then check GitHub → Actions");
