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
