#!/usr/bin/env bash
set -euo pipefail

PROJECT="$HOME/Desktop/Machaya Law Firm/legal-compass-harare"

echo "=== Restore Machaya site from uploaded ZIP ==="

cd "$PROJECT"

if [ ! -d ".git" ]; then
  echo "ERROR: .git folder not found. This must be your cloned GitHub repo."
  exit 1
fi

ZIP_FILE=""

CANDIDATE_NAMES=(
  "legal-compass-harare-main 2(2).zip"
  "legal-compass-harare-main 3.zip"
  "legal-compass-harare-main 2(1).zip"
)

SEARCH_DIRS=(
  "$HOME/Downloads"
  "$HOME/Desktop"
  "$HOME/Desktop/Machaya Law Firm"
)

for dir in "${SEARCH_DIRS[@]}"; do
  for name in "${CANDIDATE_NAMES[@]}"; do
    if [ -f "$dir/$name" ]; then
      ZIP_FILE="$dir/$name"
      break 2
    fi
  done
done

if [ -z "$ZIP_FILE" ]; then
  ZIP_FILE="$(find "$HOME" -maxdepth 5 -type f \( \
    -name "legal-compass-harare-main 2(2).zip" -o \
    -name "legal-compass-harare-main 3.zip" -o \
    -name "legal-compass-harare-main 2(1).zip" \
  \) 2>/dev/null | head -n 1 || true)"
fi

if [ -z "$ZIP_FILE" ]; then
  echo "ERROR: Could not find any of the uploaded ZIP files on your Mac."
  echo ""
  echo "Put one of these files in Downloads or Desktop:"
  echo "  legal-compass-harare-main 2(2).zip"
  echo "  legal-compass-harare-main 3.zip"
  echo "  legal-compass-harare-main 2(1).zip"
  exit 1
fi

echo "Using ZIP:"
echo "$ZIP_FILE"

BRANCH="$(git branch --show-current)"
if [ -z "$BRANCH" ]; then
  BRANCH="main"
fi

BACKUP_BRANCH="backup-before-zip-restore-$(date +%Y%m%d-%H%M%S)"

echo ""
echo "Current branch: $BRANCH"
echo "Creating backup branch: $BACKUP_BRANCH"

git fetch origin main || true
git branch "$BACKUP_BRANCH" || true
git push origin "$BACKUP_BRANCH" || true

echo ""
echo "Extracting ZIP..."

rm -rf /tmp/machaya-restore
mkdir -p /tmp/machaya-restore
unzip -q -o "$ZIP_FILE" -d /tmp/machaya-restore

SRC_PACKAGE="$(find /tmp/machaya-restore -maxdepth 4 -type f -name package.json | head -n 1)"

if [ -z "$SRC_PACKAGE" ]; then
  echo "ERROR: package.json not found inside ZIP."
  exit 1
fi

SRC_DIR="$(dirname "$SRC_PACKAGE")"

echo "Restoring from:"
echo "$SRC_DIR"

echo ""
echo "Replacing project files but keeping .git..."

rsync -av --delete \
  --exclude ".git" \
  --exclude "node_modules" \
  "$SRC_DIR"/ "$PROJECT"/

echo ""
echo "Applying GitHub Pages safety fixes without changing the restored visual design..."

cat > restore-safety-patch.cjs <<'NODE'
const fs = require("fs");
const path = require("path");

function exists(file) {
  return fs.existsSync(file);
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log(`Wrote ${file}`);
}

function remove(file) {
  if (exists(file)) {
    fs.rmSync(file, { recursive: true, force: true });
    console.log(`Removed ${file}`);
  }
}

function walk(dir, ext = ".tsx") {
  if (!exists(dir)) return [];
  const out = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...walk(full, ext));
    else if (full.endsWith(ext)) out.push(full);
  }
  return out;
}

if (!exists("package.json")) {
  console.error("package.json missing after restore.");
  process.exit(1);
}

console.log("1. Removing server-only files GitHub Pages cannot run...");

remove("src/server.ts");
remove("src/start.ts");
remove("src/routes/sitemap[.]xml.ts");
remove("docs");
remove(".output");
remove(".tanstack");

