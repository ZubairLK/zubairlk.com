import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'site');
const output = join(root, 'dist');
mkdirSync(output, { recursive: true });
cpSync(source, output, { recursive: true });

// This single-page site can paint without waiting for three stylesheet requests.
// Keep CSS editable in its source files; inline it only in the published HTML.
let html = readFileSync(join(source, 'index.html'), 'utf8');
for (const name of ['fonts.css', 'layout.css', 'site.css']) {
  const tag = new RegExp(`<link href="/${name.replace('.', '\\.')}\\?v=\\d+" rel="stylesheet"/>`);
  if (!tag.test(html)) throw new Error(`Missing stylesheet link: ${name}`);
  html = html.replace(tag, () => `<style data-source="${name}">\n${readFileSync(join(source, name), 'utf8')}\n</style>`);
}
writeFileSync(join(output, 'index.html'), html);
console.log('Built static site in dist/ with inline CSS.');
