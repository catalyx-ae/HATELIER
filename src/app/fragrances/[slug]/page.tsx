import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, inquiryHref } from '@/lib/config';
import { Gallery } from '@/components/gallery';
import { Notes, Arrow, TextLink } from '@/components/ui';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  return product ? { title: `${product.name} — ${product.concentration}`, description: product.description } : {};
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const venice = products.find(p => p.slug === slug);
  if (!venice) notFound();
  const inquiry = inquiryHref(venice);
  const commerce = venice.commerce;
  const checkout = commerce?.available && /^https:\/\//.test(commerce.checkoutUrl) ? commerce.checkoutUrl : null;
  return <><div className="breadcrumb"><Link href="/fragrances">Fragrances</Link><span aria-hidden="true">/</span><span>{venice.name}</span></div><section className="product-detail"><Gallery images={venice.images} /><div className="product-copy"><span className="eyebrow">The signature fragrance · No. 01</span><h1>{venice.name}</h1><p className="product-tagline">{venice.name === 'VENICE' ? 'A Scent of Quiet Elegance' : 'A personal expression'}</p><div className="product-meta">{venice.concentration}<span> / </span>{venice.size}</div><p className="product-description">{venice.description}</p><div className="size-box"><span>Size</span><span>{venice.size}</span></div>{commerce && <p className="price">{new Intl.NumberFormat('en', { style: 'currency', currency: commerce.currency }).format(commerce.price)}</p>}{checkout ? <a className="button" href={checkout}>Purchase {venice.name} <Arrow diagonal /></a> : inquiry ? <a className="button" href={inquiry}>Enquire about {venice.name} <Arrow diagonal /></a> : <div className="availability-note"><p>Purchase enquiries will open when our contact details are available.</p><TextLink href="#composition">Discover the composition</TextLink></div>}<div className="product-accordions"><details open><summary>The fragrance</summary><p>{venice.description}</p></details><details><summary>The details</summary><dl><div><dt>Concentration</dt><dd>{venice.concentration}</dd></div><div><dt>Volume</dt><dd>{venice.size}</dd></div><div><dt>Fragrance</dt><dd>{venice.name}</dd></div></dl></details></div></div></section><section id="composition" className="composition product-composition section-pad"><div className="section-heading"><div><span className="eyebrow">Inside {venice.name}</span><h2>The art of unfolding.</h2></div><p>A composition to discover<br />one note at a time.</p></div><Notes product={venice} /></section><section className="product-outro section-pad"><span className="eyebrow">The HATELIER perspective</span><h2>A fragrance should feel<br /><em>like a part of you.</em></h2><TextLink href="/our-story">Discover our story</TextLink></section></>;
}
