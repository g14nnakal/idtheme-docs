---
title: Other (Customizer) – JurnalPress Theme
description: Configure Head/Footer Script, Analytics & Pixel, and other options (remove emoji, cache dynamic CSS). Suitable for inserting global scripts and performance optimization.
outline: deep
---

# Other (Customizer) – JurnalPress Theme

## Video Tutorial

Here is the video tutorial for the Other panel in the JurnalPress theme Customizer:

<YouTubeEmbed video-id="SB3tbdH_pEY" />

For detailed text instructions, see below.

## Settings Location
```
Appearance → Customize → Other
```

## Head Script
- HTML code (textarea)
  - sanitize_callback: btcore_customizer_sanitize_textareajsallowed
  - description: add scripts inside the &lt;head&gt;…&lt;/head&gt; tag
- HTML code (AMP version) (textarea)
  - appears when the AMP plugin is active
  - description: insert the AMP version of your script

## Footer Script
- HTML code (textarea)
  - sanitize_callback: btcore_customizer_sanitize_textareajsallowed
  - description: add scripts before the closing &lt;/body&gt;
- HTML code (AMP version) (textarea)
  - appears when the AMP plugin is active
  - description: insert the AMP version of your script

## Analytics & Pixel
- Google Analytics ID (text)
  - placeholder: UA-XXXXX-X or G-XXXXXXXXXX
- Facebook Pixel ID (text)
  - placeholder: 12345678910

## Other Options
- Remove emoji script (btcore-toggle)
  - Default: On (1)
- Enable cache dynamic css (btcore-toggle)
  - Default: Off (0)
  - description: all CSS from options is combined and stored in a single database entry for speed