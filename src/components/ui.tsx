import Image from 'next/image';
import Link from 'next/link';
import { brand, venice, type Product, type ProductImage } from '@/lib/config';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '⟶'}</span>;
}
export function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link className={`text-link ${light ? 'light' : ''}`} href={href}>{children}<Arrow /></Link>;
}
export function BrandMark({ footer = false }: { footer?: boolean }) {
  return <Link href="/" aria-label="HATELIER home" className={`brand-mark ${footer ? 'footer-mark' : ''}`}>
    {brand.logo ? <Image src={brand.logo} alt="HATELIER" width={180} height={64} /> : <span className="brand-name">HATELIER</span>}
  </Link>;
}
export function ProductMedia({ image, className = '', priority = false, caption = true }: { image?: ProductImage; className?: string; priority?: boolean; caption?: boolean }) {
  return <div className={`product-media ${className}`}>
    {image ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 55vw" priority={priority} className="product-photo" /> :
      <div className="media-pending"><span className="eyebrow">HATELIER · No. 01</span><span className="pending-name">VENICE</span><span className="pending-rule" /><span className="pending-type">Extrait de Parfum</span><span className="pending-notice">Product photography awaiting supplied assets</span></div>}
    {caption && image && <span className="media-caption">VENICE — THE SIGNATURE FRAGRANCE</span>}
  </div>;
}
export function Notes({ compact = false, product = venice }: { compact?: boolean; product?: Product }) {
  return <div className={`notes-grid ${compact ? 'compact' : ''}`}>{product.notes.map((note, i) => <div className="note" key={note.title}>
    <span className="note-number">0{i + 1}</span><h3>{note.title}</h3><p className="note-character">{note.character}</p><ul>{note.items.map(item => <li key={item}>{item}</li>)}</ul>
  </div>)}</div>;
}
export function Closing() {
  return <section className="closing section-pad"><span className="eyebrow">A personal discovery</span><h2>Some things are better<br />experienced.</h2><TextLink href="/fragrances/venice">Meet VENICE</TextLink></section>;
}
