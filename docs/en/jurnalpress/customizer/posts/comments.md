---
title: Comments (Module) – JurnalPress Theme
description: Settings for the Comments section on Single Posts to display and manage the comment area after article content.
outline: deep
---

# Comments (Module) – JurnalPress Theme

The comment area allows readers to respond to articles. However, the display and functionality of comments **depend heavily** on WordPress global settings and per‑post comment settings.

The **Comments** section in the Customizer acts as:
- A reminder for comment status
- A quick shortcut to main comment settings

## Lokasi Pengaturan
```
Appearance → Customize → Single Posts → After Content Element → Comments
```

## Notification: Comment Settings

### Description

This section provides a **notification message** with important information about comments.

The message reminds you that:

- Comments must be enabled globally in WordPress
- Comments must also be enabled on individual posts

If either is disabled, the **Comments section will not be displayed** on Single Post pages.

### Notification Message

> **Note:**  
> To see comments section, make sure that comments are enabled in Discussion Settings and for individual posts.  
> For settings comment sections, please go to Customizer → General → Comment.

### Action Link

This notification provides a quick link to comment settings:

- **Text:** `Please go to comment settings`
- **Target:** Customizer → General → Comment
- **Behavior:** Opens in the Customizer (no new tab)

This link helps users quickly:
- Enable comments
- Configure global comment structure and display

## Dependencies & Requirements

To show the **Comments** section on Single Posts, ensure:

1. **Global comments are enabled**
   - WordPress → Settings → Discussion

2. **Comments are enabled on the post**
   - Edit Post → Discussion → Allow Comments

3. **Theme support**
   - The theme supports the comments template (`comments_template()`)

## Notes

- This section **does not have direct toggles or styling options**
- All technical comment settings are managed via:
  - **Customizer → General → Comment**
  - **WordPress Discussion Settings**
- Intended as a reminder and quick navigation, not a visual configuration

## Related Sections

- **Single Posts → After Content Element → Comments**
- **Customizer → General → Comment**
- **WordPress → Settings → Discussion**

## Summary

The **Comments** section bridges Single Post pages with global comment settings. With its notification and shortcut, users can ensure comments are active and functioning correctly without manually hunting for settings.
