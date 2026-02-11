---
title: New Settings in Superfast Version 1.0.9
outline: deep
---

# New Settings in Superfast Version 1.0.9

In Superfast version **1.0.9** and above, with the **Idblog Core** plugin version **1.0.9** and above, several new settings focus on improving site performance.

## Optimization Features in Idblog Core 1.0.9

Go to **Settings → Idblog Core** and look for the following settings. See the screenshot:

![Idblog Core Settings 1.0.9](/superfast/v-1-0-9/pengaturan-superfast-versi-1.0.9.jpg)

### Remove jQuery Migrate

- Removes `jquery-migrate` loading from WordPress core.
- Benefits:
  - Reduces JavaScript load.
  - Improves loading speed.
- Warnings:
  - If you still use legacy scripts that depend on jQuery Migrate, do not enable this feature.
  - If scripts break after enabling, disable this feature again.

### Remove WP Oembed

- Removes WordPress’s automatic embeds (oEmbed).
- Benefits:
  - Reduces built‑in scripts so pages are lighter.
- Warnings:
  - If you rely on oEmbed (e.g., embedded tweets, certain videos), avoid enabling this.

### Remove WP Head Meta Tag

- Removes some default WordPress meta tags in `wp_head`, such as:
  - RSD, wlwmanifest.
  - Feed links.
  - Shortlink.
  - Comments feed.
- Benefits:
  - Reduces unnecessary code output.
- Warnings:
  - Some plugins (e.g., Jetpack) may need certain meta tags.
  - If conflicts occur, disable this feature.

## Customizer Setting: Blog Content

Under **Appearance → Customize → Blog → Blog Content**, a new option is available:

### Disable Post Navigation in Single

- Removes **Prev/Next post** navigation links below single post content.
- Useful for a more minimal single post layout.

Enable this option if you don’t need post‑to‑post navigation below articles.

## Notes After Updating

After enabling these features:

- **Clear cache** in any cache plugin you use.
- If using a CDN, **purge cache**.
- Check the front‑end to ensure no elements break due to removed scripts/meta.