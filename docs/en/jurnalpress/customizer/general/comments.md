---
title: Comments (General) - JurnalPress Theme
description: Complete documentation for Comments settings in the JurnalPress theme WordPress Customizer, covering comment type selection, comment form settings, Facebook Comments integration, and styling options.
outline: deep
---

# Comments (General) - JurnalPress Theme

The **Comments** section in the JurnalPress Customizer controls the behavior, appearance, and integration of the commenting system on single post pages. You can choose the comment type (default WordPress or Facebook Comments), customize form text, and style the comment form to match your theme design.

These settings are useful for:

- Controlling user experience when interacting via comments
- Integrating third‑party comments (Facebook Comments)
- Simplifying the comment form for better usability
- Adjusting comment appearance without manual CSS

## Settings Location

Access these settings via:

```
Appearance → Customize → General → Comments
```

This section has two main tabs:

- **General** – Functional and global comment settings
- **Style** – Visual settings for the comment form

## Tab: General

The **General** tab contains core settings that define the comment type and form labels.

### 1. Single Comment

**Label:** Single Comment  
**Type:** Button selection (SVG Button)

Choose the comment system used on single post pages.

Available choices:

- **Default**  
  Use the native WordPress comment system.

- **Facebook**  
  Use the Facebook Comments Plugin to show comments tied to Facebook accounts.

**Default:** Default

> Note: If you select Facebook Comments, make sure the Facebook App ID is set in the next option.

### 2. Facebook App ID

**Label:** Facebook App ID  
**Type:** Text

Enter the **Facebook App ID** required for Facebook Comments to work properly.

- If provided, the system uses your own App ID
- If left empty, the theme uses JurnalPress’s default Facebook App ID

**Example value:**

`12345678910`

> It’s recommended to use your own App ID for better performance and control (moderation, insights, API limits).

### 3. Comment Form Title

**Label:** Comment Form Title  
**Type:** Text

Set the title displayed above the comment input area.

**Default text:**

`Leave a Reply.`

Example titles:

- Leave a Reply
- Write a Comment
- Discussion

This helps align language and tone with your audience.

### 4. Remove Comments Website Field

**Label:** Remove Comments Website field  
**Type:** Toggle (On / Off)

Remove the **Website / URL** field from the WordPress comment form.

Benefits of enabling this:

- Reduce comment spam
- Simplify the form
- Focus on name, email, and comment content

**Status:**

- **Off** → Website field is shown (WordPress default)
- **On** → Website field is removed

### 5. Comment Button Title

**Label:** Comment Button Title  
**Type:** Text

Set the label of the submit comment button.

**Default text:**

`Post Comment`

Alternative examples:

- Send Comment
- Submit
- Publish Comment

Useful for localization or UI tone adjustments.

## Tab: Style

The **Style** tab customizes the visual presentation of the comment form without writing CSS.

Common settings include:

- **Style Type**  
  Choose form style (Default / Boxed). When Boxed is selected, additional options appear.

- **Background Color**  
  Form background color. Required if Style Type is Boxed.

- **Background Image**  
  Form background image. Required if Style Type is Boxed.

- **Border Radius**  
  Rounded corners for inputs and buttons. Required if Style Type is Boxed.

- **Border**
  Input/form border controls. Required if Style Type is Boxed.

> All changes in the Style tab are visible immediately via the Customizer live preview.

## Tips & Recommendations

- Use **Default Comment** for lighter performance and full WordPress control
- Use **Facebook Comment** if your audience is active on Facebook and you prefer social interaction
- Enable **Remove Website Field** to reduce spam
- Adjust **Style** to keep the form consistent with global theme design

## Summary

The **Comments** section in JurnalPress gives you full control over:

- The comment system used
- Comment form text and labels
- Facebook Comments integration
- Visual styling of the comment form

With these settings, you can create a cleaner, more engaging discussion experience tailored to your website’s needs.