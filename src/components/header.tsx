'use client';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BrandMark } from './ui';
const links = [{ href: '/', label: 'Home' }, { href: '/fragrances', label: 'Fragrances' }, { href: '/our-story', label: 'Our Story' }, { href: '/contact', label: 'Contact' }];
const subscribe = () => () => {};
export function Header() {
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (e.key === 'Tab') {
        const items = [toggle.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[];
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    const mq = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener('change', closeOnDesktop);
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); mq.removeEventListener('change', closeOnDesktop); };
  }, [open]);
  const nav = (mobile = false) => links.map(({ href, label }, i) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={(href === '/' ? path === href : path.startsWith(href)) ? 'page' : undefined}>{mobile && <span className="menu-index">0{i + 1}</span>}{label}</Link>);
  return <header className="site-header"><BrandMark /><nav className="desktop-nav" aria-label="Main navigation">{nav()}</nav><span className="header-detail">Independent fragrance house</span><button ref={toggle} disabled={!hydrated} type="button" className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}><span /><span /></button>{open && <nav ref={panel} id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{nav(true)}<span className="eyebrow">Fragrance. A personal expression.</span></nav>}</header>;
}
