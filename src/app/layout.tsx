import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-500.css';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { brand } from '@/lib/config';
export const metadata: Metadata = {
  ...(brand.siteUrl ? { metadataBase: new URL(brand.siteUrl) } : {}),
  title: { default: 'HATELIER — Fragrance. A personal expression.', template: '%s | HATELIER' },
  description: 'Discover VENICE by HATELIER. An extrait de parfum of citrus, black tea and warm woods. A scent of quiet elegance.',
  openGraph: { type: 'website', siteName: 'HATELIER', locale: 'en', title: 'HATELIER — A Scent of Quiet Elegance', description: 'Meet VENICE. The signature fragrance by HATELIER.', ...(brand.socialImage ? { images: [brand.socialImage] } : {}) },
  twitter: { card: brand.socialImage ? 'summary_large_image' : 'summary' },
  ...(brand.monogram ? { icons: { icon: brand.monogram, apple: brand.monogram } } : {}),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" data-scroll-behavior="smooth"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
