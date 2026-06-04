import Link from "next/link";
import posts from "@/content/blog/posts.json";

export default function ZhBlogPage() {
  const allPosts = posts as { slug: string; title: string; description: string; date: string; category: string }[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">PixelPDF 博客</h1>
      <p className="text-lg text-slate-600 mb-4">PDF文件处理技巧、教程和指南。</p>
      <p className="mb-10"><Link href="/blog" className="text-blue-500 text-sm">🇺🇸 English</Link></p>

      <div className="grid gap-6">
        {allPosts.map(post => (
          <article key={post.slug} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-slate-400 text-sm">{post.date}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/zh/blog/${post.slug}`} className="text-slate-900 hover:text-blue-600">{post.title}</Link>
            </h2>
            <p className="text-slate-600 mb-4">{post.description}</p>
            <Link href={`/zh/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">阅读更多 →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
