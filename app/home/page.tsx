"use client";

import Link from "next/link";
import AmbientPlayer from "./AmbientPlayer";
import Mosaic from "./Mosaic";

const YEAR = new Date().getFullYear();

export default function HomePage() {
  return (
    <div className="home-root">
      <nav className="site-nav">
        <div className="site-nav-inner">
          <Link href="/home" className="site-nav-logo">
            Jake Jeffrin
          </Link>
          <div className="site-nav-links">
            <Link href="/">Portfolio</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <Mosaic cards={cards} />

      <footer className="site-footer">
        <span>© {YEAR} Jake Jeffrin</span>
        <span className="footer-sep">·</span>
        <a href="https://github.com/JakeOJeff" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className="footer-sep">·</span>
        <Link href="/">Main site</Link>
      </footer>

      <AmbientPlayer />
    </div>
  );
}

/**
 * Text cards, keyed to their slot in the tile stream. Positions are chosen so
 * the writing is spread through the mosaic instead of stacking at the top.
 */
const cards: { at: number; node: React.ReactNode; wide?: boolean }[] = [
  {
    at: 0,
    wide: true,
    node: (
      <>
        <div className="card-name">Jake Jeffrin</div>
        <div className="card-tagline">Programmer, game developer, cyber-pentester.</div>
        <p>
          I started at 11, making Roblox games on a 4GB laptop that could not run a
          real engine. That constraint pushed me to{" "}
          <a href="https://love2d.org" target="_blank" rel="noopener noreferrer">
            LÖVE
          </a>
          , and most of what I know about input, media and shipping came from
          there.
        </p>
        <div className="card-links">
          <a href="/jake-resume.pdf" target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
          <a href="https://github.com/JakeOJeff" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </>
    ),
  },
  {
    at: 3,
    node: (
      <>
        <div className="card-title">Building</div>
        <div className="card-sub">
          LatLang <span>compiler</span>
        </div>
        <p>
          A language compiler written from the tokeniser up.{" "}
          <a href="https://github.com/JakeOJeff/lat" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </p>
        <div className="card-sub">
          Stacks Against You <span>chat</span>
        </div>
        <p>
          Online chat with no database — nothing is stored, so nothing leaks.{" "}
          <a
            href="https://github.com/jakeojeff/stacks-against-you"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </p>
      </>
    ),
  },
  {
    at: 7,
    node: (
      <>
        <div className="card-title">Elsewhere</div>
        <p>
          Security work — offensive and defensive — across web, Android and
          hardware. PCB design when the problem wants a board rather than a
          binary.
        </p>
        <p>
          Guitar (electric, acoustic, classical), open gigs, and poetry when the
          screen has been on too long.
        </p>
        <div className="card-mono">github.com/JakeOJeff</div>
      </>
    ),
  },
  {
    at: 12,
    wide: true,
    node: (
      <>
        <div className="card-title">Writing</div>
        <p>
          Notes on engines, compilers, security and the things that did not work
          the first time.
        </p>
        <div className="card-links">
          <Link href="/blog">All posts</Link>
          <Link href="/summary">Summary</Link>
          <Link href="/projects">Project wall</Link>
        </div>
      </>
    ),
  },
];
