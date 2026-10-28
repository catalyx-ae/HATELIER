export type ProductImage = { src: string; alt: string; width: number; height: number };
export type Product = {
  slug: string; name: string; concentration: string; size: string;
  description: string; images: ProductImage[];
  notes: { title: string; character: string; items: string[] }[];
  commerce: { price: number; currency: string; available: boolean; checkoutUrl: string } | null;
};
// Enter only verified brand information. Use local image paths under /public.
export const brand = {
  name: 'HATELIER',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || null,
  logo: null as string | null, // e.g. /brand/hatelier.svg — official complete logo
  monogram: null as string | null, // e.g. /brand/monogram.svg — official artwork
  socialImage: null as string | null,
  email: null as string | null,
  whatsapp: null as string | null, // international digits, no + or spaces
  instagram: null as string | null, // full https://www.instagram.com/... URL
};
export const venice: Product = {
  slug: 'venice', name: 'VENICE', concentration: 'Extrait de Parfum', size: '50 ml',
  description: 'A bright opening of citrus and ginger unfolds into black tea and aromatic herbs. Woods, amberwood and musk bring a warm, quiet depth.',
  images: [], // Add the supplied photographs here; the first is the hero image.
  notes: [
    { title: 'Top notes', character: 'The first impression', items: ['Lemon', 'Bergamot', 'Ginger', 'Crisp Apple'] },
    { title: 'Heart notes', character: 'The unfolding', items: ['Black Tea', 'Neroli', 'Sage', 'Lavender', 'Aromatic Herbs'] },
    { title: 'Base notes', character: 'The lasting memory', items: ['Ambroxan', 'Musk', 'Cedarwood', 'Amberwood'] },
  ],
  commerce: null, // Enable only with verified price, availability and hosted checkout URL.
};
export const products: Product[] = [venice];
export function inquiryHref(product?: Product) {
  const message = product ? `Hello HATELIER, I would like to enquire about ${product.name}, ${product.size}.` : 'Hello HATELIER, I would like to know more.';
  if (brand.whatsapp && /^\d{7,15}$/.test(brand.whatsapp)) return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
  if (brand.email) return `mailto:${brand.email}?subject=${encodeURIComponent(product ? `Enquiry about ${product.name}` : 'HATELIER enquiry')}&body=${encodeURIComponent(message)}`;
  if (brand.instagram) return brand.instagram;
  return null;
}
