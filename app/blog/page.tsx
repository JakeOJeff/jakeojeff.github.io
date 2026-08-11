import Link from "next/link";
import path from "path";
import fs from "fs";
import { hash, pick, radii, pads, titleSizes, tints, tilts } from "../shapes";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export default function BlogPage() {
  const filePath = path.join(process.cwd(), "public/data", "blog-posts.json");
  const posts: Post[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <main className="bg-stone-100 text-black min-h-screen">
      <p className="text-lg font-mono ml-10 mt-10">~/blog</p>

      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Link
          href="/summary"
          className="group inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
          <span className="font-medium">AI Summary</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Masonry wall */}
        <div className="columns-1 gap-5 p-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {posts.map((post) => {
            const h = hash(post.title);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group mb-5 block break-inside-avoid border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${pick(radii, h >>> 2)} ${pick(pads, h >>> 5)} ${pick(tints, h >>> 11)} ${pick(tilts, h >>> 14)}`}
              >
                <h2 className={`font-semibold text-gray-800 ${pick(titleSizes, h >>> 8)}`}>{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{post.description}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="text-xs text-gray-400">{post.date}</div>
                  <p className="text-sm text-gray-600 transition duration-300">
                    Read More &#62;&#62;
                    <span className="block h-0.5 max-w-0 bg-gray-600 transition-all duration-500 group-hover:max-w-full"></span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
