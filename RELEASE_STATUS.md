# PT / EN localization — 27 September 2026

- Header PT/EN switch links to the equivalent page; navigation and reloads retain the language through URLs.
- Original Portuguese URLs preserved; English at `/en`, `/en/casinos`, `/en/bonuses`, and six `/en/casinos/{slug}` reviews.
- Complete English UI and review text, including source notes, facts, accessibility labels, dates, scores, footer and 404. Evidence, scores and empty affiliate fields remain shared.
- 18 prerendered pages; self-canonicals and reciprocal pt-PT/en/x-default alternates; localized HTML language, JSON-LD, metadata and social images. When publicly enabled later, sitemap includes both languages.
- 31 tests passed in both noindex and indexable local builds. Local build restored to noindex. 72 route/viewport checks plus per-page language-switch, reload and internal-link checks passed.
- Cloudflare production and preview settings reconfirmed private/noindex with existing credentials. Localization deployment pending live verification.

---

# CasinoProsCons — Portugal update, 26 September 2026

## Access requirement

The owner requires the site to remain private. Cloudflare project `casino-review-site` has `SITE_PUBLIC=false` and `VITE_SITE_INDEXABLE=false` in production and preview; both environments have configured authentication secrets (checked before deployment). Do not enable public access or indexing without an explicit owner request. Affiliate URLs remain empty. Credentials are in ignored `.dev.vars`, never in Git or browser bundles.

## Portugal implementation

- Replaced all six previous casinos with Slota, Leon, Ginja, Fairpari, DBbet and Spinzen, in the approved reference-table order. All six appear on Home, Casinos and Bonuses.
- Nine prerendered routes in pt-PT, including localized metadata, social card, navigation, calls to action, 404 and structured-data language.
- Shared review template preserves the original visual layout and the review blocks: introduction, quick facts, pros/cons, strengths, games/platform, bonuses, limitations, Street Voice and verdict.
- Real platform scores, review counts, source links and consultation date. Slota has an explicitly defined mean of normalized platform scores. Single-source scores are labelled. DBbet's unconfirmed domains remain separate. Editorial scores are excluded. No fabricated hands-on testing or payout guarantees.
- Source-based licensing status: none of the six brand names was found in the consulted SRIJ register. These are comparison articles, not a list of Portuguese-authorized operators.
- All six affiliate fields are empty; buttons open internal reviews. Original retired review URLs return 404 rather than redirecting to unrelated brands.
- Neutral text wordmarks used pending approved official artwork. Research notes and outstanding factual limitations: `docs/portugal-research.md`.

## Verification completed locally

- Preview build produces 9 pages and a 404, with noindex, Disallow and an empty sitemap.
- 19 Node tests pass: rendered pages, SEO, assets, authentication, source/data integrity, score normalization, retired routes and review block preservation.
- 36 Chrome checks pass: 9 routes × 320/390/768/1440 px, loaded images, overflow, console errors, keyboard accordion and SPA metadata.
- Desktop style comparison passes against the original Home/Casinos/Bonuses/SG review (Slota replaces SG). This checks authored style properties, not identical text wrapping.
- Screenshots and reports are in ignored `artifacts/`. Previous Lighthouse scores predate this content update and are not claimed for it.

## Deployment

Deployed to the existing Git-connected Cloudflare Pages production branch `main`, retaining password protection. Code commit: `a43aa6075e4f3b7d7d06418253b708edb791f262`. Deployment: `f83bfd7a-ed08-4fdc-b22f-890a1c5aa7dc`, successful at 18:58 UTC on 26 September 2026.

Live check on https://casinoproscons.com passed: anonymous 401; all nine authenticated routes 200 with rendered content and canonical metadata; noindex response headers; real 404; robots Disallow; empty sitemap; image responses. Existing credentials unchanged.

## Remaining before a public commercial launch

Confirm official country-specific bonus terms and contracted operator domains; obtain approved brand artwork; add affiliate URLs only after agreements. Public launch/indexing is deliberately deferred by the owner. The supplied historical project document is preserved unchanged.
