"use client";

import { useEffect, useState, type ReactNode } from "react";
import { loadManifest, placeholderTiles, spanFor, type Tile } from "./gallery";

/**
 * The mosaic: media tiles and text cards packed into one dense grid.
 *
 * Cards are injected at fixed positions in the tile stream so the writing
 * sits among the pictures rather than above them.
 */
export default function Mosaic({ cards }: { cards: { at: number; node: ReactNode; wide?: boolean }[] }) {
  // Start from placeholders so the grid has its full shape on first paint,
  // then swap in whatever the manifest names.
  const [tiles, setTiles] = useState<Tile[]>(() => placeholderTiles());

  useEffect(() => {
    const controller = new AbortController();
    loadManifest(controller.signal).then(setTiles).catch(() => undefined);
    return () => controller.abort();
  }, []);

  const cells: ReactNode[] = [];
  const byPosition = new Map(cards.map((c) => [c.at, c]));

  const total = Math.max(tiles.length, ...cards.map((c) => c.at + 1));

  for (let i = 0; i < total; i++) {
    const card = byPosition.get(i);
    if (card) {
      cells.push(
        <div key={`card-${i}`} className={`mosaic-cell ${card.wide ? "span-c-lg" : "span-c-sm"}`}>
          <div className="card">{card.node}</div>
        </div>,
      );
    }

    const tile = tiles[i];
    if (!tile) continue;
    cells.push(<MosaicTile key={`tile-${i}`} tile={tile} index={i} />);
  }

  return (
    <section className="mosaic-section">
      <div className="mosaic-grid">{cells}</div>
    </section>
  );
}

function MosaicTile({ tile, index }: { tile: Tile; index: number }) {
  // A tile whose image 404s falls back to the placeholder rather than
  // leaving a broken-image gap in the grid.
  const [failed, setFailed] = useState(false);
  const src = failed ? undefined : tile.src;

  const className = `mosaic-cell span-${spanFor(tile, index)}`;

  if (!src) {
    return (
      <div className={className}>
        <div className="mosaic-placeholder" aria-hidden="true">
          <span className="mosaic-placeholder-mark">◦</span>
        </div>
      </div>
    );
  }

  const image = (
    // Plain <img>: sources are arbitrary remote URLs from the manifest, and
    // the site exports statically, so next/image optimisation does not apply.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="mosaic-media"
      src={src}
      alt={tile.alt ?? ""}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );

  const body = (
    <>
      {image}
      {tile.caption ? <span className="mosaic-caption">{tile.caption}</span> : null}
    </>
  );

  const href = tile.href ?? tile.src;

  return (
    <div className={className}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%" }}>
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}
