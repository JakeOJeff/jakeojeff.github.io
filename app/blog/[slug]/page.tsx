"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { marked } from "marked";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

useEffect(() => {
  const loadPost = async () => {
    try {
      const res = await fetch(`/data/${slug}.md`);
      if (!res.ok) throw new Error("Post not found");
      const text = await res.text();
      const html = await marked.parse(text);
      setContent(html);
    } catch (err) {
      setError(true);
    }
  };

  loadPost();
}, [slug]);

  if (error) return <div className="p-10 text-red-500">Post not found.</div>;

  return (
<main className="prose bg-gray-200 min-h-screen text-black px-6 py-12 mx-auto">
  <div dangerouslySetInnerHTML={{ __html: content }} />
</main>

  );
}
