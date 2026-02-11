---
title: AMP Settings in the Jurnalpress Theme
outline: deep
---

# AMP Settings in the Jurnalpress Theme

## AMP Support

- Almost all Idtheme themes support AMP layouts (only the official AMP is supported).
- Enable the official WordPress AMP plugin. [Official AMP plugin link.](https://wordpress.org/plugins/amp/)

## Recommendations

- Use Standard or Transitional mode as needed. We recommend Transitional mode.

Below is a screenshot of the Transitional mode settings in **Dashboard -> AMP -> Settings**:

![Screenshot of Transitional mode settings in Dashboard -> AMP -> Settings](/general/amp/amp-tempate-mode.jpg)

- Do not redirect mobile visitors to AMP.

In other settings, **redirect mobile visitor to AMP**, enable this option if you want to direct mobile visitors to AMP pages; we recommend leaving it disabled. Here is the screenshot of this setting:

![Screenshot of 'redirect mobile visitor to AMP' in Dashboard -> AMP -> Settings](/general/amp/amp-other-settings.jpg)

- Suppress plugins that do not support AMP.

The theme supports AMP, but some plugins may not, causing AMP errors. Check whether each plugin supports AMP. If not, suppress that plugin. Here is the screenshot for suppressing plugins:

![Screenshot of suppressing plugins in Dashboard -> AMP -> Settings](/general/amp/amp-suppress-plugin.jpg)

- Ensure ad components and third‑party scripts are compatible.
- Test pages with Google AMP Test to ensure validity.

## AMP in Customizer

To simplify the interface, some features such as widgets and comments are removed on AMP pages.

No worries—we provide settings to display ads on AMP pages. If you use page‑level ads, we also provide a dedicated head script setting for AMP pages. The settings are as follows:

1. Go to **Customizer -> Banner**, then in each section open the HTML banner type; you will find an additional option **HTML code (AMP version)**. Configure ads that should appear on your AMP pages there. See the screenshot:

![AMP Ads settings in Customizer](/general/amp/amp-html-banner-type-jurnalpress.png)

2. If you use page‑level ads, go to **Customizer -> Other -> Head Script**; there is an additional setting **HTML code (AMP version)**. Configure the head script specifically for AMP pages there.

3. To learn which ads are supported and their formats, visit:

https://amp.dev/documentation/components/amp-ad/

If you use AdSense, learn the AdSense ad formats at:

https://github.com/ampproject/amphtml/blob/master/ads/google/adsense.md

How do I check that my AMP pages are valid? Visit the following link to validate your AMP pages:

https://validator.ampproject.org

## Customization

- If the theme provides AMP‑specific settings, enable them in the relevant Customizer sections or Options.
- Minimize custom CSS and avoid incompatible inline JS.

## FAQ

Q. **Why doesn't my plugin work on AMP pages?**

*Ensure the plugin supports AMP; contact the developer to confirm it works on AMP pages.*

Q. **Why doesn't my JavaScript work on AMP pages?**

*AMP does not support JavaScript. If you embed JavaScript, for example in posts, it will not work. Disable the AMP plugin if you need JavaScript in posts.*

Q. **Why is my AMP page still valid after I disable the AMP plugin?**

*If you disable the AMP plugin, your pages will no longer be AMP.*

Q. **Why is my AMP page invalid?**

*Check for errors in the AMP validator; fix any reported issues. Typically, errors occur due to scripts or plugins not supported by AMP.*

Q. **Why is there an Index Error in the AMP settings?**

*Usually another plugin causes the index error; suppress that plugin. See the tutorial above.*