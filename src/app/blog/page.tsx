import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - PixelPDF | PDF Tips, Tutorials & Guides",
  description: "Learn how to work with PDF files. Free guides on converting, merging, splitting, and optimizing PDF documents.",
};

const blogPosts = [
  {
    title: "Merge PDF: Complete Guide to Combine PDF Files Online (2026)",
    description: "Learn how to merge PDF files online for free with PixelPDF. Step-by-step guide, tips, comparison table, and FAQs about combining PDF documents.",
    slug: "merge-pdf-complete-guide",
    date: "2026-05-20",
    category: "Tutorial",
  },
  {
    title: "How to Convert PDF to JPG Online for Free - Complete Guide 2025",
    description: "Learn how to convert PDF to JPG online for free. Step-by-step guide using PixelPDF's free PDF to JPG converter.",
    slug: "pdf-to-jpg-guide",
    date: "2025-05-19",
    category: "Tutorial",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">PixelPDF Blog</h1>
      <p className="text-lg text-slate-600 mb-10">
        Tips, tutorials, and guides for working with PDF files.
      </p>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
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
