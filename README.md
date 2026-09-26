# CasinoProsCons

React + Vite casino comparison site. Production origin: `https://casinoproscons.com`.

## Local development

Use Node 22.12+ (or Node 24). Dependencies are installed from the lockfile, not committed to Git.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview -- --host 127.0.0.1 --port 4173
```

The build produces complete HTML for all nine routes, plus `404.html`, `robots.txt` and `sitemap.xml`. Each route has one title, description, canonical, OpenGraph/Twitter metadata and JSON-LD. Structured data deliberately excludes unverified aggregate ratings and claims of firsthand testing.

Default builds are **noindex** and generate an empty sitemap with `Disallow: /`. This is intentional until the editorial and deployment blockers in `RELEASE_STATUS.md` are resolved.

## Cloudflare Pages

Existing project name and account must be verified before deployment. Build command: `npm run build`; output directory: `dist`; root directory: repository root. The root `functions/` directory must also be deployed. A static-assets-only upload omits the preview authentication middleware.

Production settings after content approval:

| Variable | Value | Purpose |
| --- | --- | --- |
| `NODE_VERSION` | `22.16.0` or supported newer version | Build runtime |
| `VITE_SITE_URL` | `https://casinoproscons.com` | Canonical origin, also available to middleware |
| `VITE_SITE_INDEXABLE` | `true` | Public robots metadata and sitemap; requires rebuild |
| `SITE_PUBLIC` | `true` | Runtime public access, only on the exact canonical origin |

For preview environments set `VITE_SITE_INDEXABLE=false` and `SITE_PUBLIC=false`. Configure `STAGING_USER` and `STAGING_PASSWORD` as Cloudflare secrets. Do not prefix secrets with `VITE_`; those values are bundled into browser JavaScript. Missing preview credentials return 503, incorrect credentials return 401. Preview responses are `noindex` and `private, no-store`. Never reuse the credentials previously committed to this public repository.

Connect the custom domain in the existing Pages project, verify its DNS and certificate, and configure HTTP/www redirects to the canonical HTTPS origin. The `.pages.dev` hostname remains protected even when production is public. Do not add an SPA wildcard redirect: prerendered pages and the real 404 document should be served directly. Cloudflare serves `.html` paths at extensionless URLs.

After deployment verify anonymous HTTP responses for all routes, a nonexistent route (404), robots, sitemap, images, redirects, TLS and preview authentication. Submit the sitemap to the owner's verified Google Search Console property only after the live checks pass.

## Data and links

- `src/data/casinosData.js`: single shared record per casino. `casinoLink` is intentionally empty until affiliate agreements are signed; this does not block launching the site. Later enter the approved HTTPS affiliate URL for the intended market.
- `src/data/rankings.js`: independent Home, Casinos and Bonuses ordering. Order is editorial, not a numeric rating sort.
- `src/data/site.js`: shared route metadata and canonical origin.
- When no affiliate URL exists, CTA says “Read Review” and links internally. Outbound affiliate links use `sponsored nofollow noopener noreferrer`.
- SG, RoyalSea, Kingmaker and Boomerang use explicit text fallback artwork pending approved official logos.

## Verification

```sh
npm run build
npm test
# With preview running on port 4173 and Google Chrome installed:
node scripts/browser-check.mjs
# Temporarily enable indexing only for a local production-mode SEO audit:
VITE_SITE_INDEXABLE=true npm run build
node scripts/audit.mjs
# Restore the safe preview build after auditing:
npm run build
```

Browser checks cover nine routes at 320, 390, 768 and 1440 px, missing images, horizontal overflow, console errors and keyboard accordion interaction. Lighthouse HTML/JSON reports and screenshots are written to ignored `artifacts/`. `desktop-check.mjs` compares key desktop style properties against an original checkout served on port 5175; it is not a pixel-identical content comparison. Updated labels, shared data and fallback images are intentional content changes.

Image derivatives are committed in `public/`. To regenerate from originals run `node scripts/prepare-images.mjs`.

Implementation references: [Cloudflare static routing](https://developers.cloudflare.com/pages/configuration/serving-pages/), [Cloudflare environment bindings](https://developers.cloudflare.com/pages/functions/bindings/), [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
