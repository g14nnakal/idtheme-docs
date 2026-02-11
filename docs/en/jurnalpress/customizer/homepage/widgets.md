---
title: Widget (Home Top Module) - JurnalPress Theme
description: Top Widgets settings in the Home Top Module of the JurnalPress theme to display full‑width widgets at the top of the homepage.
outline: deep
---

# Widget (Home Top Module) - JurnalPress Theme

The **Widget Top** section displays widgets from the WordPress Widget Area in the **Home Top Module**. This area is suitable for banners, ads, CTAs, short info, or other custom widgets with a **full‑width** layout.

These settings **do not provide many configuration options**, because all content is managed directly from the **WordPress Widget Manager**.

## Settings Location
```
Appearance → Customize → Homepage → Home Top Module → Widgets
```

## How to Use Top Widgets

1. Go to **Appearance → Widgets**  
   or  
   **Appearance → Customize → Widgets**
2. Find the widget area named: **Module Home Top Fullwidth**
3. Add desired widgets via **drag & drop**
4. Save changes

Widgets will appear at the **top of the homepage**, following the order of added widgets.
## Important Notes

::: tip Note
To add widgets, do **not** use this panel; use the **Widgets** menu instead.
:::

This panel serves only as **information and a shortcut** to widget settings.

## Available Hooks

The **JurnalPress** theme provides hooks for developers to add or modify the Home Top widget output programmatically.

### Before Widget Home Top
```php
do_action( 'jurnalpress_before_widget_module_home_top' );
```

Used for:

- Adding extra wrappers
- Injecting elements before widgets
- Tracking or custom markup

### After Widget Home Top
```php
do_action( 'jurnalpress_after_widget_module_home_top' );
```

Used for:

- Closing extra wrappers
- Adding elements after widgets
- Injecting scripts or advanced layouts

## Common Use Cases for Top Widgets

Top Widgets are suitable for:
- Grid list of widgets
- Google AdSense ads
- Important announcements
- CTAs (Call To Action)

## Summary

| Feature | Description |
| ------------- | :-----------: |
| Position | Home Top (Fullwidth) |
| Content Management | Appearance → Widgets |
| Hook Support | Yes |