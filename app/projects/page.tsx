"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import githubIcon from '/public/github.svg';
import globeIcon from '/public/globe.svg';
import { usePathname } from 'next/navigation';

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

export default function Projects() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(0);
  const pathname = usePathname();

  const filtered = projectsData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-stone-100 text-black min-h-screen p-6">
      <p className="text-lg font-mono ml-4 mt-6 mb-8">~{pathname}</p>

      <div className="max-w-3xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filtered.map((repo, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              {/* Header Row */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span
                    className={`text-xl text-gray-600 transition ${
                      expanded === i ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                  <h2 className="text-lg font-semibold text-gray-800">{repo.name}</h2>
                </div>

                {repo.language && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: languageColors[repo.language] || "#999",
                      }}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}
              </button>

              {/* Expanded Content */}
              {expanded === i && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-4">{repo.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{repo.commits} commits</span>
                  </div>

                  <div className="flex gap-4">
                    {repo.demo && (
                      <a
                        href={repo.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition text-sm font-medium"
                      >
                        <Image src={globeIcon} alt="Website" width={16} height={16} />
                        Live Demo
                      </a>
                    )}
                    {repo.repo && (
                      <a
                        href={repo.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition text-sm font-medium"
                      >
                        <Image src={githubIcon} alt="GitHub" width={16} height={16} />
                        Repository
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No projects found</p>
        )}
      </div>
    </main>
  );
}
