---
title: How to Import and Export Elementor JSON Files in the Salespro Theme
outline: deep
---

# Import and Export Elementor Templates in Salespro

Salespro uses Elementor to manage landing page layouts.  
You can save and move layouts using Elementor’s **Import/Export** JSON file feature.

## Video Tutorial

Please watch the tutorial video below for a complete guide:

<YouTubeEmbed video-id="LpiQuAfhANQ" />

## 1. Export Elementor Templates

If you have a page or section you want to save as a template:

1. Open the page with **Edit with Elementor**.
2. Click the folder icon below the content area (Library).
3. Open the **My Templates** tab.
4. Save the current layout as a template:
   - Click the arrow next to the **Update** button (or use **Save as Template**).
   - Name the template, then save.
5. After saving, go back to **My Templates**.
6. Find the template you want to export.
7. Click the three dots (options) next to the template, then choose **Export**.
8. Elementor downloads a `.json` file to your computer.

You can use this JSON file to:

- Back up the layout.
- Move the layout to another site that also uses Elementor + Salespro.

## 2. Import Elementor Templates

To import a layout to a new site:

1. Ensure:
   - The Salespro theme is active.
   - The Elementor plugin is installed and active.
2. Go to **Elementor → Templates → Saved Templates** (menu names may vary slightly).
3. Click **Import Templates**.
4. Select the `.json` file you exported earlier.
5. Click **Import**.

The template will now appear in **My Templates**.

## 3. Use Templates on a Page

1. Create a new page (Pages → Add New) and set the page template to **Builder** (or a Salespro‑specific template).
2. Click **Edit with Elementor**.
3. Click the folder icon **Add Template**.
4. Open the **My Templates** tab.
5. Choose the imported template, then click **Insert**.
6. Adjust text, images, and links as needed.
7. Click **Update** to save changes.

## 4. Compatibility Tips

- Keep Elementor versions on the old and new sites reasonably close to avoid compatibility issues.
- If the layout looks “broken” after import:
  - Check **Global Fonts** and **Global Colors** in Elementor.
  - Ensure **Disable Default Fonts/Colors** is correctly set (to follow the theme).

## 5. Regular Backups

To protect your landing page layouts:

- Get into the habit of **exporting templates** after major changes.
- Store JSON files safely (cloud storage or version control).

This way, if issues occur on the site, you can quickly restore layouts using the exported templates.