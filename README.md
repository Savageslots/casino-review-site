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

The build produces complete HTML for all eighteen language routes, plus `404.html`, `robots.txt` and `sitemap.xml`. Each route has one title, description, canonical, OpenGraph/Twitter metadata and JSON-LD. Structured data deliberately excludes unverified aggregate ratings and claims of firsthand testing.

Default builds are **noindex** and generate an empty sitemap with `Disallow: /`. This is intentional until the editorial and deployment blockers in `RELEASE_STATUS.md` are resolved.

## Cloudflare Pages

Existing project: `casino-review-site`, GitHub `Savageslots/casino-review-site`, production branch `main`. DNS, custom domain and TLS are configured. Build command: `npm run build`; output directory: `dist`; root directory: repository root. The root `functions/` directory must also be deployed. A static-assets-only upload omits the preview authentication middleware.

Current settings for both production and preview (keep private until explicitly authorized):

| Variable | Value | Purpose |
| --- | --- | --- |
| `NODE_VERSION` | `22.16.0` or supported newer version | Build runtime |
| `VITE_SITE_URL` | `https://casinoproscons.com` | Canonical origin, also available to middleware |
| `VITE_SITE_INDEXABLE` | `false` | Noindex and empty sitemap |
| `SITE_PUBLIC` | `false` | Password required on every route |

For preview environments set `VITE_SITE_INDEXABLE=false` and `SITE_PUBLIC=false`. Configure `STAGING_USER` and `STAGING_PASSWORD` as Cloudflare secrets. Do not prefix secrets with `VITE_`; those values are bundled into browser JavaScript. Missing preview credentials return 503, incorrect credentials return 401. Preview responses are `noindex` and `private, no-store`. Never reuse the credentials previously committed to this public repository.

Connect the custom domain in the existing Pages project, verify its DNS and certificate, and configure HTTP/www redirects to the canonical HTTPS origin. The `.pages.dev` hostname remains protected even when production is public. Do not add an SPA wildcard redirect: prerendered pages and the real 404 document should be served directly. Cloudflare serves `.html` paths at extensionless URLs.

After deployment verify anonymous HTTP responses for all routes, a nonexistent route (404), robots, sitemap, images, redirects, TLS and preview authentication. Submit the sitemap to the owner's verified Google Search Console property only after the live checks pass.

## Data and links

- `src/data/casinosData.js`: single shared record per casino. `casinoLink` is intentionally empty until affiliate agreements are signed; this does not block launching the site. Later enter the approved HTTPS affiliate URL for the intended market.
- `src/data/rankings.js`: shared six-brand order from the approved Znaki upper table. This is not a numeric rating sort.
- `src/data/site.js`: shared route metadata and canonical origin.
- When no affiliate URL exists, CTA says “Ler análise” and links internally. Outbound affiliate links use `sponsored nofollow noopener noreferrer`.
- Slota, Leon, Ginja, Fairpari, DBbet and Spinzen use neutral text wordmarks pending approved official logos.

Content is available in pt-PT at existing URLs and English under `/en`. The header switch preserves the current page; navigation stays in that language. Each version is prerendered with a self-canonical, reciprocal `pt-PT`/`en`/`x-default` alternates, localized metadata and social image. Both languages continue to cover Portugal, not a new gambling market. No automatic IP/browser-language redirects or language cookies are used. Localized 404 documents are served by Cloudflare’s closest-404 behavior. Research, source snapshots, score methodology and limitations: [Portugal research](docs/portugal-research.md). Editing `sources` updates the score in cards and reviews together.

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

Browser checks cover eighteen routes at 320, 390, 768 and 1440 px, missing images, horizontal overflow, console errors and keyboard accordion interaction. Lighthouse HTML/JSON reports and screenshots are written to ignored `artifacts/`. `desktop-check.mjs` compares key desktop style properties against an original checkout served on port 5175; it is not a pixel-identical content comparison. Updated labels, shared data and fallback images are intentional content changes.

Image derivatives are committed in `public/`. To regenerate from originals run `node scripts/prepare-images.mjs`.

Implementation references: [Cloudflare static routing](https://developers.cloudflare.com/pages/configuration/serving-pages/), [Cloudflare environment bindings](https://developers.cloudflare.com/pages/functions/bindings/), [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
