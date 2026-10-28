'use client';
import { useState } from 'react';
import Image from 'next/image';
import { type ProductImage } from '@/lib/config';
import { ProductMedia } from './ui';
export function Gallery({ images }: { images: ProductImage[] }) {
  const [selected, setSelected] = useState(0);
  return <div className="gallery"><div aria-live="polite" aria-atomic="true"><ProductMedia image={images[selected]} priority caption={false} className="gallery-main" /></div>{images.length > 1 && <div className="gallery-thumbs" aria-label="Product photographs">{images.map((image, i) => <button key={image.src} type="button" onClick={() => setSelected(i)} aria-label={`View photograph ${i + 1}: ${image.alt}`} aria-pressed={selected === i}><Image src={image.src} alt="" width={110} height={130} /></button>)}</div>}</div>;
}
