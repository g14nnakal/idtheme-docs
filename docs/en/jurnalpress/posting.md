---
title: How to Publish Posts in the JurnalPress Theme
description: A comprehensive guide to creating posts in WordPress using the JurnalPress theme, supporting Standard, Video, and Gallery post formats, a custom Topic taxonomy, and theme-provided custom fields.
outline: deep
---

# How to Publish Posts in the JurnalPress Theme

This documentation explains the steps to create and manage posts in WordPress using the **JurnalPress theme**. The theme is designed for professional news portals and blogs with support for **post formats**, **custom taxonomy**, and additional **custom metaboxes**.

Supports both the Gutenberg block editor and the classic editor by installing the [Classic Editor](https://wordpress.org/plugins/classic-editor/) plugin. Both work well, and the post preview in the editor matches the frontend.

## 1. Create a New Post

1. Open the **WordPress Dashboard**.
2. Go to **Posts → Add New**.
3. Enter the **Post Title**.
4. Write the main content using the **Block Editor (Gutenberg)**.

## 2. Supported Post Formats

The JurnalPress theme supports the following post formats:

### 2.1 Standard

The default format for articles or regular posts.

**Steps:**
- Select the **Standard** format.
- Use the editor to write the article content.
- Use the additional custom fields (see section 4).

### 2.2 Video

Used for video posts (YouTube, Vimeo, or other sources).

**Steps:**
1. Select **Post Format: Video**.
2. Add the video description in the editor.
3. Configure video settings in **Video Settings** (see section 5).

### 2.3 Gallery

Used for photo gallery posts.

**Steps:**
1. Select **Post Format: Gallery**.
2. Add a **Gallery** block in the editor.
3. Upload or select multiple images.

## 3. Custom Taxonomy: Topic

In addition to tags and categories, JurnalPress provides a **custom taxonomy `Topic`** to group content by topic.

**How to Use Topic:**
1. In the editor sidebar, find the **Topic** panel.
2. Select existing topics or add new ones.
3. Topics are used for:
   - Content navigation
   - Post query filters
   - Topic-specific archive views

## 4. Post Settings (General Custom Fields)

In the editor screen, there is a **Post Settings** metabox with the following fields:

### 4.1 Subtitle

- **Field:** `Idt_Core_Subtitle`
- **Function:** Displays a subtitle before or after the main title.
- **Example:**
  > Breaking News Today

### 4.2 News Writer

- **Field:** `Idt_Core_Writer`
- **Function:** Name of the news writer.
- **Example:**
  > John Doe

### 4.3 News Editor

- **Field:** `Idt_Core_Editor`
- **Function:** Name of the news editor.
- **Example:**
  > Jane Smith

## 5. Video Settings (For Video Post Format)

This panel is used only when the **Video** post format is selected.

### 5.1 Video Duration

Used to display video duration.

- **Hour** → `_durh`
- **Minutes** → `_durm`
- **Seconds** → `_durs`

**Example:**
- 00 : 05 : 30 (5 minutes 30 seconds)

### 5.2 Video Source

JurnalPress supports two video sources:

#### a. OEmbed

- **Field:** `Idt_Core_Oembed`
- **Input:** Full URL from YouTube, Vimeo, or other oEmbed services.
- **Example:**
  ```
  https://www.youtube.com/watch?v=xxxx
  ```

> If OEmbed is provided, iframe will not be used. Learn more about oEmbed in the [WordPress Codex](https://codex.wordpress.org/Embeds).

#### b. Iframe

- **Field:** `Idt_Core_Iframe`
- **Input:** HTML iframe code.
- **Example:**
  ```html
  <iframe src="https://example.com/embed/video" width="560" height="315"></iframe>
  ```

> Use iframe only if you are not using OEmbed.

## 6. Featured Image

Always add a **Featured Image** because it is used for:

- Listing thumbnails
- Homepage sections
- Social share previews

## 7. Publish Post

After completing all inputs:

1. Review the content and settings.
2. Click **Publish** or **Update**.

## 8. Developer Notes

- **Custom Fields:** All custom fields used by the JurnalPress theme start with the prefix `Idt_Core_`.
- **Post Format:** Choose the video format for video posts. Choose the gallery format for photo gallery posts.

## 8. Best Practice Tips

- Use **Subtitle** for an additional headline.
- Ensure **Writer** and **Editor** are filled in for news credibility.
- Use **Topic** consistently.
- Always set a **Featured Image** for each post.
- For video, **choose either** OEmbed or Iframe.

By following this guide, your posts will display optimally and consistently with the **JurnalPress** theme design.