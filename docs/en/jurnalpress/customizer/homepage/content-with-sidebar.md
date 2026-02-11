---
title: Content with Sidebar (Module) - JurnalPress Theme
description: Documentation for the Content with Sidebar settings in the Home Top Module in the JurnalPress theme Customizer to display a post list with a sidebar on the homepage.
outline: deep
---

# Content with Sidebar (Module) - JurnalPress Theme

The **Content with Sidebar** section displays a list of posts on the homepage with a **main content + sidebar** layout, similar to a **latest post archive** or **latest post with sidebar**.

This feature is located at **Customizer → Homepage → Home Top Module → Content with Sidebar** and is ideal for showing the latest content along with additional widgets on the homepage.

## Settings Location:
```
Appearance → Customizer → Homepage → Home Top Module → Content with Sidebar
```

## Important Notes

::: warning Warning
- When this feature is enabled, **Latest Post with Sidebar** located **below it** will **offset the number of posts**.  
  Example:  
  If the number of posts is set to **3**, the next module will start from the **4th post**.
- This section uses **Sidebar Home** and **Module Home Before 1st Post**.
  Configure widgets via:
  **Appearance → Widgets** or **Customizer → Widgets**
:::

## Options

### 1. Enable Content with Sidebar

**Path:**  
`Customizer → Home Top Module → Content with Sidebar`

Enable or disable **Content with Sidebar** on the homepage.

- **Type:** Toggle
- **Default:** Off
- **Notes:**
  - The layout follows **Archive / Latest Post** settings
  - To configure post layout (grid/list, meta, thumbnail, etc.), go to:

    **Customizer → Pages → Archive**

### 2. Number Posts

Set how many posts are displayed in the **Content with Sidebar** section.

- **Type:** Range Slider
- **Minimum:** 2
- **Maximum:** 6
- **Default:** 3
- **Notes:**
  - This number affects post ordering for subsequent homepage modules

### 3. Title Text

Set the section title for **Content with Sidebar** on the homepage.

- **Type:** Text
- **Notes:**
  - Enter text to display a title
  - Leave this field empty if you **don’t want to display a title**

## Widgets Used

This section uses the following widgets:

- **Sidebar Home**
- **Module Home Before 1st Post**

To configure widgets:

1. Open **Appearance → Widgets**, or
2. Open **Customizer → Widgets**
3. Add widgets to:
   - *Sidebar Home*
   - *Module Home Before 1st Post*

## Usage Tips

- Use a **section title** to distinguish the main homepage content (e.g., *Latest Updates*, *Featured Content*).
- Combine with widgets such as:
  - Popular Posts
  - Advertisement
  - Newsletter
  - Custom HTML
- Works well with the **list + sidebar** archive layout for a consistent blog/news look.

## Summary

| Option | Function |
|-----|-------|
| Enable Content with Sidebar | Enable the section |
| Number Posts | Set the number of posts |
| Title Text | Section title |
| Sidebar Home | Sidebar widget area |
| Module Home Before 1st Post | Widget area before the first post |