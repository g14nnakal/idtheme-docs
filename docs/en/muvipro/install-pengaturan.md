---
title: How to Install and Configure the Muvipro Theme
outline: deep
---

# Muvipro Installation and Setup

## Video Tutorial

Before installing Muvipro, watch the video above to the end.

<YouTubeEmbed video-id="8dBs7gc1rBc" />

## Installation Steps

1. Download the Muvipro theme from the member area.
2. Extract the package you downloaded.
3. Upload the `muvipro.zip` file via **Appearance -> Themes -> Add New -> Upload Theme**.
4. Activate the **Muvipro** theme.
5. Install the recommended and required plugins, then activate them all.

If you need ad alternatives beyond AdSense, the original documentation suggests Galaksion as one option.

## License Activation

1. Go to **Plugins -> Muvipro License**.
2. Enter the **license key** you received from the Kentooz member area:  
   https://member.kentooz.com/softsale/license
3. Save and ensure the license status is active.

## Import Demo Data

1. Go to **Appearance -> Import Demo Data**.
2. Click **Import Demo Data**.
3. Wait a few minutes until the process completes.
4. When finished, your site will look similar to the official Muvipro demo.
5. Continue by configuring widgets and other settings.

## Permalink Settings

After importing the demo:

1. Go to **Settings -> Permalinks**.
2. Set the permalink structure as needed (e.g., Post name).
3. Change **Category Base** to `genre` (as recommended in the Muvipro documentation).
4. Save changes.

## Configure TMDB API (Idmuvi Core)

Muvipro integrates with TMDB for movie data.  
Settings are in the **Idmuvi Core** plugin:

1. Go to **Settings -> Idmuvi Core -> TMDB Settings**.
2. Check **Enable TMDB API**.
3. Enter your own **TMDB API Key**.
4. Save the settings.

TMDB settings example:

![Contoh pengaturan TMDB](/muvipro/install-pengaturan/tmdb-setting-muvipro.jpg)

For a tutorial on obtaining a TMDB API Key, see:  
[Cara Mendaftar Akun dan Mendapatkan API Key TMDB](/general/api-key-tmdb.md)

You can view the TMDB settings directly on
**Settings -> Idmuvi Core -> TMDB Settings** in your WordPress dashboard.

## Idmuvi Core Settings

Go to **Settings -> Idmuvi Core**. See the example screenshot:

![Pengaturan Idmuvi Core Muvipro](/muvipro/install-pengaturan/setting-idmuvi-core.jpg)

- **Tab Related Posts**
  - Enable/disable related posts.
  - Set the number of related posts to display.

> [!WARNING]
> This option has been moved to **Customize -> Movie -> Movie Content**.

- **Tab Breadcrumbs**
  - Enable breadcrumbs.
  - Configure breadcrumb label text and separator.

> [!WARNING]
> This option has been moved to **Customize -> Movie -> Movie Content**.

- **Tab Ads**
  - Configure ad code in the theme’s available locations (top, bottom, in-content, etc.).
  - Enable anti‑adblock script if needed.

- **Tab Social**
  - Configure social share buttons.
  - Configure OpenGraph (if you’re not using an SEO plugin for OG).

- **Tab TMDB Settings**
  - Enable and enter the TMDB API Key (required for TMDB automation features).

- **Tab Other**
  - Configure scripts in the **head** and **footer** (Google Analytics, Facebook Pixel, custom scripts).
  - Various optimization options (disable emoji scripts, version query, etc.).

## Style Settings via Customizer

Go to **Appearance -> Customize**. See the screenshot:

![Pengaturan Customizer Muvipro](/muvipro/install-pengaturan/customizer-theme-muvipro.jpg)

### General Tab

- Configure the global layout (boxed / fullwidth).
- Configure global colors (background, primary color, links).
- Configure the background image.
- Configure fonts (Google Fonts) and heading/body sizes.

### Header Tab

- Configure icons, logo.
- Configure header background color.
- Configure header background image.
- Configure the header menu and menu colors.

### Movie Tab

- Configure movie page layout:
  - Movie archive display.
  - Single movie display (related posts, breadcrumbs, poster, movie details, etc.).

### Footer Tab

- Configure footer background color.
- Configure copyright text.
- Configure the number of footer widgets.

## Additional: Top Navigation (Version 1.0.4+)

In version 1.0.4 there is a new **Top Navigation** feature:

- Full settings are in the dedicated documentation:  
  [Top Navigation Muvipro](/muvipro/top-navigation.md)

## Server Requirements

- Apache with PHP 7.2 or higher.
- WordPress 5 or higher (latest version recommended).
- **Curl** and **Json** modules enabled (required).

For security, use a PHP version newer than 7.2.
PHP 7.4+ is strongly recommended for better security and performance.