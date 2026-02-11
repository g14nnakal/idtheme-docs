---
title: How to Manually Update WordPress Themes on Idtheme
outline: deep
---

# How to Manually Update WordPress Themes on Idtheme

This guide applies to all Idtheme themes, including Superfast.

The manual update method uses the **Easy Theme and Plugin Upgrades** plugin for WordPress version 6.8 and below. For newer versions, the plugin is no longer required—simply upload the file and click Replace.

## Video Tutorial

Before proceeding, watch the following tutorial for a complete guide:
<YouTubeEmbed video-id="ESTUnK3SGis" />

## 1. Install the Easy Theme and Plugin Upgrades Plugin

1. Go to **Plugins → Add New**.
2. In the search box, type: `Easy Theme and Plugin Upgrades`.
3. Click **Install Now** then **Activate**.

Plugin link: https://id.wordpress.org/plugins/easy-theme-and-plugin-upgrades/

This plugin lets you upload a theme file with the same name and safely overwrite it.

## 2. Download the Latest Theme Version

1. Log in to the Idtheme/Kentooz member area.
2. Check whether a newer version of the theme is available than the one you’re currently using.
3. Download the latest theme ZIP file.
4. Extract the file if needed, and make sure you have:
   - `namatheme.zip`  
     Example: `superfast.zip`, `muvipro.zip`, etc.

## 3. Upload the New Theme via Appearance → Themes

1. Go to **Appearance → Themes**.
2. Click **Add New** then **Upload Theme**.
3. Select the latest theme ZIP file (e.g., `superfast.zip`).
4. Click **Install Now**.

Since Easy Theme and Plugin Upgrades is active:

- WordPress will recognize that a theme with the same name already exists.
- An update process will appear, replacing the old files with the new ones.

## 4. Activation and Verification

After the upload completes:

1. Ensure the active theme is the latest version (check on the Themes page).
2. Open the site’s homepage and several key pages (single post, archive, etc.).
3. If you use a cache plugin:
   - Perform a **clear cache**.
   - If using a CDN, **purge cache**.

## 5. Tips Before and After Updating

- Always back up:
  - Theme files (optional).
  - Database (highly recommended).
- Record custom code changes:
  - If you edited theme files directly (not using a child theme), those changes may be lost during updates.
  - Consider using a child theme for custom modifications.

If you encounter difficulties:

- Document the error (screenshot or error message).
- Contact Idtheme support and include the theme version, website URL, and issue details.