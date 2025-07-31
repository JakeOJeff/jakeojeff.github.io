"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { marked } from "marked";
import matter from "front-matter"; // 👈 front-matter parser

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [meta, setMeta] = useState({ title: "", theme: "", layout: "" });

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetch(`/data/${slug}.md`);
        if (!res.ok) throw new Error("Post not found");
        const text = await res.text();
        
        const parsed = matter(text); // parse frontmatter
        const html = await marked.parse(parsed.body);

        setContent(html);
        setMeta(parsed.attributes as any);
      } catch (err) {
        setError(true);
      }
    };

    loadPost();
  }, [slug]);

  if (error) return <div className="p-10 text-red-500">Post not found.</div>;

  // Use frontmatter metadata to apply classes
  const themeClass = meta.theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black";
  const layoutClass = meta.layout === "wide" ? "max-w-7xl" : "max-w-3xl";

  return (
    <main className={`prose min-h-screen px-6 py-12 mx-auto ${themeClass} ${layoutClass}`}>
      <h1>{meta.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
