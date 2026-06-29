import Link from "next/link";
import posts from "@/content/blog/posts.json";

type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

const toolLinks = [
  { href: "/compress-pdf/", title: "Compress PDF", match: ["compress", "size", "email", "gmail", "outlook", "telegram", "whatsapp", "scanned"] },
  { href: "/merge-pdf/", title: "Merge PDF", match: ["merge", "combine", "multiple", "documents"] },
  { href: "/split-pdf/", title: "Split PDF", match: ["split", "extract", "pages", "large", "limit"] },
  { href: "/pdf-to-jpg/", title: "PDF to JPG", match: ["jpg", "image", "convert", "png"] },
  { href: "/image-to-pdf/", title: "Image to PDF", match: ["image", "jpg", "scan", "iphone"] },
  { href: "/pdf-encrypt/", title: "PDF Encrypt", match: ["password", "protect", "security", "encrypt", "signature"] },
  { href: "/pdf-decrypt/", title: "PDF Decrypt", match: ["remove password", "decrypt", "unlock"] },
  { href: "/rotate-pdf/", title: "Rotate PDF", match: ["rotate", "reorder", "page"] },
];

function scorePost(current: Post, candidate: Post): number {
  if (current.slug === candidate.slug) return -100;
  const haystack = `${candidate.slug} ${candidate.title} ${candidate.description} ${candidate.category}`.toLowerCase();
  const words = `${current.slug} ${current.title} ${current.description} ${current.category}`
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3 && !["guide", "free", "online", "pdf", "files", "file", "2026"].includes(word));
  let score = current.category === candidate.category ? 3 : 0;
  for (const word of new Set(words)) {
    if (haystack.includes(word)) score += 1;
  }
  return score;
}

function pickTools(post: Post) {
  const text = `${post.slug} ${post.title} ${post.description}`.toLowerCase();
  const matched = toolLinks.filter((tool) => tool.match.some((term) => text.includes(term)));
  const fallback = toolLinks.slice(0, 4);
  return (matched.length ? matched : fallback).slice(0, 4);
}

export default function PdfInternalLinks({ slug }: { slug: string }) {
  const allPosts = posts as Post[];
  const current = allPosts.find((post) => post.slug === slug);
  if (!current) return null;

  const related = allPosts
    .map((post) => ({ post, score: scorePost(current, post) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.post);

  const tools = pickTools(current);

  return (
    <aside className="mt-14 border-t border-gray-200 pt-8">
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Use the right PixelPDF tool</h2>
        <p className="text-gray-700 mb-4">
          If this guide matches your document problem, these free browser-based tools are the fastest next step.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="rounded-xl bg-white border border-blue-100 px-4 py-3 font-medium text-blue-700 hover:border-blue-400 hover:shadow-sm transition-all">
              {tool.title} →
            </Link>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related PDF guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {related.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                <span className="text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-1">{post.category}</span>
                <h3 className="font-semibold text-gray-900 mt-2 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