console.log("2. Cleaning package.json for static GitHub Pages...");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.name = "legal-compass-harare";
pkg.private = true;
pkg.sideEffects = false;
pkg.type = "module";

pkg.scripts = {
  dev: "vite dev",
  build: "vite build",
  "build:dev": "vite build --mode development",
  preview: "vite preview",
  lint: pkg.scripts?.lint || "eslint .",
  format: pkg.scripts?.format || "prettier --write .",
};

for (const group of ["dependencies", "devDependencies"]) {
  if (!pkg[group]) continue;
  delete pkg[group]["@tanstack/react-start"];
  delete pkg[group]["@lovable.dev/vite-tanstack-config"];
  delete pkg[group]["@tanstack/router-plugin"];
  delete pkg[group]["nitro"];
}

fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

console.log("3. Restoring static Vite config...");

write(
  "vite.config.ts",
  `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  base: "/legal-compass-harare/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
});
`
);

console.log("4. Restoring React entry and hash router...");

write(
  "src/main.tsx",
  `import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
`
);

write(
  "src/router.tsx",
  `import { QueryClient } from "@tanstack/react-query";
import { createHashHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    history: createHashHistory(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
`
);

console.log("5. Restoring static root route while keeping original visual components...");

write(
  "src/routes/__root.tsx",
  `import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp, MobileContactBar } from "@/components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-navy-deep">404</h1>
        <h2 className="mt-3 font-serif text-2xl text-navy-deep">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-ivory hover:bg-navy-deep"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-navy-deep">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Please try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-ivory hover:bg-navy-deep"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-navy-deep hover:bg-muted"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileContactBar />
      </div>
    </QueryClientProvider>
  );
}
`
);

console.log("6. Rebuilding route tree without server-only sitemap route...");

write(
  "src/routeTree.gen.ts",
  `/* eslint-disable */
// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as TeamRouteImport } from './routes/team'
import { Route as PracticeAreasRouteImport } from './routes/practice-areas'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as PracticeAreasIndexRouteImport } from './routes/practice-areas.index'
import { Route as PracticeAreasSlugRouteImport } from './routes/practice-areas.$slug'

const TeamRoute = TeamRouteImport.update({
  id: '/team',
  path: '/team',
  getParentRoute: () => rootRouteImport,
} as any)

const PracticeAreasRoute = PracticeAreasRouteImport.update({
  id: '/practice-areas',
  path: '/practice-areas',
  getParentRoute: () => rootRouteImport,
} as any)

const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)

const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const PracticeAreasIndexRoute = PracticeAreasIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PracticeAreasRoute,
} as any)

const PracticeAreasSlugRoute = PracticeAreasSlugRouteImport.update({
  id: '/$slug',
  path: '/$slug',
  getParentRoute: () => PracticeAreasRoute,
} as any)

const PracticeAreasRouteChildren = {
  PracticeAreasSlugRoute,
  PracticeAreasIndexRoute,
}

const PracticeAreasRouteWithChildren = PracticeAreasRoute._addFileChildren(
  PracticeAreasRouteChildren,
)

const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PracticeAreasRoute: PracticeAreasRouteWithChildren,
  TeamRoute,
}

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/practice-areas': typeof PracticeAreasRouteWithChildren
  '/team': typeof TeamRoute
  '/practice-areas/$slug': typeof PracticeAreasSlugRoute
  '/practice-areas/': typeof PracticeAreasIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/team': typeof TeamRoute
  '/practice-areas/$slug': typeof PracticeAreasSlugRoute
  '/practice-areas': typeof PracticeAreasIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/practice-areas': typeof PracticeAreasRouteWithChildren
  '/team': typeof TeamRoute
  '/practice-areas/$slug': typeof PracticeAreasSlugRoute
  '/practice-areas/': typeof PracticeAreasIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/contact'
    | '/practice-areas'
    | '/team'
    | '/practice-areas/$slug'
    | '/practice-areas/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/contact'
    | '/team'
    | '/practice-areas/$slug'
    | '/practice-areas'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/contact'
    | '/practice-areas'
    | '/team'
    | '/practice-areas/$slug'
    | '/practice-areas/'
  fileRoutesById: FileRoutesById
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
`
);

