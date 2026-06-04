import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/content/blog/posts.json";

export function generateStaticParams() {
  return (posts as { slug: string }[]).map(p => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default function ZhBlogPostPage({ params }: { params: { slug: string } }) {
  const post = (posts as any[]).find(p => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/zh/" className="hover:text-blue-600">首页</Link>
        <span>/</span>
        <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
        <span>/</span>
        <span className="text-slate-700">{post.title}</span>
        <span className="ml-4"><Link href={`/blog/${post.slug}`} className="text-blue-500 text-xs">🇺🇸 English</Link></span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
          <span>{post.date}</span>
          <span>|</span>
          <span>{post.category}</span>
        </div>
        <p>{post.description}</p>
        <p>本文详细介绍了{post.title}的完整操作步骤和注意事项。无论你是初学者还是有经验的使用者，都能从中获得实用的PDF操作技巧。</p>
        <h2>前提条件</h2>
        <p>在开始之前，请确保你已准备好需要处理的PDF文件。所有操作均在浏览器本地完成，无需上传到任何服务器。</p>
        <h2>操作步骤</h2>
        <p>访问我们的<a href={`/zh/${post.slug.includes("compress") ? "compress-pdf" : post.slug.includes("merge") ? "merge-pdf" : post.slug.includes("split") ? "split-pdf" : post.slug.includes("convert") || post.slug.includes("pdf-to") || post.slug.includes("jpg") ? "pdf-to-jpg" : post.slug.includes("image") || post.slug.includes("jpg-to") ? "image-to-pdf" : post.slug.includes("rotate") ? "rotate-pdf" : post.slug.includes("encrypt") ? "pdf-encrypt" : post.slug.includes("decrypt") ? "pdf-decrypt" : "pdf-to-jpg"}`}>中文版{post.slug.includes("compress") ? "压缩" : post.slug.includes("merge") ? "合并" : post.slug.includes("split") ? "拆分" : post.slug.includes("convert") || post.slug.includes("pdf-to") ? "转换" : post.slug.includes("rotate") ? "旋转" : post.slug.includes("encrypt") ? "加密" : post.slug.includes("decrypt") ? "解密" : "转换"}工具</a>开始操作。</p>
        <h2>总结</h2>
        <p>掌握{post.title}可以大大提升你的工作效率。使用我们的免费在线工具，无需安装任何软件，即刻开始处理你的PDF文件。</p>
      </article>
    </div>
  );
}
