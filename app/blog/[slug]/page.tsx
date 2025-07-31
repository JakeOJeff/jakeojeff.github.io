import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const files = fs.readdirSync("content/blog");
  return files.map((file) => ({ slug: file.replace(".md", "") }));
}

export default async function BlogPost({ params }: Props) {
  const filePath = `content/blog/${params.slug}.md`;
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="prose max-w-3xl px-6 py-12 mx-auto">
      <h1>{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
