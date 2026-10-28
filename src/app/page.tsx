import Link from 'next/link';
import { ProductMedia, Notes, Closing, TextLink, Arrow } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { venice } from '@/lib/config';
export default function Home() {
  return <>
    <section className="hero"><div className="hero-copy"><span className="eyebrow">The first expression · HATELIER</span><h1>VENICE<span className="hero-subtitle">A Scent of<br /><em>Quiet Elegance</em></span></h1><p>A fragrance that speaks softly<br className="desktop-break" /> and leaves a lasting impression.</p><Link className="button" href="/fragrances/venice">Discover the fragrance <Arrow /></Link><span className="hero-foot">Extrait de Parfum <span /> 50 ml</span></div><ProductMedia image={venice.images[0]} priority className="hero-media" /><div className="hero-bottom"><span>01 / The signature</span><span>SCROLL TO DISCOVER ↓</span></div></section>
    <Reveal><section className="introduction section-pad"><span className="eyebrow">The world of HATELIER</span><h2>Elegance is not always seen.<br /><em>Sometimes, it is remembered.</em></h2><p>We believe fragrance is a form of personal expression.<br className="desktop-break" /> An invisible detail, chosen for yourself.<br className="desktop-break" /> A quiet part of who you are.</p><TextLink href="/our-story">Our philosophy</TextLink></section></Reveal>
    <section className="feature section-pad"><ProductMedia image={venice.images[1] ?? venice.images[0]} className="feature-media" /><Reveal className="feature-copy"><span className="eyebrow">Introducing our signature fragrance</span><h2>VENICE</h2><span className="product-meta">Extrait de Parfum <span> / </span> 50 ml</span><p>{venice.description}</p><TextLink href="/fragrances/venice">Explore VENICE</TextLink></Reveal></section>
    <Reveal><section className="composition section-pad"><div className="section-heading"><div><span className="eyebrow">The composition</span><h2>A story in three movements.</h2></div><p>Bright beginnings. An aromatic heart.<br />A warm, lingering impression.</p></div><Notes /></section></Reveal>
    <section className="philosophy section-pad"><span className="eyebrow">Our point of view</span><h2>Presence.<br /><em>Without pretence.</em></h2><div className="philosophy-bottom"><span className="small-rule" /><p>Not every expression needs to be loud.<br />A familiar scent. An unhurried moment.<br />The confidence of feeling like yourself.</p><TextLink href="/our-story">The HATELIER story</TextLink></div></section>
    <Closing />
  </>;
}
