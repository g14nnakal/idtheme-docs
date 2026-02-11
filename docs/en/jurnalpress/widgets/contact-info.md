---
title: Contact Info (Widget) – JurnalPress Theme
description: "The Contact Info widget for the JurnalPress WordPress theme lets you display complete contact information with various customization options."
outline: deep
---

# Contact Info (Widget) – JurnalPress Theme

The Contact Info widget for the JurnalPress WordPress theme lets you display complete contact information with flexible customization options. This widget requires the BT Core plugin to work optimally.

## Key Features

- Display company/organization contact information
- Support for title image and link
- Address, phone, and email options
- Social media icon integration
- App download buttons (Play Store & Apple Store)
- Alignment settings (left, center, right)

## Widget Settings

### Title

- **Label:** Title
- **Type:** Text field
- **Description:** The main widget title to display.

### Link Title

- **Label:** Link Title
- **Type:** URL field
- **Description:** Target URL for the title (example: `https://www.domain.com/target`). Leave empty to display the title without a link.

### Title Image

- **Label:** Title Image
- **Type:** Upload field
- **Description:** Image displayed as part of the title.

### Description Title

- **Label:** Description Title
- **Type:** Textarea (3 lines)
- **Description:** A description or subtitle for the widget title.

### Address

- **Label:** Address
- **Type:** Textarea (3 lines)
- **Description:** The full address to display.

### Phone

- **Label:** Phone
- **Type:** Text field
- **Description:** Contact phone number.

### Email

- **Label:** Email
- **Type:** Text field
- **Description:** Contact email address (validated as an email format).

### Social Icon

- **Label:** Social Icon
- **Type:** Checkbox
- **Description:** Check to display social media icons. To configure the social list, go to Customizer → General → Social.

### Social Title

- **Label:** Social Title
- **Type:** Text field
- **Description:** Title for the social media section.

### Link Playstore

- **Label:** Link Playstore
- **Type:** URL field
- **Description:** If you have an Android app, enter the link to display a Play Store button.

### Link Apple Store

- **Label:** Link Apple Store
- **Type:** URL field
- **Description:** If you have an Apple app, enter the link to display an Apple Store button.

### Link Download Title

- **Label:** Link Download Title
- **Type:** Text field
- **Description:** Title for the app download section.

### Alignment

- **Label:** Alignment
- **Type:** Radio Image
- **Options:**
  - **Left:** Align left (icon: alignleft)
  - **Center:** Align center (icon: aligncenter)
  - **Right:** Align right (icon: alignright)
- **Description:** This setting applies only to style1 and list posts.

## Requirements
**BT Core plugin** installed and active. The widget will not function without this plugin. If the plugin is not installed, a warning message will appear.

## How to Use

1. Go to Appearance → Widgets in the WordPress dashboard
2. Find the Contact Info (JurnalPress) widget
3. Drag & drop the widget into the desired sidebar/widget area
4. Fill in all required fields
5. Click Save to store the settings

## Important Notes

- The **email field** is automatically validated for proper email format
- **All URL fields** are validated as valid URLs
- For social media icons, ensure you’ve configured the social list in **Customizer → General → Social**
- This widget uses the **Btcore_Widget_Options_Helper** helper class from the BT Core plugin

## Troubleshooting

### The widget does not show settings
Make sure the BT Core plugin is installed and active.

### Social media icons do not appear
  - Check the "Social Icon" option in the widget
  - Configure social media in **Customizer → General → Social**

### Store buttons do not appear
Ensure the Play Store and/or Apple Store URLs are filled in correctly.