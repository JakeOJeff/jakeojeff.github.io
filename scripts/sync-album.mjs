#!/usr/bin/env node
/**
 * Fill the home-page mosaic from an album.
 *
 * Writes `public/data/gallery.json`, which the page fetches at runtime — so a
 * re-sync changes the pictures without a code change.
 *
 * Usage:
 *
 *   node scripts/sync-album.mjs local
 *       Lists every image in public/images/gallery/.
 *
 *   node scripts/sync-album.mjs <https://photos.app.goo.gl/...>
 *   node scripts/sync-album.mjs <https://photos.google.com/share/...>
 *       Reads a PUBLIC Google Photos shared album and pulls its image URLs.
 *       The album must be link-shared; private albums need OAuth and will not
 *       work here. Google serves these from lh3.googleusercontent.com, which
 *       allows hotlinking and accepts a size suffix (=w1600).
 *
 *   node scripts/sync-album.mjs <any-other-url>
 *       Best-effort scrape of <img> sources on the page. Useful for a public
 *       folder listing, a static index or another gallery you control.
 *
 * Options:
 *   --width=N     Requested width for Google-hosted images (default 1600).
 *   --limit=N     Keep at most N images (default 40).
 *   --out=PATH    Manifest path (default public/data/gallery.json).
 *   --keep-spans  Reuse the footprints already in the manifest, so a re-sync
 *                 swaps the photographs without redealing the layout.
 *
 * Running this in Node avoids the browser's CORS wall — the page itself could
 * not read a Google Photos album directly, but a build step can.
 */

import { readFile, writeFile, readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LOCAL_DIR = path.join(ROOT, "public", "images", "gallery");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

// Footprints dealt to tiles that have none. Mirrors SPAN_CYCLE in app/home/gallery.ts.
const SPAN_CYCLE = ["p-sm", "l-sm", "p-md", "sq", "l-md", "p-sm", "l-lg", "sq"];

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

function parseArgs(argv) {
  const opts = { width: 1600, limit: 40, out: path.join(ROOT, "public", "data", "gallery.json"), keepSpans: false };
  const rest = [];
  for (const arg of argv) {
    if (arg.startsWith("--width=")) opts.width = Number(arg.slice(8)) || opts.width;
    else if (arg.startsWith("--limit=")) opts.limit = Number(arg.slice(8)) || opts.limit;
    else if (arg.startsWith("--out=")) opts.out = path.resolve(ROOT, arg.slice(6));
    else if (arg === "--keep-spans") opts.keepSpans = true;
    else rest.push(arg);
  }
  return { opts, target: rest[0] };
}

async function fetchPage(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" }, redirect: "follow" });
  if (!res.ok) throw new Error(`${url} returned HTTP ${res.status}`);
  return res.text();
}

/** Google Photos embeds its media URLs in the page's bootstrap data. */
function extractGooglePhotos(html, width) {
  const found = new Set();
  // Base URLs look like https://lh3.googleusercontent.com/pw/<id>, sometimes
  // already carrying a =w..-h.. size suffix. Strip any suffix, add our own.
  const re = /https:\/\/lh3\.googleusercontent\.com\/(?:pw\/)?[A-Za-z0-9_\-]{20,}/g;
  for (const match of html.matchAll(re)) {
    found.add(`${match[0]}=w${width}`);
  }
  return [...found];
}

/** Anything that looks like an image on an arbitrary page. */
function extractGenericImages(html, base) {
  const found = new Set();
  for (const match of html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) {
    try {
      const url = new URL(match[1], base).href;
      if (IMAGE_EXT.test(new URL(url).pathname)) found.add(url);
    } catch {
      /* skip unparseable src */
    }
  }
  for (const match of html.matchAll(/https?:\/\/[^\s"'<>]+\.(?:jpe?g|png|webp|avif)/gi)) {
    found.add(match[0]);
  }
  return [...found];
}

async function collectLocal() {
  if (!existsSync(LOCAL_DIR)) {
    console.error(`No such directory: ${path.relative(ROOT, LOCAL_DIR)}`);
    return [];
  }
  const entries = await readdir(LOCAL_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && IMAGE_EXT.test(e.name))
    .map((e) => e.name)
    .sort()
    .map((name) => `/images/gallery/${name}`);
}

async function readExistingSpans(out) {
  try {
    const data = JSON.parse(await readFile(out, "utf8"));
    return Array.isArray(data?.tiles) ? data.tiles.map((t) => t.span) : [];
  } catch {
    return [];
  }
}

async function main() {
  const { opts, target } = parseArgs(process.argv.slice(2));

  if (!target) {
    console.error("Usage: node scripts/sync-album.mjs <local | album-url> [--width=N] [--limit=N] [--keep-spans]");
    process.exit(1);
  }

  let urls = [];
  let source = target;

  if (target === "local") {
    urls = await collectLocal();
    source = "public/images/gallery";
  } else {
    const html = await fetchPage(target);
    const isGoogle = /photos\.(google|app\.goo)\b/.test(target) || html.includes("lh3.googleusercontent.com");
    urls = isGoogle ? extractGooglePhotos(html, opts.width) : extractGenericImages(html, target);

    if (isGoogle && urls.length === 0) {
      console.error(
        "Found no images. Check that the album is shared by link and open to anyone — private albums cannot be read this way.",
      );
    }
  }

  urls = urls.slice(0, opts.limit);

  if (urls.length === 0) {
    console.error("Nothing to write; leaving the existing manifest alone.");
    process.exit(1);
  }

  const existingSpans = opts.keepSpans ? await readExistingSpans(opts.out) : [];

  const tiles = urls.map((src, i) => ({
    src,
    span: existingSpans[i] ?? SPAN_CYCLE[i % SPAN_CYCLE.length],
    alt: "",
  }));

  await mkdir(path.dirname(opts.out), { recursive: true });
  await writeFile(opts.out, `${JSON.stringify({ source, updated: new Date().toISOString(), tiles }, null, 2)}\n`);

  console.log(`Wrote ${tiles.length} tiles to ${path.relative(ROOT, opts.out)} from ${source}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
