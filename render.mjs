// render.mjs — renders poster.html to entry.png (1024x1024) with the
// headless-shell Chromium bundled under ~/.cache/puppeteer.
// Node built-ins only; no network, no extra packages.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const html = join(dir, "poster.html");
const out = join(dir, "entry.png");

function findChrome() {
  if (process.env.CHROME_BIN && existsSync(process.env.CHROME_BIN)) {
    return process.env.CHROME_BIN;
  }
  const home = process.env.HOME || "";
  const base = join(home, ".cache", "puppeteer", "chrome-headless-shell");
  if (!existsSync(base)) throw new Error("no chrome-headless-shell cache found");
  const versions = readdirSync(base).sort().reverse();
  for (const v of versions) {
    const p = join(base, v, "chrome-headless-shell-linux64", "chrome-headless-shell");
    if (existsSync(p)) return p;
  }
  throw new Error("chrome-headless-shell binary not found under " + base);
}

const chrome = findChrome();
execFileSync(chrome, [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=1024,1024",
  "--screenshot=" + out,
  "file://" + html,
], { stdio: "inherit" });
console.log("wrote " + out);
