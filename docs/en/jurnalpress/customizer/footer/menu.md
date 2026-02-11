---
title: Menu (Footer Layout) – JurnalPress Theme
description: "Documentation for Footer Menu settings in the Footer panel of the JurnalPress theme WordPress Customizer."
outline: deep
---

# Menu (Footer Layout) – JurnalPress Theme

The **Footer Menu** section is used to configure and display the menu component in the website footer area. This option is located at **Customizer → Footer → Menu** and serves as the main control to enable or disable the footer menu.

Common uses for a footer menu:
- Additional navigation
- Important links (About, Contact, Privacy Policy)
- Supporting information at the bottom of the website

## Lokasi Pengaturan

```
Appearance → Customize → Footer Layout → Menu
```

## Section Description

This section includes an interactive description that helps users jump directly to WordPress menu settings:

> *Allow you setting footer menu component. Please Config Footer Menu Here.*

The **Config Footer Menu Here** link takes users to the **Navigation Menus** (`nav_menus`) panel in the Customizer to manage footer menu items.

## Available Options

### Enable Menu

Enable or disable the display of the footer menu on the website.

| Property        | Description |
|-----------------|------------|
| **Label**       | Enable Menu |
| **ID**          | `_enable_menufooter` |
| **Tipe Kontrol**| Toggle (`btcore-toggle`) |
| **Default**     | On (`1`) |

#### Behavior
- **ON** → The footer menu is displayed on the frontend
- **OFF** → The footer menu is not rendered at all

This option is useful if:
- The footer does not require navigation
- You want a more minimal footer appearance
- You want to save space on mobile screens

## Integration with Navigation Menu

This setting **does not manage menu items directly**.  
To manage the footer menu content (links, order, labels), use:

1. **Customizer → Navigation Menus**
2. Pilih menu footer (biasanya bernama "Footer Menu")
3. Edit menu items as needed

Or click the **Config Footer Menu Here** link directly within this section.

## Developer Notes

- This option is commonly used as a **conditional render** in the footer template.
- If `_enable_menufooter` is `false`, then:
  - The footer menu wrapper should not be rendered
  - No additional HTML markup needs to be loaded
- Suitable to combine with:
  - Footer grid
  - Multiple footer columns
  - Responsive footer layout

## Summary

The **Footer Menu** section functions as the main control for displaying navigation menus in the footer area. With a simple toggle, users can enable or disable the footer menu without deleting the menu they have created.
