---
title: Newkarma v1.1.3 and New AMP Features
outline: deep
---

# Newkarma v1.1.3 and New AMP Features

In **Newkarma v1.1.3**, AMP support is improved by using a **custom AMP template** in the theme, no longer relying on the default template from the AMP plugin.

## AMP Implementation Differences

Previously:

- Newkarma already supported AMP through the AMP plugin’s default template.
- When using **Transitional** mode, the AMP view and Newkarma template were not well synchronized.
- The mobile menu might not work because AMP does not allow regular JavaScript.

In version 1.1.3:

- Uses the **Newkarma custom AMP template**.
- Not only single posts; all pages with the `?amp` URL are supported:
  - `https://domain.com/?amp`
  - `https://domain.com/nama-artikel/?amp`

## AMP Support

- Almost all Idtheme themes support AMP layouts (only the official AMP is supported).
- Activate the official WordPress AMP plugin. [Official AMP plugin link.](https://wordpress.org/plugins/amp/)

## Recommendations

- Use Standard or Transitional mode as needed. Transitional mode is recommended.

Here is a screenshot of Transitional mode settings in **Dashboard -> AMP -> Settings**:

![Screenshot of Transitional mode settings in Dashboard -> AMP -> Settings](/general/amp/amp-tempate-mode.jpg)

- Do not redirect mobile visitors to AMP.

In other settings, **redirect mobile visitor to AMP**: enable this option only if you want to send mobile visitors to AMP pages; recommended to leave it disabled. Here is the settings screenshot:

![Screenshot of redirect mobile visitor to AMP in Dashboard -> AMP -> Settings](/general/amp/amp-other-settings.jpg)

- Suppress plugins that do not support AMP.

The theme already supports AMP, but some plugins may not and can cause AMP errors. Check whether the plugin supports AMP. If not, suppress that plugin. Here is the suppress plugin settings screenshot:

![Screenshot of suppress plugin in Dashboard -> AMP -> Settings](/general/amp/amp-suppress-plugin.jpg)

- Ensure ad components and third‑party scripts are compatible.
- Test pages with Google AMP Test to confirm validity.

## AMP in Newkarma Core

To simplify certain views, features like widgets and comments are removed on AMP pages.

However, you don’t need to worry: we provide settings to display ads on AMP pages, and if you use page‑level ads, we also include a head script option specific to AMP pages. Settings:

1. Go to **Settings -> Newkarma Core**, then open the AMP (New) menu. There you can configure ads for your AMP pages. See the screenshot:

![AMP Ads Settings in the Newkarma Core Plugin](/general/amp/amp-plugin-core-newkarma.jpg)

2. To learn which ad networks are supported and their formats, visit:

https://amp.dev/documentation/components/amp-ad/

If you use AdSense, learn the AdSense formats here:

https://github.com/ampproject/amphtml/blob/master/ads/google/adsense.md

How do I validate my AMP pages? Use:

https://validator.ampproject.org

## Adjustments

- If the theme provides specific AMP settings, enable them in the relevant Customizer or Options.
- Minimize custom CSS and avoid incompatible inline JS.

## FAQ

Q. **Why doesn’t my plugin work on AMP pages?**

*Make sure the plugin supports AMP; ask the plugin developer to confirm it works on AMP pages.*

Q. **Why doesn’t my JavaScript work on AMP pages?**

*AMP does not support regular JavaScript. If you insert JavaScript in posts, it will not work. Disable the AMP plugin if you need JavaScript in posts.*

Q. **Why are my pages still valid AMP after I disable the AMP plugin?**

*If you disable the AMP plugin, your pages will no longer have AMP.*

Q. **Why is my AMP page invalid?**

*Check for errors in the AMP validator. If errors exist, fix them. Usually errors are caused by scripts or plugins not supported by AMP.*

Q. **Why is there an AMP Error Index setting?**

*Usually a plugin causes the index error. Suppress that plugin; see the tutorial above.*