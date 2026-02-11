---
title: Troubleshooting in the Muvipro Theme
outline: deep
---

# Troubleshooting in the Muvipro Theme

This page summarizes common issues in the **Muvipro theme** and their solutions, based on Idtheme’s official documentation.

Main focus:

- **TMDB Post** issues (failed grab / incomplete data).
- **Theme installation** issues.
- **Player** issues.

## TMDB Post Issues

Common problems:

- Data from TMDB is incomplete (title/description empty).
- Only categories/tags are imported.
- Grab process errors or does not run.

### 1. Check TMDB API Settings

Make sure your API settings are correct:

1. Go to **Settings → Idmuvi Core → TMDB Settings**.
2. Check **Enable TMDB API**.
3. Enter your own **TMDB API Key** (not someone else’s).
4. For language:
   - It’s recommended to choose **Default (English)**.
   - If you choose another language (e.g., Indonesian), ensure the movie actually has that translation on TMDB.

If title/description do not appear:

- Switch back to **Default (English)**.
- Test the grab again.

For a guide to obtain a new API key, see:

- [Getting TMDB API Key](/general/api-key-tmdb.md)

### 2. Check Whether the TMDB API Is Blocked

Your API key may be blocked by TMDB, for example:

- Too many requests in a short period.
- Violations of API usage rules.

Solutions:

1. Create a **new TMDB API Key**.
2. Enter it in **TMDB Settings**.
3. Test posting/grab again.

### 3. JavaScript / JSON Conflicts with Other Plugins

Sometimes TMDB’s JSON process fails due to JavaScript conflicts with other plugins.

Steps to check:

1. Deactivate all plugins **except**:
   - Theme-provided plugins.
   - Idmuvi Core (and required theme plugins).
2. Test the TMDB Post feature.
3. If it works:
   - Reactivate other plugins one by one.
   - After each activation, test TMDB Post again.
4. If you find the plugin causing errors:
   - Leave it deactivated, or
   - Find an alternative plugin.

### 4. Check Hosting Support for CURL and JSON

TMDB Post requires:

- **CURL** module enabled.
- **JSON** extension enabled.

If unsure:

- Contact your hosting provider to check **CURL** and **JSON**.
- Ensure both are active and not blocked by a firewall.

## Muvipro Theme Installation Issues

Before troubleshooting, ensure you’ve followed the installation guide:

- [/muvipro/install-pengaturan](/muvipro/install-pengaturan)

### 1. Blank Screen During Install

If a **blank screen** or error appears when installing the theme:

- Ensure hosting meets **WordPress requirements**:
  - PHP **5.6+** minimum (newer versions recommended, e.g., 7.x+).
  - Latest WordPress version.
- If you still use an older PHP version, ask hosting to **upgrade PHP**.
- After upgrading PHP and WordPress, try reinstalling the theme.

### 2. Movie Grid/Boxes Misaligned

If the movie/episode grid boxes look broken:

- Often caused by JavaScript errors (e.g., from a plugin).
- Or **file/folder permissions** issues on the server.

Steps to check:

1. Deactivate all plugins **except** theme-provided plugins.
2. Refresh the archive/home movie page to see if the grid is normal.
3. If normal:
   - Reactivate other plugins one by one until you find the conflicting plugin.
4. If still problematic:
   - Check with your hosting provider regarding **file/folder permissions**.
   - If using Nginx or a VPS, permissions issues may need discussion with your server provider/forum.

## Muvipro Player Issues

Please note:

- The Muvipro theme **does not include a built‑in player**.
- Users typically use players from **third‑party providers** (gdriveplayer, haxhits, etc.).

If player issues occur:

- Discuss in the community/support group used by Idtheme.
- Check the official documentation of your chosen player provider.
- Ensure the embed code is correct and not blocked by the browser/Adblock.

## General Troubleshooting Tips

- Always **back up** before major changes (theme updates, PHP version changes, etc.).
- If errors appear:
  - Check the browser console for JavaScript errors.
  - Check PHP error logs on hosting.
- Test step by step:
  - Deactivate non‑essential plugins during debugging.
  - Reactivate them one by one after the issue is resolved.

If you’ve tried all the steps above and the issue persists, contact Idtheme support and include:

- WordPress version.
- Muvipro version.
- PHP version.
- List of active plugins.
- Screenshots of the error/problem view.