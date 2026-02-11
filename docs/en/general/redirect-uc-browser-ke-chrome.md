---
title: Redirect UC Browser to Google Chrome in All Idtheme Themes
outline: deep
---

# Redirect UC Browser to Google Chrome in All Idtheme Themes

This tutorial explains how to redirect UC Browser. AdSense publishers are often disturbed by adblock, which can reduce earnings.

Several Idtheme themes already detect adblock, and for UC Browser users on mobile you can add a special script to redirect to Google Chrome.

## 1. Where to Configure the Script in Idtheme

For Idtheme themes that use a core plugin (e.g., **Idblog Core** or **Idmuvi Core**):

1. Go to **Settings** in the WordPress dashboard.
2. Find the core plugin settings menu, for example:
   - **Settings → Idblog Core** (for themes like Superfast).
   - **Settings → Idmuvi Core** (for movie themes like Muvipro).
3. Open the **Other** tab or the tab that has **Head Script** settings.

There is usually a field to add extra scripts in the website `<head>` section.

> Placeholder image: Head Script settings UI in Idtheme core plugin.

## 2. Script to Redirect UC Browser to Google Chrome

Paste the following script into the **Head Script** field:

```html
<script type='text/javascript'>
//<![CDATA[
var noUC = navigator.userAgent;
var redirect = noUC.search("UCBrowser");
if (redirect > 1) {
  var axefo = window.location.assign("googlechrome://navigate?url=" + window.location.href);
  var activity = axefo;
  document.getElementsByTagName('head')[0].appendChild(activity);
}
//]]>
</script>
```

Brief explanation:

- The script detects a **user agent** containing `UCBrowser`.
- If detected:
  - The browser is instructed to open the same URL using **Google Chrome** via the `googlechrome://navigate?url=...` scheme.

This script targets mobile visitors who have Google Chrome installed.

> Placeholder image: example of the script pasted in the Head Script field.

## 3. Clear Cache After Adding the Script

After adding the script:

1. Clear cache in all cache plugins (WP Fastest Cache, W3 Total Cache, LiteSpeed, etc.).
2. If using a CDN or Nginx with cache:
   - Perform a **purge cache** at the server/CDN level.
3. Test the website using UC Browser on a mobile device to verify the redirect.

## 4. Important Notes

- Use this script only if truly needed (e.g., for advertising considerations).
- Test on several devices and browsers to avoid disrupting other visitors.
- Redirect policies like this are optional and depend on each website’s strategy.