console.log("7. Ensuring index.html is the restored React entry, not emergency static page...");

write(
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
    <script type="module" src="/src/main.tsx"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`
);

console.log("8. Fixing buttons/contact form behaviour without changing visual design...");

for (const file of walk("src", ".tsx")) {
  let code = fs.readFileSync(file, "utf8");
  const before = code;

  code = code.replace(
    /<a([^>]*)>\s*<Button(?![^>]*asChild)([^>]*)>([\s\S]*?)<\/Button>\s*<\/a>/g,
    `<Button asChild$2>
  <a$1>$3</a>
</Button>`
  );

  code = code.replace(
    /<Link([^>]*)>\s*<Button(?![^>]*asChild)([^>]*)>([\s\S]*?)<\/Button>\s*<\/Link>/g,
    `<Button asChild$2>
  <Link$1>$3</Link>
</Button>`
  );

  if (file.endsWith("ContactForm.tsx")) {
    code = code.replace(
      /<form className=/,
      `<form onSubmit={handleWhatsApp} className=`
    );

    code = code.replace(
      /window\.open\(waLink\(undefined, buildMessage\(data\)\), "_blank", "noopener"\);/,
      `const url = waLink(undefined, buildMessage(data));
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = url;
    }`
    );

    code = code.replace(
      /<Button type="submit" variant="whatsapp" size="lg" onClick=\{handleWhatsApp\}>/g,
      `<Button type="submit" variant="whatsapp" size="lg">`
    );
  }

  if (code !== before) {
    fs.writeFileSync(file, code);
    console.log(`Patched ${file}`);
  }
}

console.log("9. Adding public sitemap/robots without changing visible design...");

fs.mkdirSync("public", { recursive: true });
fs.writeFileSync("public/.nojekyll", "");

write(
  "public/robots.txt",
  `User-agent: *
Allow: /
Sitemap: https://eaglex14.github.io/legal-compass-harare/sitemap.xml
`
);

write(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://eaglex14.github.io/legal-compass-harare/</loc></url>
  <url><loc>https://eaglex14.github.io/legal-compass-harare/#/about</loc></url>
  <url><loc>https://eaglex14.github.io/legal-compass-harare/#/practice-areas</loc></url>
  <url><loc>https://eaglex14.github.io/legal-compass-harare/#/team</loc></url>
  <url><loc>https://eaglex14.github.io/legal-compass-harare/#/contact</loc></url>
</urlset>
`
);

console.log("10. Restoring GitHub Actions deploy workflow...");

write(
  ".github/workflows/deploy.yml",
  `name: Deploy React Site to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: false

jobs:
  build:
    name: Build site
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Add GitHub Pages SPA fallback
        run: |
          cp dist/index.html dist/404.html
          touch dist/.nojekyll

      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    name: Deploy site
    runs-on: ubuntu-latest
    needs: build

    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`
);
NODE

node restore-safety-patch.cjs

echo ""
echo "Installing dependencies..."
rm -rf node_modules package-lock.json
npm install

echo ""
echo "Testing build..."
npm run build

echo ""
echo "Adding local fallback..."
cp dist/index.html dist/404.html
touch dist/.nojekyll

echo ""
echo "Cleaning temporary restore files..."
rm -f restore-safety-patch.cjs restore-from-uploaded-zip.sh

echo ""
echo "Committing restored version..."
git add .
git commit -m "Restore stable uploaded site version" || echo "Nothing new to commit"

echo ""
echo "Force pushing restored version to GitHub main..."
git push --force-with-lease origin "$BRANCH"

echo ""
echo "✅ RESTORE COMPLETE"
echo ""
echo "Now go to GitHub → Settings → Pages"
echo "Make sure Source is: GitHub Actions"
echo ""
echo "Then go to GitHub → Actions and wait for the latest deployment to turn green."
echo ""
echo "Live URL:"
echo "https://eaglex14.github.io/legal-compass-harare/"
echo ""
echo "Hard refresh after deployment:"
echo "Command + Shift + R"
