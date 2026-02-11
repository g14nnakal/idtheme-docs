---
title: Translate WordPress and Idtheme Themes to Indonesian
outline: deep
---

# Translate WordPress and Idtheme Themes to Indonesian

For users in Indonesia, translating WordPress, plugins, and themes (including Idtheme) to Indonesian makes site management easier.

## Video Tutorial (Placeholder)

Here is a video explaining language settings and how to use Loco Translate.

<YouTubeEmbed video-id="nu89ml-dfdk" />

## 1. Use WordPress Language Settings

1. Go to **Settings → General**.
2. Find the **Site Language** option.
3. Select **Indonesian**.
4. Save changes.

![Site Language WordPress](/general/translate/site-language-wordpress.jpg)

WordPress will attempt to download the Indonesian language pack for core and any supported plugins/themes.

After this step:

- Many default WordPress texts will automatically change to Indonesian.
- Idtheme themes that already provide Indonesian translation files will also switch.

## 2. Use the Loco Translate Plugin

A popular plugin for translating theme/plugin strings is **Loco Translate**.

1. Go to **Plugins → Add New**.
2. Search for `Loco Translate`.
3. Install and activate the Loco Translate plugin.

Loco Translate plugin link: https://wordpress.org/plugins/loco-translate/

### Translate Idtheme Themes

1. Go to **Loco Translate → Themes**.
2. Select the Idtheme you want to translate.
3. Click **New language** (if none exists).
4. Choose **Indonesian** and the translation file location (recommended: `languages/loco` to keep safe during updates).
5. Click **Start translating**.
6. Find the strings you want to translate and add the translations.
7. Click **Save**.

### Translate Plugins

The steps are the same, but go to **Loco Translate → Plugins** and select the plugin to translate.

## 3. Do Not Edit Core Theme/Plugin Files Directly

Recommended:

- Do **not** edit language files directly in core theme/plugin folders, because:
  - They can be overwritten during updates.
- Always use Loco Translate and save translations in the recommended location (e.g., `languages/loco` or another safe custom directory).

This way, when an Idtheme is updated:

- Your translation files remain safe.
- You only need to sync if there are new strings.

## 4. Sync After Updates

After updating a theme or plugin:

- Sometimes new strings are added.
- Open it again in Loco Translate and click **Sync** to fetch the latest strings.

## 5. Translation Tips

- Use consistent terms (e.g., “Beranda” for Home, “Artikel” for Posts).
- Avoid overly long translations that might break the layout.