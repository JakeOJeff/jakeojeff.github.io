"use client"
import { useEffect, useState } from "react";

type Repo = {
  name: string;
  html_url: string;
  commits: number;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = "jakeojeff";

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      const data = await res.json();

      const reposWithCommits = await Promise.all(
        data.map(async (repo: any) => {
          try {
            const commitsRes = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
            );
            const linkHeader = commitsRes.headers.get("Link");
            let commits = 0;

            if (linkHeader && linkHeader.includes("rel=\"last\"")) {
              const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
              commits = match ? parseInt(match[1]) : 0;
            } else {
              const json = await commitsRes.json();
              commits = json.length;
            }

            return { name: repo.name, html_url: repo.html_url, commits };
          } catch (e) {
            return { name: repo.name, html_url: repo.html_url, commits: 0 };
          }
        })
      );

      const sorted = reposWithCommits.sort((a, b) => b.commits - a.commits);
      setRepos(sorted.slice(0, 10)); // top 10
    };

    fetchRepos();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Top GitHub Repos by Commit Count</h1>
      <ul className="space-y-2">
        {repos.map((repo, i) => (
          <li key={repo.name}>
            <a
              className="text-blue-500 hover:underline"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i + 1}. {repo.name} — {repo.commits} commits
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
