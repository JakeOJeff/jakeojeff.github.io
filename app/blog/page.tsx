import Link from "next/link";
import path from "path";
import fs from "fs";

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

      <div className="max-w-5xl mx-auto px-6 pt-6">
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

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition block duration-500"
            >
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{post.description}</p>
              <div className="flex justify-between items-center">
                <div className="mt-2 text-sm text-gray-400">{post.date}</div>
                <p className="text-gray-600 transition duration-300">
                  Read More &#62;&#62;
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-600"></span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
