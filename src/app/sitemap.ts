import { MetadataRoute } from 'next'
import posts from '@/content/blog/posts.json'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixelpdf.win'
  
  // Main pages (all with trailing slash)
  const mainPages = [
    '/',
    '/pdf-to-jpg/',
    '/image-to-pdf/',
    '/merge-pdf/',
    '/split-pdf/',
    '/compress-pdf/',
    '/rotate-pdf/',
    '/pdf-encrypt/',
    '/pdf-decrypt/',
    '/blog/',
    '/about/',
    '/privacy/',
    '/terms/',
    '/cookie-policy/',
  ]
  
  // Blog articles are generated from the canonical content file so every post is included.
  const blogArticles = posts.map((post) => `/blog/${post.slug}/`)
  
  const allPaths = [...mainPages, ...blogArticles]
  
  return allPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : path.startsWith('/blog') ? 0.8 : 0.9,
  }))
}
