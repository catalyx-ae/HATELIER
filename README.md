# HATELIER

Next.js App Router, TypeScript, Tailwind CSS 4 and restrained Motion reveals. Local, self-hosted Cormorant Garamond and Manrope fonts; no third-party font requests.

## Development

Requires Node.js 20.9+ (validated on Node 24).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Use the existing checkout in cloud tasks. Each task is isolated; no additional Git worktree is needed.

## Brand and product configuration

Edit `src/lib/config.ts`. The single product is VENICE, Extrait de Parfum, 50 ml. Notes come from the supplied brief. Product data drives collection links and product routes automatically; add future fragrances to the products array. Review product-specific editorial copy when adding a release.

**The referenced logo PDF and photographs were not available in the conversation or filesystem at implementation time.** The site therefore uses clearly labelled photo spaces and a plain text brand name, not an invented monogram or substitute bottle. The visual asset integration and favicon remain pending receipt of the originals.

1. Inspect the supplied logo PDF and product images.
2. Export the complete official logo and monogram as SVG or transparent PNG, preserving the original artwork and proportions. Place under `public/brand/` and set `brand.logo` and `brand.monogram`. The latter supplies favicon metadata. Do not approximate the monogram with text.
3. Place product images under `public/images/venice/`; set `venice.images` with local `src`, accurate `alt`, and original `width`/`height`. Next Image optimizes delivery. The first image powers the hero and collection, the second the feature and third the story. Gallery thumbnails appear when multiple photos exist.
4. Set verified `email`, international `whatsapp` digits and/or full HTTPS `instagram` URL. Channels remain absent until configured. Product enquiries prefer WhatsApp, then email, then Instagram. No nonfunctional form is presented.
5. Keep `commerce` null until a real price, ISO currency, availability and provider-hosted HTTPS checkout URL exist. Setting these enables a purchase link to that provider; this site does not collect payment, create orders, reserve stock or implement a cart. A shopping bag should only be added with an actual cart provider and server-verified checkout integration.
6. Set `NEXT_PUBLIC_SITE_URL` in deployment and `brand.socialImage` to an approved local image. This enables absolute metadata and sitemap URLs. No fictitious domain or image is generated.

No prices, stock quantities, shipping terms, production history, founder details or contact identities have been invented. Confirm approved legal/privacy disclosures before adding analytics, forms, payment or tracking.

## Browser validation

```sh
# Uses /usr/bin/chromium in this cloud environment.
# Else: npx playwright install chromium, then set
# PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH to the installed browser path.
npm run test:e2e
```

Playwright starts a dev server on port 3000 if none exists. The suite covers page routes, internal links, responsive overflow, mobile menu focus/keyboard behavior, product details and the honest unconfigured contact/purchase state. Gallery selection with real photographs and configured commerce still require validation after the missing assets and business details are supplied.

Layouts use logical inline properties where possible; route/copy localization and an Arabic font still need to be added before enabling RTL.
