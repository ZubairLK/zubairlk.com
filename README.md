# zubairlk.com

Zubair Kakakhel's personal website: AI consulting, training and software development in Dubai.

The production site is plain HTML, CSS and JavaScript in `site/`. Netlify runs `node scripts/build.mjs` and publishes `dist/` from the `master` branch. The dependency-free build copies the site and inlines its CSS to avoid blocking the first paint on separate stylesheet requests. There is no framework or server dependency.

## Local preview

```sh
python -m http.server 4174 --directory site
```

Edit `site/index.html` for copy, `site/site.css` for Coral styling and `site/layout.css` for the layout. Fonts and images are hosted locally. Videos load a privacy-enhanced YouTube iframe only after pressing play.

The page uses WOFF2 fonts, with the main heading and body fonts preloaded. One Manrope variable font (the same 4.505 font version as the original files) supplies all body weights. Sized WebP copies of client logos and personal photos live in `site/assets/optimized/`; the original files are kept in `site/assets/`. Keep image dimensions in the HTML aligned with each file, and preserve the full-resolution hero portrait. To preview the production output, run `node scripts/build.mjs` and serve `dist/` instead of `site/`.

Booking opens the GST Calendly event. Both WhatsApp links open the same chat; the floating button is green with a white icon and a visible label.

The portrait has responsive AVIF copies at 800, 1120 and 1400px, with the original full-resolution WebP as a fallback. Its preload and `<source>` must use identical `srcset`/`sizes` values so the browser downloads only one candidate. The sizes account for the existing `object-fit: cover` crop and zoom. Latin font subsets retain the original glyphs and metrics; the complete fonts remain as fallbacks for other characters. Keep the preloads pointed at the subsets.

Google Analytics queues its initialization immediately. The existing Google tag loads once during the first idle period after page load (with a 1-second idle timeout), or immediately on the first pointer/keyboard interaction. This keeps its download and execution out of the initial rendering work; very short visits that leave before the tag loads may not be recorded. The tag and measurement destination are unchanged.

The earlier Hugo blog remains in `content/`, `public/`, `archetypes/` and `themes/` for reference and is not included in the Netlify publish directory.

## Analytics

Google Analytics tracks this site in the `zubairlk.com` GA4 property under the separate Zubair Kakakhel account. Reporting uses UAE time (GMT+04:00) and AED.

- Account: `417527083` (Zubair Kakakhel)
- Property: `565973169` (`zubairlk.com`)
- Web stream: `16421777837`
- Measurement ID: `G-PWCH5SVFGZ`
- Google tag: `GTM-W4S5DZGT`

The existing property was moved from AZKY Tech Labs on 26 November 2026, preserving its data, stream and tracking IDs. [Open Analytics](https://analytics.google.com/analytics/web/#/a417527083p565973169/realtime/overview).

The Google-provided tag is installed once in the head of `site/index.html` and `site/404.html`. Enhanced measurement is enabled for page views, scrolls and outbound clicks. Manage destinations and measurement settings in Google Analytics / Google Tag Manager rather than installing a second tag.
