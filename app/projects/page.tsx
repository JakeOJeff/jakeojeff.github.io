"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import githubIcon from '/public/github.svg';
import globeIcon from '/public/globe.svg';
import { hover } from "framer-motion";

const projects = [
  {
    name: "Stacks Against You",
    description: "A no-database fully private chatting app.",
    demo: "https://jakeojeff.hackclub.app",
    repo: "https://github.com/jakeojeff/stacks-against-you",
    screenshot: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/f70284c76409e4b83fa715a46a40d9578aa6aeb6_image.png",
    language: "TypeScript",
    commits: 134,
  },
  {
    name: "OSSint",
    description: "OSINT tool for social media & people tracking.",
    repo: "https://github.com/jakeojeff/ossint",
    screenshot: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/1503cd96bdf7018a9269ced62486a37c731c008c_image.png",
    language: "JavaScript",
    commits: 32,
  },
  {
    name: "Vellapaper",
    description: "Posters and Vintage Paintings selling store.",
    demo: "https://vellapaper.com",
    repo: "https://github.com/jakeojeff/vellapaper",
    screenshot: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/d72d9eaa6779158b6d66634f65f3cb400f3b03df_image.png",
    language: "TypeScript",
    commits: 20,
  },
  // Add more manually if needed
];

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  C: "#555555",
  Cpp: "#f34b7d",
  Rust: "#dea584",
  Lua: "#000080",
};

export default function Projects() {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-gray-200 text-black min-h-screen px-6 py-10">

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((repo, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl border border-gray-300 shadow-md hover:shadow-lg transition"
            onMouseEnter={() => repo.screenshot && setHoverImage(repo.screenshot)}
            onMouseLeave={() => setHoverImage(null)}
          >
            <h2 className="text-xl font-semibold text-gray-800">{repo.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{repo.description}</p>

            <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: languageColors[repo.language] || "#999",
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                <span>• {repo.commits} commits</span>
              </div>

              <div className="flex gap-3 text-xl">
                {repo.demo && (
                  <a
                    href={repo.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="hover:scale-105 duration-500 transition"
                  >
                    <Image src={globeIcon} alt="Website" width={24} height={24} />
                  </a>
                )}
                {repo.repo && (
                  <a
                    href={repo.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:scale-105 duration-500 transition"
                  >
                    <Image src={githubIcon} alt="GitHub" width={24} height={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hoverImage && (
        <div
          className="pointer-events-none fixed z-50 transition duration-100"
          style={{
            top: mousePosition.y + 20,
            left: mousePosition.x + 20,
            width: "400px",
            height: "auto",
          }}
        >
          <img src={hoverImage} alt="Screenshot preview" className="rounded-lg shadow-lg border border-gray-300" />
          {/* <Image
            src={hoverImage}
            alt="Screenshot preview"
            width={200}
            height={120}
            className="rounded shadow-lg border border-gray-300"
          /> */}
        </div>
      )}
    </main>
  );
}
