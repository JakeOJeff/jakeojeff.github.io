/**
 * Gallery data model.
 *
 * The mosaic is driven by `public/data/gallery.json`, so images can change
 * without touching the page. Two ways to fill that file:
 *
 *   - by hand: drop files in `public/images/gallery/` and list them, or
 *     point `src` at any public image URL.
 *   - from an album: run `node scripts/sync-album.mjs <album-url>`, which
 *     reads a public album and rewrites the manifest for you.
 *
 * A tile with no `src` is not an error. It renders as an empty placeholder
 * that still occupies its footprint, so the layout is complete before the
 * photographs are.
 */

/** Footprints on the 96-column field. p = portrait, l = landscape. */
export type Span = "sq" | "p-sm" | "p-md" | "p-lg" | "l-sm" | "l-md" | "l-lg";

export type Tile = {
  /** Image URL. Omit or leave empty to render a shape-holding placeholder. */
  src?: string;
  /** Full-size version, opened on click. Defaults to `src`. */
  href?: string;
  alt?: string;
  /** Shown on hover. */
  caption?: string;
  span?: Span;
};

export type GalleryManifest = {
  /** Where these tiles came from. Informational only. */
  source?: string;
  /** Timestamp written by the sync script. */
  updated?: string;
  tiles: Tile[];
};

export const MANIFEST_URL = "/data/gallery.json";

/** Footprints cycled through when a tile does not name its own. */
const SPAN_CYCLE: Span[] = ["p-sm", "l-sm", "p-md", "sq", "l-md", "p-sm", "l-lg", "sq"];

export function spanFor(tile: Tile, index: number): Span {
  return tile.span ?? SPAN_CYCLE[index % SPAN_CYCLE.length];
}

/**
 * Enough empty tiles to make the grid look composed before any image exists.
 * Also the fallback when the manifest is missing or unreadable.
 */
export function placeholderTiles(count = 14): Tile[] {
  return Array.from({ length: count }, (_, i) => ({ span: SPAN_CYCLE[i % SPAN_CYCLE.length] }));
}

export async function loadManifest(signal?: AbortSignal): Promise<Tile[]> {
  try {
    const res = await fetch(MANIFEST_URL, { signal, cache: "no-cache" });
    if (!res.ok) return placeholderTiles();
    const data: GalleryManifest = await res.json();
    const tiles = Array.isArray(data?.tiles) ? data.tiles : [];
    return tiles.length > 0 ? tiles : placeholderTiles();
  } catch {
    return placeholderTiles();
  }
}
