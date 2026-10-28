import type { MetadataRoute } from 'next';
import { brand } from '@/lib/config';
export default function sitemap(): MetadataRoute.Sitemap { return brand.siteUrl ? ['', '/fragrances', '/fragrances/venice', '/our-story', '/contact'].map(path => ({ url: `${brand.siteUrl}${path}` })) : []; }
