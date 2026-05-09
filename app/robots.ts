import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://dhunanyan.com/sitemap.xml',
    host: 'https://dhunanyan.com',
  };
}
