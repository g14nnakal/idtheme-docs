---
title: Banner (Customizer) – JurnalPress Theme
description: Configure the Banner panel for various ad locations (Top Parallax, After Header, Between Posts, Before/Inside/After Content, Sticky Content, After Content Element, Floating Left/Right/Bottom, Footer, Popup). Includes banner types, media, URL, HTML, AMP, and positions.
outline: deep
---

# Banner (Customizer) – JurnalPress Theme

The **Banner** panel in the WordPress Customizer is used to manage different types of banners or ads displayed in strategic positions across the site. The panel supports **Image** and **HTML/Ads Code** banners, is **AMP** compatible, and is flexible for modern monetization needs.

## Video Tutorial

Here is the video tutorial for the Banner panel in the JurnalPress theme Customizer:

<YouTubeEmbed video-id="-jlAOm30ki0" />

For detailed text instructions, see below.

## Settings Location
```
Appearance → Customize → Banner
```

## Panel Information

- **Panel Name**: Banner  
- **Panel ID**: `panel-banner`  
- **Priority**: 50  
- **Main Function**:  
  Configure global banners that can be displayed in various site locations, on archive pages, single posts, and as floating elements.

## General Banner Structure

Each banner section in this panel follows a similar option pattern:

### Basic Options
- **Banner Type**
  - `Image` → Use an image banner
  - `HTML` → Use HTML / Adsense / shortcode
- **Upload Image**
  - Appears when Banner Type = Image
- **Target URL**
  - The destination URL when the banner is clicked
- **HTML Code**
  - Appears when Banner Type = HTML
  - Supports:
    - HTML
    - Google Adsense
    - Shortcode
- **HTML Code (AMP)**
  - Used specifically for AMP pages
  - Uses the `<amp-ad>` component

## Banner Sections

### 1. Top Parallax Banner (Mobile Only)

A parallax banner that appears at the **top of the page**, specifically for **mobile devices**. Includes a close button.

**Characteristics**
- Mobile-only
- Parallax effect
- Can be closed by the user

**Recommended Size**
- Maximum: `325px x 300px`

**Additional Option**
- **Text Before Close**  
  Instructional text before the banner is closed  
  Example: `Scroll to read post.`

### 2. After Header Banner

A banner displayed immediately **after the header**.

**Use Cases**
- Branding
- Primary ads
- Important announcements

**Additional Options**
- **Banner Position**
  - Left
  - Right
  - Center

### 3. Between Posts Banner

A banner inserted **between posts** in archive pages (blog, category, tag).

**Banner Position**
- After First Post
- After Second Post
- After Third Post *(default)*
- After Fourth Post

**Notes**
- Highly effective for increasing CTR
- Does not disrupt reading flow

### 4. Before Content Banner

A banner displayed **before the main content** on single posts.

**Positions**
- Default
- Float Left
- Float Right
- Center

### 5. Inside Content Banner

A banner inserted **inside the article content**.

**Positions**
- Left
- Right
- Center
- Center (Parallax)
- Center (Sticky)

**Notes**
- Ideal for native ads
- Parallax & sticky increase visibility

### 6. After Content Banner

A banner displayed **after the article content**.

**Positions**
- Left
- Right
- Center

### 7. Sticky Content Banner

A **sticky** banner on the left or right side of the article content.

**Recommended Size**
- 120x600
- Maximum width 120px

**Positions**
- Left
- Right *(default)*

### 8. After Content Element Banner

A banner displayed **after specific elements** in the content (for example, after a paragraph or component).

**Positions**
- Left
- Right
- Center

### 9. Floating Left Banner

A floating banner on the **left side of the screen** across all pages.

**Recommended Size**
- 120x600
- 160x600
- Maximum width 160px

### 10. Floating Right Banner

A floating banner on the **right side of the screen**.

**Recommended Size**
- 120x600
- 160x600
- Maximum width 160px

### 11. Floating Bottom Banner

A banner floating at the **bottom of the screen** across all pages.

**Notes**
- Suitable for promos or CTAs
- Should be limited to avoid impacting UX

### 12. Footer Banner

A banner displayed **before footer widgets**.

**Use Cases**
- End‑of‑page ads
- Affiliate banners
- Additional CTAs

### 13. Popup Banner

A **popup** banner that appears on the screen.

**Notes**
- Not recommended for AMP
- Use judiciously to avoid harming UX

## AMP Compatibility

Some banners support **AMP HTML**:
- Use `<amp-ad>`
- Ensure ad sizes and types are valid
- Certain floating and popup types are not recommended for AMP

::: info Info
This option is enabled if you activate the **[AMP Official](https://wordpress.org/plugins/amp/)** plugin in WordPress.
:::

## Tips & Best Practices

- Use recommended banner sizes for optimal performance
- Avoid excessive use of popups and floating banners
- Use the **Between Posts** position to improve CTR
- Ensure AMP HTML is valid to prevent AMP errors
- Combine Image and HTML banners according to your monetization needs

## Conclusion

The **Banner** panel in the **JurnalPress** theme is designed to be flexible and modular, enabling powerful ad management directly from the WordPress Customizer without additional code modifications.