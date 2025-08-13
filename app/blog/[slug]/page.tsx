import { marked } from "marked";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for static export
export async function generateStaticParams() {
  try {
    const postsDirectory = path.join(process.cwd(), 'public/data');
    const filenames = fs.readdirSync(postsDirectory);
    const slugs = filenames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
    
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.warn('Could not read posts directory:', error);
    // Fallback: manually specify your blog post slugs
    return [
      { slug: 'hc-some-stickers' },
      // Add your actual blog post slugs here
    ];
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    // Read the markdown file at build time
    const filePath = path.join(process.cwd(), 'public/data', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const html = await marked.parse(fileContent);
    
    return (
      <main className="prose bg-gray-200 min-h-screen text-black px-6 py-12 mx-auto">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    );
  } catch (error) {
    // If file doesn't exist, show 404
    notFound();
  }
}