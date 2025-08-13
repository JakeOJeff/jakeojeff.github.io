"use client";

import { useEffect, useState } from "react";
import { marked } from "marked";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPost({ params }: PageProps) {
  const [slug, setSlug] = useState<string>("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    getSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const loadPost = async () => {
      try {
        const res = await fetch(`/data/${slug}.md`);
        if (!res.ok) throw new Error("Post not found");
        const text = await res.text();
        const html = await marked.parse(text);
        setContent(html);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-500">Post not found.</div>;

  return (
    <main className="prose bg-gray-200 min-h-screen text-black px-6 py-12 mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}