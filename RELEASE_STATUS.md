# Release status — 26 September 2026

Technical changes are prepared locally on `codex/seo-release-readiness`. Nothing has been deployed or pushed to the production branch. Public launch is **not complete**.

## Completed

- Central SEO component for all nine routes: unique titles/descriptions, production-domain canonicals, OpenGraph, Twitter cards, WebSite/Organization/WebPage, breadcrumbs and ranking ItemList JSON-LD.
- Prerendered HTML with content available without JavaScript; real Cloudflare 404 document; robots and sitemap generated from the same route registry.
- Separate configurable production indexing and preview authentication. Removed committed credentials and the incorrect Authorization response header. Preview secrets come from Cloudflare bindings. Middleware preserves downstream bodies, status codes and headers.
- Shared casino data, with independent home/general/bonus ordering. RoyalSea is included in the general list. Existing score disagreements now resolve to the shared record; those scores still require editorial verification.
- Working text fallback images for four missing logos, WebP assets, social card and favicon. Hero image reduced from roughly 2.2 MB to 20 KB.
- Mobile header wrapping, centered card images, responsive fact/feedback grids, keyboard-operated accordions, matching accessible labels, main landmarks and improved mobile contrast.
- Removed repeated per-card CSS from the generated HTML; fixed React 18 style hydration escaping.
- Existing desktop style definitions retained. Content corrections (headings, branding, CTA labels, shared descriptions and logo fallbacks) can change text wrapping; this is not a pixel-identical content snapshot.
- Updated vulnerable dependencies; npm audit reported zero known vulnerabilities after updates.
- Removed 2,319 tracked node_modules files from the Git index; packages remain installed locally. Added build documentation, lockfile updates, Node version guidance and a CI build/test workflow.

## Verification

- Preview and indexable builds pass.
- 16 Node tests pass: per-route rendered content, unique metadata, image existence, JSON-LD, robots/sitemap modes, preview authentication, malformed credentials and downstream-response preservation.
- 36 Chrome route/viewport checks pass (9 routes × 320, 390, 768, 1440 px): no missing images, overflow or browser errors; keyboard toggles work.
- Key desktop style properties compared against the original checkout on Home, Casinos, Bonuses, SG and RoyalSea; matched. This checks styles, not exact screenshot pixels.
- Local mobile Lighthouse audit of Home and SG review: 100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO in the recorded run. Indexing was temporarily enabled for that local audit, then disabled again. Scores are local lab results, not production measurements or search-ranking guarantees.
- Local reports: `artifacts/lighthouse-home.html`, `artifacts/lighthouse-sg-review.html`, `artifacts/browser-results.json`, `artifacts/desktop-results.json`.

## Required to finish public launch

1. Connect Cloudflare and identify the existing Pages project. GitHub access to `Savageslots/casino-review-site` is verified; Cloudflare access is not yet confirmed.
2. Verify domain DNS, Pages custom-domain association, HTTPS certificate and HTTP/www redirects. `casinoproscons.com` could not be resolved from the execution environment; this does not establish the cause or prove global DNS failure.
3. Confirm target countries and language. Current content is English; some reviews make Germany-specific claims that cannot be reused indiscriminately.
4. Affiliate links are deliberately deferred by the owner and do not block launch. All casinoLink fields are empty; CTA buttons open internal reviews until agreements are signed.
5. Complete the editorial fact check: current bonus terms, wagering basis (bonus vs deposit + bonus), legal operator/licensing, payment rules, and allowed markets. Example: SG's shared data says “35x bonus” while its review says “35x deposit + bonus”. Do not select one without current official terms for the target market.
6. Replace unsupported “Average user rating” numbers and “recurring player sentiment” claims with attributable evidence or clearly mark/remove them. Home currently claims hands-on testing and regular updates; the repository contains no evidence supporting those claims. JSON-LD does not amplify them as verified reviews.
7. Obtain approved logo assets to replace text fallbacks. Add appropriate affiliate disclosure, responsible-gambling information, editorial ownership/contact information and privacy content based on the actual market and services used.
8. Set fresh preview secrets, verify runtime and build variables, deploy a preview and validate actual Cloudflare routing/authentication. Only then publish the reviewed release, enable production indexing, run live checks and submit the sitemap in the owner's verified Search Console property.

The original supplied status document has not been rewritten. `README.md` contains concrete build and Cloudflare settings. Default builds remain noindex while these blockers are unresolved.
