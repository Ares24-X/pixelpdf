import type { Metadata } from "next";
import Link from "next/link";
import posts from "@/content/blog/posts.json";



export const metadata: Metadata = {
  title: "Blog - PixelPDF | PDF Tips, Tutorials & Guides",
  description: "Learn how to work with PDF files. Free guides on converting, merging, splitting, and optimizing PDF documents.",
};

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export default function BlogPage() {
  const allPosts = posts as Post[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">PixelPDF Blog</h1>
      <p className="text-lg text-slate-600 mb-10">
        Tips, tutorials, and guides for working with PDF files.
      </p>

      <div className="grid gap-6">
        {allPosts.map((post) => (
          <article
            key={post.slug}
            className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-slate-400 text-sm">{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-600">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
