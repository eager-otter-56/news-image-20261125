// Render poster.html to entry.png at exactly 1024x1024 using headless Chromium.
// Deterministic: fixed window size, no scrollbars, no network (file:// only).
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const html = join(here, "poster.html");
const out = join(here, "entry.png");

const candidates = [
  process.env.CHROME_BIN,
  `${process.env.HOME}/.cache/puppeteer/chrome-headless-shell/linux-158.0.8127.36/chrome-headless-shell-linux64/chrome-headless-shell`,
  "/opt/meta-chromium/chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/google-chrome",
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("No Chromium binary found");
  process.exit(1);
}

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=1024,1024",
  `--screenshot=${out}`,
  `file://${html}`,
], { stdio: "inherit" });

console.log(`Wrote ${out}`);
