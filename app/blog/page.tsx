"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/data/blog-posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="bg-gray-200 text-black min-h-screen px-6 py-10">
      <div className="m-4 text-lg font-mono text-gray-500">~/blog</div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white p-5 rounded-xl border border-gray-300 shadow-md hover:shadow-lg transition block duration-500"
          >
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{post.description}</p>
            <div className="mt-2 text-sm text-gray-400">{post.date}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
