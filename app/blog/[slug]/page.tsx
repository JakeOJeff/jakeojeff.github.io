import fs from "fs";
import path from "path";
import { marked } from "marked";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "public/data");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "public/data", `${params.slug}.md`);

  let html = "";
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    html = await marked.parse(fileContent);
  } catch {
    html = "<h1>Post not found</h1>";
  }

  return (
    <main className="prose bg-gray-200 min-h-screen text-black px-6 py-12 max-w-5xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
