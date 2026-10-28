import type { Metadata } from 'next';
import Link from 'next/link';
import { ProductMedia, Arrow } from '@/components/ui';
import { products } from '@/lib/config';
export const metadata: Metadata = { title: 'Fragrances', description: 'Explore the HATELIER collection, beginning with VENICE, our signature 50 ml extrait de parfum.' };
export default function Fragrances() {
  return <><section className="page-intro section-pad"><span className="eyebrow">The collection</span><h1>A personal<br /><em>signature.</em></h1><p>One fragrance. A world of feeling.<br />Discover the first expression of HATELIER.</p></section><section className="collection section-pad" aria-label="Fragrance collection">{products.map((product, i) => <Link className="collection-card" key={product.slug} href={`/fragrances/${product.slug}`}><ProductMedia image={product.images[0]} priority caption={false} /><div className="collection-info"><div><span className="eyebrow">0{i + 1} · The signature fragrance</span><h2>{product.name}</h2><p>{product.concentration} <span> / </span> {product.size}</p></div><span className="circle-arrow"><Arrow diagonal /></span></div></Link>)}</section><div className="collection-end"><span className="small-rule" /><p>Thoughtfully composed. Individually yours.</p></div></>;
}
