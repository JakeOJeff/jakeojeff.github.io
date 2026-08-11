"use client";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import githubIcon from '/public/github.svg';
import globeIcon from '/public/globe.svg';
import { usePathname } from 'next/navigation';
import { hash, pick, radii, pads, titleSizes, tints, tilts } from "../shapes";

const projectsData = [
  {
    name: "mimicode",
    description: "An AI coding-agent CLI (with @trymimicode / Curious Engine). Built the entire terminal UI, memory system and slash commands; #1 contributor. Now a single zero-dependency Go binary.",
    demo: "https://mimicode.xyz",
    repo: "https://github.com/trymimicode/mimicode-go",
    screenshot: "",
    language: "Go",
    commits: 60,
  },
  {
    name: "Tales of Orbis",
    description: "Reach the core before Dawn Lights you up with Null. A full RPG built in LÖVE with custom engine systems.",
    repo: "https://github.com/JakeOJeff/tales-of-orbis",
    screenshot: "",
    language: "Lua",
    commits: 427,
  },
  {
    name: "LatLang",
    description: "A Ruby-based compiler that transpiles a custom language to Lua LÖVE. Full lexer, parser, and code generator.",
    repo: "https://github.com/JakeOJeff/lat",
    screenshot: "",
    language: "Ruby",
    commits: 198,
  },
  {
    name: "Spellfluid",
    description: "Fluid simulator based on the Euler-Grid Fluid method, inspired by research from the University of Freiburg.",
    repo: "https://github.com/JakeOJeff/Spellfluid",
    screenshot: "",
    language: "Lua",
    commits: 80,
  },
  {
    name: "Stacks Against You",
    description: "A no-database, fully private chatting app. Stateless architecture with end-to-end privacy by design.",
    demo: "https://jakeojeff.hackclub.app",
    repo: "https://github.com/jakeojeff/stacks-against-you",
    screenshot: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/f70284c76409e4b83fa715a46a40d9578aa6aeb6_image.png",
    language: "TypeScript",
    commits: 132,
  },
  {
    name: "Flowlog",
    description: "Aesthetic productivity and activity logging Chrome extension.",
    repo: "https://github.com/JakeOJeff/Flowlog",
    screenshot: "",
    language: "JavaScript",
    commits: 87,
  },
  {
    name: "Winpedia",
    description: "A freeze-based full-stack social media app.",
    repo: "https://github.com/JakeOJeff/winpedia",
    demo: "https://winpedia.vercel.app/",
    screenshot: "",
    language: "TypeScript",
    commits: 100,
  },
  {
    name: "Flowlog Desktop",
    description: "Dashboard view of metadata and productivity stats from the Flowlog Chrome Extension.",
    repo: "https://github.com/JakeOJeff/Flowlog-Desktop",
    screenshot: "",
    language: "Lua",
    commits: 98,
  },
  {
    name: "GoSpooks",
    description: "Horror escape CLI game written in Go.",
    repo: "https://github.com/JakeOJeff/GoSpooks",
    screenshot: "",
    language: "Go",
    commits: 94,
  },
  {
    name: "Signalizer",
    description: "Simple encoding and decoding tool with live API endpoints.",
    repo: "https://github.com/JakeOJeff/signalizer",
    demo: "https://signalizer.vercel.app/",
    screenshot: "",
    language: "TypeScript",
    commits: 92,
  },
  {
    name: "Jengine",
    description: "Grid-based physics simulator inspired by Box2D physics simulations.",
    repo: "https://github.com/JakeOJeff/Jengine",
    screenshot: "",
    language: "Lua",
    commits: 82,
  },
  {
    name: "OSSint",
    description: "Open source intelligence tool for social media and people tracking.",
    repo: "https://github.com/jakeojeff/ossint",
    screenshot: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/1503cd96bdf7018a9269ced62486a37c731c008c_image.png",
    language: "JavaScript",
    commits: 42,
  },
  {
    name: "seashell",
    description: "A Unix shell implementation written from scratch in C.",
    repo: "https://github.com/JakeOJeff/seashell",
    screenshot: "",
    language: "C",
    commits: 5,
  },
  {
    name: "logo-scraper",
    description: "Nix-based Playwright logo scraper with BeautifulSoup4 parsing pipeline.",
    repo: "https://github.com/JakeOJeff/logo-scraper",
    screenshot: "",
    language: "Python",
    commits: 39,
  },
  {
    name: "Mantis",
    description: "T3 stack meets Kamal 2.0 — opinionated full-stack app with containerised deployment.",
    repo: "https://github.com/JakeOJeff/mantis",
    screenshot: "",
    language: "Go",
    commits: 36,
  },
  {
    name: "Rhythm",
    description: "A rhythm game built from scratch in LÖVE with custom beat mapping and timing systems.",
    repo: "https://github.com/JakeOJeff/Rhythm",
    screenshot: "",
    language: "Lua",
    commits: 35,
  },
  {
    name: "tiled-wakatime",
    description: "WakaTime integration plugin for the Tiled map editor — tracks time spent designing game maps.",
    repo: "https://github.com/JakeOJeff/tiled-wakatime",
    screenshot: "",
    language: "JavaScript",
    commits: 26,
  },
  {
    name: "anim16",
    description: "A lightweight quickie animation tool built in LÖVE. Simple enough for anyone to pick up.",
    repo: "https://github.com/JakeOJeff/sensualmoves",
    screenshot: "",
    language: "Lua",
    commits: 22,
  },
  {
    name: "Vellapaper",
    description: "Posters and vintage paintings e-commerce store.",
    demo: "https://vellapaper.com",
    repo: "https://github.com/jakeojeff/vellapaper",
    screenshot: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/d72d9eaa6779158b6d66634f65f3cb400f3b03df_image.png",
    language: "Liquid",
    commits: 20,
  },
  {
    name: "Kerala Hackclub Website",
    description: "Contributed to the Kerala Hackclub's official website as an active org member and developer.",
    repo: "https://github.com/kerala-hackclub/kerala-hackclub.github.io",
    screenshot: "",
    language: "Astro",
    commits: 15,
  },
  {
    name: "memsnoop",
    description: "Memory introspection and process snooping tool for security research.",
    repo: "https://github.com/JakeOJeff/memsnoop",
    screenshot: "",
    language: "Python",
    commits: 11,
  },
  {
    name: "Cozy Music Player",
    description: "A cozy desktop music player built in Lua.",
    repo: "https://github.com/JakeOJeff/cozy-music-player",
    screenshot: "https://private-user-images.githubusercontent.com/87922888/421841911-d0e7cf45-169c-4745-b5b4-4cfd498bfafa.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTUyMDcxNzUsIm5iZiI6MTc1NTIwNjg3NSwicGF0aCI6Ii84NzkyMjg4OC80MjE4NDE5MTEtZDBlN2NmNDUtMTY5Yy00NzQ1LWI1YjQtNGNmZDQ5OGJmYWZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODE0VDIxMjc1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdlNmFmMTExNTkxOWVmZDkxZjM2ZDlhZjM4Njk5ZGM5ZjY4ZjIxZjQyYjI1YTE1YjhkMGI4ZDg3MTJlYTRkNTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.60O97rHpXvxmA7IpASNqlpMSjOCNNLNpzSDnLTpG7SQ",
    language: "Lua",
    commits: 10,
  },
  {
    name: "Build On Rails",
    description: "Website for Build On Rails Hackathon 2025 ( Tinkerhub x IEDC ).",
    repo: "https://github.com/JakeOJeff/bonrails",
    demo: "https://buildonrails.vercel.app/",
    screenshot: "",
    language: "TypeScript",
    commits: 10,
  },
  {
    name: "Liora",
    description: "Prequel to Tales of Orbis, built in Godot. A standalone story set in the same universe.",
    repo: "https://github.com/JakeOJeff/Liora",
    screenshot: "",
    language: "GDScript",
    commits: 9,
  },
  {
    name: "Nullborn Saga",
    description: "A visual novel for the unification of Liora and Orbis.",
    repo: "https://github.com/JakeOJeff/Nullborn-Saga",
    screenshot: "",
    language: "Lua",
    commits: 7,
  },
  {
    name: "2D Physics Engine",
    description: "A bare-bones interactive 2D physics engine built from scratch in Lua.",
    repo: "https://github.com/JakeOJeff/Physics-Engine",
    screenshot: "https://private-user-images.githubusercontent.com/87922888/426685612-f3c9d1ba-524a-4fef-a95d-dfe103823dc6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTUyMDczNTEsIm5iZiI6MTc1NTIwNzA1MSwicGF0aCI6Ii84NzkyMjg4OC80MjY2ODU2MTItZjNjOWQxYmEtNTI0YS00ZmVmLWE5NWQtZGZlMTAzODIzZGM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODE0VDIxMzA1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThhM2JlOGYxZmE1ZWM3YzY5ZTljZGYxNDEyOWRiODQ0OGNmY2U4NjlmYzlmN2RkZjA2ZmNiOGNlNWM0MTAzYWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ie879sxhVeIrFgKR73qTrF7OZsL1cxHHaDRQBYiE5dQ",
    language: "Lua",
    commits: 7,
  },
  {
    name: "seductivehood",
    description: "A 2D car physics library for LÖVE games — plug-in vehicle handling for your projects.",
    repo: "https://github.com/JakeOJeff/seductivehood",
    screenshot: "",
    language: "Lua",
    commits: 6,
  },
  {
    name: "JSRC Framework",
    description: "A Lua GUI library for LÖVE games — reusable UI components for game developers.",
    repo: "https://github.com/JakeOJeff/JSRC-FRAMEWORK",
    screenshot: "",
    language: "Lua",
    commits: 3,
  },
  {
    name: "Oversmart Shuffle",
    description: "A smarter shuffling algorithm for songs and queues — avoids repetition and clustering.",
    repo: "https://github.com/JakeOJeff/Oversmart-Shuffle",
    screenshot: "",
    language: "Lua",
    commits: 4,
  },
];

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  C: "#555555",
  Liquid: "#67b8de",
  Cpp: "#f34b7d",
  Rust: "#dea584",
  Lua: "#000080",
  Ruby: "#CC342D",
  Go: "#29BEB0",
  Astro: "#FF5A03",
  GDScript: "#478CBF",
};

