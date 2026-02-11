---
title: How to Post Software in the DLPRO Theme
outline: deep
---

# Posting Software in DLPRO

## Video Tutorial

Please watch the tutorial video above to better understand the posting flow.

<YouTubeEmbed video-id="gDFw-cUMBgg" />

## Posting Methods
DLPRO supports two methods: manual posting and automatic posting.

### Manual Posting
1. Go to **Software → Add New**.
2. Fill in the title, description, rating (e.g., Rate My Posts for rich snippets), **Software Settings**, category, and tags.
3. For download links, open **Download Settings**:
   - Title Button: text on the download button.
   - Download URL: the URL of your file/application source.
   - Delete: remove the button.
   - Add another: add additional buttons (multiple allowed).
   - You can enter the source URL (e.g., APK on Google Play) or a file URL you’ve uploaded to third‑party hosting. See hosting references here: [/dlpro/hosting-file](../dlpro/hosting-file). Example Download Settings:

![Download Settings](/dlpro/posting/download-settings-dlpro.jpg)

4. Set a **Featured Image** for the thumbnail.
5. Image gallery: in **Software Settings** under **Shortcode Gallery**.
   - Use the theme’s shortcode:
   - `[dlpro-gallery image_url="urlimage1,urlimage2,urlimage3"]`
   - Separate image URLs with commas; only image URLs are supported (not image IDs).
   - Example:
     `[dlpro-gallery image_url="https://lh3.googleusercontent.com/TZu0ke_Vwo6Z3dsLH43658PWSc_ibiivKQbmmnDCOYJ4-P395Fyf50a6gzZkVG_j-C54,https://lh3.googleusercontent.com/REaX6zbOih7NFbvvnErCua4bfnCG8TvEaceKVrhpT4I7jYTeu9jfHUva21w0c1CYK3c,https://lh3.googleusercontent.com/w1RokPPVwjkgc2_GQh_HLIR7QVJnlJOKv0c-OB5yn3SvMvKuEr-jKmXQnr6oft0WNvM"]`
   - If you use auto post, the gallery will automatically be filled with image links from Google Play.
6. Publish.

### Automatic Posting (Dlpro Autopost)
1. Install the **Dlpro Autopost** plugin via **Plugins → Add New → Upload Plugin**.
   - The plugin file is available in the plugins folder within the DLPRO package (after extracting).
2. Activate the plugin.
3. Go to **Software → Add New**.
4. In the **Dlpro Autopost** custom field, enter the **ID** from Google Play. Example:
   - URL: `https://play.google.com/store/apps/details?id=com.whatsapp`
   - Enter ID: `com.whatsapp`
   - Click **Grab Now**, wait for the process, then **Publish**.
5. Plugin language settings:
   - Go to **Settings → Dlpro Autopost** to choose the language for grabbed content.
6. Done.

### Blog Posting
1. Go to **Blog → Add New**.
2. Fill it in like a regular post (title, content, category, tags, featured image).

## Important Notes
- Installing the Dlpro Autopost plugin automatically switches the Gutenberg Editor to the Classic Editor.
- Required: **CURL** and **JSON** modules enabled on your hosting.
- Minimum **PHP 7** and use the **latest WordPress**.
- Google Play may block the server IP if posting excessively (because it does not use the official API, but scraping). The autopost plugin is not guaranteed to work on all servers.