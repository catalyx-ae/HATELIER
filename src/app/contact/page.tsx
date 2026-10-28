import type { Metadata } from 'next';
import { brand, inquiryHref } from '@/lib/config';
import { Arrow, TextLink } from '@/components/ui';
export const metadata: Metadata = { title: 'Contact', description: 'Connect with HATELIER for fragrance questions and purchase enquiries.' };
export default function Contact() {
  const contact = inquiryHref();
  const channels = [
    ...(brand.email ? [{ name: 'Email', detail: brand.email, href: `mailto:${brand.email}` }] : []),
    ...(brand.whatsapp ? [{ name: 'WhatsApp', detail: 'Start a conversation', href: `https://wa.me/${brand.whatsapp}` }] : []),
    ...(brand.instagram ? [{ name: 'Instagram', detail: 'Find us on Instagram', href: brand.instagram }] : []),
  ];
  return <section className="contact-page section-pad"><div className="contact-heading"><span className="eyebrow">Get in touch</span><h1>A conversation<br /><em>begins here.</em></h1><p>Questions about VENICE, or simply curious about HATELIER? We look forward to hearing from you.</p><div className="contact-signature">HATELIER<span>Fragrance. A personal expression.</span></div></div><div className="contact-content"><span className="eyebrow">Customer & fragrance enquiries</span><h2>A little closer.</h2>{channels.length ? <div className="contact-channels">{channels.map(channel => <a key={channel.name} href={channel.href} target={channel.href.startsWith('https:') ? '_blank' : undefined} rel="noopener noreferrer"><div><h3>{channel.name}</h3><span>{channel.detail}</span></div><Arrow diagonal /></a>)}</div> : <div className="contact-pending"><span className="small-rule" /><p>Our direct contact channels are being prepared.</p><p>Fragrance and purchase enquiry details will be shared here as soon as they are available.</p></div>}{contact ? <a className="text-link" href={contact}>Make an enquiry <Arrow diagonal /></a> : <TextLink href="/fragrances/venice">Get to know VENICE</TextLink>}</div></section>;
}
