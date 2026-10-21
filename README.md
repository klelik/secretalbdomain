# secretalbania.al

A single-page domain sale website. The three domains are sold together as one
bundle for one total price; offers are for the complete bundle. Vue 3 and Vite;
hosted on GitHub Pages.

## Development

Use Node 22.12+ (or a newer supported LTS).

```sh
npm ci
npm run dev
```

Copy and translations live in `src/content.ts`. The enquiry address is in
`src/views/HomeView.vue`. The form prepares a mailto draft; it does not submit
to a backend or send mail automatically.

The red eagle logo is adapted from the public-domain
[Flag of Albania SVG on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Flag_of_Albania.svg).
The flag background was removed and the eagle recoloured for this page.

## Production

```sh
npm run build
npm run preview
```

The build type-checks, builds the client, then renders the homepage into
`dist/index.html`. Page text, links and the form are available in the original
HTML without running JavaScript. Vue hydrates that content for the language
switch and enquiry draft. Do not deploy a plain `vite build` output; use the
project build command so prerendering runs.

Pushes to `main` deploy through `.github/workflows/deploy.yml`.
`public/CNAME` preserves the custom domain in the build output.

Unknown paths use `public/404.html` to immediately redirect visitors to the
homepage, preserving query parameters and the fragment. A meta refresh and
homepage link provide fallbacks when JavaScript is unavailable. GitHub Pages
still responds with HTTP 404 for a missing path before the browser navigates
home; this is a browser redirect, not a server-side 301. The app also normalizes
non-root paths to `/` when served by a development or SPA fallback server.

## Search indexing

- One canonical page: `https://secretalbania.al/`.
- `public/robots.txt` allows crawling and points to the single-URL sitemap.
- `public/sitemap.xml` includes only the homepage.
- Title, description, canonical, index directive, WebPage JSON-LD and social
  metadata are in the initial HTML.
- The language switch changes the same homepage. Its query variant uses the
  same canonical; no extra language pages or hreflang targets are advertised.
- The share image is `public/domain-og.png`; its editable source is the SVG
  beside it.

After deployment, use the owner's Google Search Console account for the
`secretalbania.al` property. Submit `https://secretalbania.al/sitemap.xml`,
inspect `https://secretalbania.al/`, run the live test, then request indexing.
An existing Google site-verification TXT record is present in DNS; do not
replace it without checking the account that owns the property. Search
Console access is needed to identify the exact reason for exclusion.

GitHub Pages HTTPS enforcement was enabled during this update. Verify that
HTTP redirects to HTTPS after edge caches refresh. Search engines decide
whether and when to index; these changes do not guarantee inclusion.