type Project = {
  name: string;
  description: string;
  demo?: string;
  repo: string;
  screenshot: string;
  language: string;
  commits: number;
};

const bandHeights = ["h-20", "h-28", "h-36", "h-44"];
const ratios = ["aspect-[4/3]", "aspect-[16/10]", "aspect-square", "aspect-[3/2]"];

type CardHandlers = {
  registerRef: (name: string, el: HTMLDivElement | null) => void;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>, name: string) => void;
  swallowClick: (e: React.MouseEvent) => void;
  dragging: boolean;
};

function ProjectCard({ repo, handlers }: { repo: Project; handlers: CardHandlers }) {
  const [shotFailed, setShotFailed] = useState(false);

  const h = hash(repo.name);
  const color = languageColors[repo.language] || "#999";
  const bandStyle = (h >>> 23) % 3;
  const showShot = Boolean(repo.screenshot) && !shotFailed;

  const bandBg =
    bandStyle === 0
      ? { backgroundImage: `linear-gradient(135deg, ${color}33, ${color}0d 70%)` }
      : bandStyle === 1
        ? { backgroundColor: `${color}14` }
        : {
            backgroundImage: `repeating-linear-gradient(45deg, ${color}1f 0 10px, ${color}08 10px 20px)`,
          };

  return (
    <div
      ref={(el) => {
        handlers.registerRef(repo.name, el);
      }}
      onPointerDown={(e) => handlers.onPointerDown(e, repo.name)}
      onClickCapture={handlers.swallowClick}
      onDragStart={(e) => e.preventDefault()}
      className={`group relative mb-5 break-inside-avoid overflow-hidden border shadow-sm transition-all duration-300 ${pick(radii, h >>> 2)} ${pick(tints, h >>> 11)} ${
        handlers.dragging
          ? "border-gray-300 shadow-2xl"
          : `border-gray-200 hover:-translate-y-1 hover:shadow-lg ${pick(tilts, h >>> 14)}`
      }`}
    >
      {showShot ? (
        <div className={`w-full overflow-hidden ${pick(ratios, h >>> 20)}`}>
          {/* plain img: these are remote hosts that aren't configured for next/image,
              and some are expired links that need the onError fallback */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={repo.screenshot}
            alt=""
            loading="lazy"
            draggable={false}
            onError={() => setShotFailed(true)}
            // a broken image that already errored before hydration never fires
            // onError, so re-check the loaded state once the node is attached
            ref={(img) => {
              if (img?.complete && img.naturalWidth === 0) setShotFailed(true);
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className={`relative w-full overflow-hidden ${pick(bandHeights, h >>> 17)}`} style={bandBg}>
          {bandStyle !== 2 && (
            <span
              className="absolute -bottom-5 right-3 text-7xl font-bold leading-none select-none"
              style={{ color: `${color}2e` }}
            >
              {repo.name[0].toUpperCase()}
            </span>
          )}
        </div>
      )}

      <div className={pick(pads, h >>> 5)}>
        <a
          href={repo.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0"
        >
          <h2 className={`font-semibold text-gray-800 ${pick(titleSizes, h >>> 8)}`}>{repo.name}</h2>
        </a>

        <p className="mt-2 text-sm leading-relaxed text-gray-600">{repo.description}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
            {repo.language}
          </span>
          <span>{repo.commits} commits</span>
        </div>

        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {repo.demo && (
            <a
              href={repo.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-3 py-1.5 text-xs font-medium transition hover:bg-gray-300"
            >
              <Image src={globeIcon} alt="" width={14} height={14} />
              Live Demo
            </a>
          )}
          <a
            href={repo.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-3 py-1.5 text-xs font-medium transition hover:bg-gray-300"
          >
            <Image src={githubIcon} alt="" width={14} height={14} />
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_ORDER = projectsData.map((p) => p.name);
const ORDER_KEY = "projects-wall-order";
const projectsByName = new Map(projectsData.map((p) => [p.name, p]));

// useLayoutEffect warns during Next's server prerender; the FLIP measuring it
// does only ever matters in the browser.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function Projects() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState<string[]>(DEFAULT_ORDER);
  const [dragging, setDragging] = useState<string | null>(null);
  const pathname = usePathname();

  // live nodes of the currently mounted (i.e. unfiltered) cards
  const cards = useRef(new Map<string, HTMLDivElement>());
  // pre-reorder rects, set right before an order change so the effect below
  // can play the cards from where they were into where they landed
  const firstRects = useRef<Map<string, DOMRect> | null>(null);
  // a drag ends with a click event on the card's link — suppress that one
  const justDragged = useRef(false);

  useEffect(() => {
    let saved: unknown;
    try {
      saved = JSON.parse(localStorage.getItem(ORDER_KEY) ?? "null");
    } catch {
      return;
    }
    if (!Array.isArray(saved)) return;

    const known = new Set(DEFAULT_ORDER);
    const merged = saved.filter(
      (n, i): n is string => typeof n === "string" && known.has(n) && saved.indexOf(n) === i
    );
    // projects added since this order was stored go to the back
    const seen = new Set(merged);
    DEFAULT_ORDER.forEach((n) => !seen.has(n) && merged.push(n));
    setOrder(merged);
  }, []);

  const applyOrder = useCallback((next: string[]) => {
    // measure before React reflows the wall (a drop has already measured, from
    // while the dragged card was still under the cursor — keep that one)
    firstRects.current ??= new Map(
      Array.from(cards.current, ([name, node]) => [name, node.getBoundingClientRect()])
    );
    setOrder(next);
    try {
      if (next.every((n, i) => n === DEFAULT_ORDER[i])) localStorage.removeItem(ORDER_KEY);
      else localStorage.setItem(ORDER_KEY, JSON.stringify(next));
    } catch {
      /* private mode / storage full — the layout still works, it just won't persist */
    }
  }, []);

  // FLIP: invert every card to its old spot, then let it transition home
  useIsoLayoutEffect(() => {
    const first = firstRects.current;
    if (!first) return;
    firstRects.current = null;

    const moved: HTMLDivElement[] = [];
    cards.current.forEach((node, name) => {
      const from = first.get(name);
      if (!from) return;
      const to = node.getBoundingClientRect();
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      const scale = to.width ? from.width / to.width : 1;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(scale - 1) < 0.01) return;

      node.style.transition = "none";
      node.style.transformOrigin = "top left";
      node.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;
      moved.push(node);
    });
    if (!moved.length) return;

    requestAnimationFrame(() => {
      moved.forEach((node) => {
        node.style.transition = "transform 420ms cubic-bezier(0.22, 1.1, 0.36, 1)";
        node.style.transform = "";
        node.addEventListener(
          "transitionend",
          () => {
            node.style.transition = "";
            node.style.transformOrigin = "";
          },
          { once: true }
        );
      });
    });
  });

  const registerRef = useCallback((name: string, el: HTMLDivElement | null) => {
    if (el) cards.current.set(name, el);
    else cards.current.delete(name);
  }, []);

  // the card the pointer was released over, or the closest one within reach
  const dropTarget = useCallback((x: number, y: number, dragged: string) => {
    let closest: string | null = null;
    let closestDist = Infinity;
    for (const [name, node] of Array.from(cards.current)) {
      if (name === dragged) continue;
      const r = node.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return name;
      const dist = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2));
      if (dist < closestDist) {
        closestDist = dist;
        closest = name;
      }
    }
    return closestDist < 280 ? closest : null;
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>, name: string) => {
      justDragged.current = false;
      // touch keeps its native scrolling; this is a mouse/pen toy
      if (e.pointerType === "touch" || e.button !== 0) return;
      const el = cards.current.get(name);
      if (!el) return;

      const startX = e.clientX;
      const startY = e.clientY;
      let started = false;

      const move = (ev: PointerEvent) => {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (!started) {
          if (Math.hypot(dx, dy) < 6) return; // still could be a click
          started = true;
          window.getSelection()?.removeAllRanges();
          document.body.classList.add("dragging-card");
          el.style.transition = "none";
          el.style.willChange = "transform";
          el.style.zIndex = "50";
          setDragging(name);
        }
        const tilt = Math.max(-4, Math.min(4, dx * 0.03));
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${tilt}deg) scale(1.04)`;
      };

      const end = (ev: PointerEvent) => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", end);
        window.removeEventListener("pointercancel", end);
        if (!started) return;

        justDragged.current = true;
        document.body.classList.remove("dragging-card");

        const target = dropTarget(ev.clientX, ev.clientY, name);
        const visible = order.filter((n) => cards.current.has(n));
        const from = visible.indexOf(name);
        const to = target ? visible.indexOf(target) : -1;

        let next = order;
        if (from !== -1 && to !== -1 && from !== to) {
          const reordered = visible.filter((n) => n !== name);
          reordered.splice(to, 0, name);
          // slot the new visible sequence back into the full order, leaving
          // cards hidden by the search filter where they were
          const shown = new Set(visible);
          let i = 0;
          next = order.map((n) => (shown.has(n) ? reordered[i++] : n));
        }

        // clear the drag transform in the same frame as the measurement, so the
        // card never paints at its untransformed spot before the FLIP inverts it
        firstRects.current = new Map(
          Array.from(cards.current, ([key, node]) => [key, node.getBoundingClientRect()])
        );
        el.style.transform = "";
        el.style.transition = "";
        el.style.willChange = "";
        el.style.zIndex = "";
        // dropped back where it started: setDragging alone re-renders, and the
        // FLIP above still plays the card home from the cursor
        setDragging(null);
        if (next !== order) applyOrder(next);
      };

      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", end);
      window.addEventListener("pointercancel", end);
    },
    [order, dropTarget, applyOrder]
  );

  const swallowClick = useCallback((e: React.MouseEvent) => {
    if (!justDragged.current) return;
    justDragged.current = false;
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const filtered = order
    .map((name) => projectsByName.get(name)!)
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );

  const rearranged = order.some((n, i) => n !== DEFAULT_ORDER[i]);

  return (
    <main className="bg-stone-100 text-black min-h-screen p-6">
      <p className="text-lg font-mono ml-4 mt-6 mb-8">~{pathname}</p>

      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="mb-3 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-8 max-w-3xl mx-auto flex items-center justify-between text-xs text-gray-500">
          <span>drag the cards around — they&apos;ll snap into place</span>
          {rearranged && (
            <button
              onClick={() => applyOrder(DEFAULT_ORDER)}
              className="rounded-lg bg-gray-200 px-3 py-1 font-medium text-gray-700 transition hover:bg-gray-300"
            >
              reset layout
            </button>
          )}
        </div>

        {/* Masonry wall */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {filtered.map((repo) => (
            <ProjectCard
              key={repo.name}
              repo={repo}
              handlers={{
                registerRef,
                onPointerDown,
                swallowClick,
                dragging: dragging === repo.name,
              }}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No projects found</p>
        )}
      </div>
    </main>
  );
}
