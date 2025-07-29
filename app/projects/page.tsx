"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// Replace this with your actual repos and their demo links (if any)
const topRepos = [
    {
        name: "Stacks-Against-You",
        demo: "https://stacks.jakeojeff.com",
    },
    {
        name: "OSSint",
        demo: "https://ossint.vercel.app",
    },
    {
        name: "vellapaper",
        demo: "https://vellapaper.com",
    },
    {
        name: "another-repo-1",
        demo: "",
    },
    {
        name: "another-repo-2",
        demo: "",
    },
    {
        name: "another-repo-3",
        demo: "",
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
    Cpp: "#f34b7d",
    Rust: "#dea584",
    Lua: "#000080",
    // Add more if needed
};

export default function Projects() {
    const [repos, setRepos] = useState<any[]>([]);
    const username = "JakeOJeff";

    useEffect(() => {
        async function fetchCommitCount(repoName: string) {
            const res = await fetch(`https://api.github.com/repos/${username}/${repoName}/commits?per_page=1`);
            const linkHeader = res.headers.get("Link");

            if (linkHeader) {
                const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                return match ? parseInt(match[1], 10) : 1;
            }

            const commits = await res.json();
            return Array.isArray(commits) ? commits.length : 0;
        }

        async function fetchRepos() {
            const fetchedRepos = await Promise.all(
                topRepos.map(async ({ name, demo }) => {
                    const repoRes = await fetch(`https://api.github.com/repos/${username}/${name}`);
                    const repo = await repoRes.json();

                    const commitCount = await fetchCommitCount(name);

                    return {
                        ...repo,
                        commitCount,
                        demo,
                    };
                })
            );
            setRepos(fetchedRepos);
        }


        fetchRepos();
    }, []);

    const iconStyle = "hover:scale-110 transition";

    return (
        <main className="p-6">
            <header>
                <Link href="/projects" className="flex items-center gap-1 m-1 text-[20px] text-gray-400 hover:text-gray-100 duration-500">
                    projects
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                        />
                    </svg>
                </Link>
            </header>

            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <div key={repo.id} className="bg-[#1e1e1e] p-5 rounded-xl border border-gray-700 shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-white">{repo.name}</h2>
                        <p className="text-sm text-gray-400 mt-1">{repo.description}</p>

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
                                <span>• {repo.commitCount} commits</span>
                            </div>

                            <div className="flex gap-3">
                                {repo.demo && (
                                    <a href={repo.demo} target="_blank" className={iconStyle} title="Live Demo">
                                        🌐
                                    </a>
                                )}
                                <a href={repo.html_url} target="_blank" className={iconStyle} title="View on GitHub">
                                    🐙
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
