/**
 * Build the static site into ./dist
 * - Copies assets to dist/assets
 * - Copies HTML pages to dist root
 * - Rewrites asset paths from ../assets/ to ./assets/
 */
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const pagesDir = path.join(srcDir, 'pages');
const assetsDir = path.join(srcDir, 'assets');
const distDir = path.join(rootDir, 'dist');

async function cleanDist() {
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });
}

async function copyAssets() {
  await fs.cp(assetsDir, path.join(distDir, 'assets'), { recursive: true });
}

async function copyPages() {
  const files = await fs.readdir(pagesDir);
  const htmlFiles = files.filter((file) => file.toLowerCase().endsWith('.html'));

  for (const file of htmlFiles) {
    const sourcePath = path.join(pagesDir, file);
    const targetPath = path.join(distDir, file);

    let html = await fs.readFile(sourcePath, 'utf8');
    html = html.replace(/\.\.\/assets\//g, './assets/');

    await fs.writeFile(targetPath, html, 'utf8');
  }
}

async function build() {
  console.log('Building static site...');
  await cleanDist();
  await copyAssets();
  await copyPages();
  console.log(`Build complete -> ${distDir}`);
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
