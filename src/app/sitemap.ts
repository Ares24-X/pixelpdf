import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixelpdf.win'
  
  // Main pages
  const mainPages = [
    '',
    '/pdf-to-jpg',
    '/image-to-pdf',
    '/merge-pdf',
    '/split-pdf',
    '/compress-pdf',
    '/rotate-pdf',
    '/pdf-encrypt',
    '/pdf-decrypt',
    '/blog',
    '/about',
    '/privacy',
    '/terms',
    '/cookie-policy',
  ]
  
  // Blog articles (English)
  const blogArticles = [
    '/blog/compress-pdf-before-email',
    '/blog/does-compressing-pdf-reduce-quality',
    '/blog/extract-pages-from-pdf',
    '/blog/how-to-rotate-pdf',
    '/blog/image-to-pdf-quick-guide',
    '/blog/jpg-to-pdf-guide',
    '/blog/merge-pdf-complete-guide',
    '/blog/password-protect-pdf-guide',
    '/blog/pdf-encrypt-security-guide',
    '/blog/pdf-file-too-large-solution',
    '/blog/pdf-to-jpg-guide',
    '/blog/remove-pdf-password',
    '/blog/split-pdf-online-guide',
    '/blog/combine-images-into-pdf',
  ]
  
  const allPaths = [...mainPages, ...blogArticles]
  
  return allPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : path.startsWith('/blog') ? 0.8 : 0.9,
  }))
}
