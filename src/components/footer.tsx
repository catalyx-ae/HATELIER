import Link from 'next/link';
import { brand } from '@/lib/config';
import { BrandMark } from './ui';
export function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div><BrandMark footer /><p>Fragrance. A personal expression.</p></div><nav aria-label="Footer navigation"><Link href="/fragrances">Fragrances</Link><Link href="/our-story">Our Story</Link><Link href="/contact">Contact</Link></nav><div className="footer-contact"><span className="eyebrow">Stay in touch</span>{brand.email && <a href={`mailto:${brand.email}`}>{brand.email}</a>}{brand.instagram && <a href={brand.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>}{!brand.email && !brand.instagram && <Link href="/contact">Connect with HATELIER <span aria-hidden="true">↗</span></Link>}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HATELIER</span><span>Considered in every detail.</span><a href="#top">Back to top ↑</a></div></footer>;
}
