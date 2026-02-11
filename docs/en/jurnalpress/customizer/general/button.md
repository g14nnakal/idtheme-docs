---
title: Button (General) - JurnalPress Theme
description: Complete documentation for Button settings in the JurnalPress theme WordPress Customizer.
outline: deep
---

# Button (General) - JurnalPress Theme

The **Button** section in the JurnalPress Customizer configures the global appearance of all button elements in the theme, including color, padding, border, radius, and box shadow.  
These settings help maintain consistent button design across the entire website.

## Settings Location

```
Appearance → Customize → General → Button
```

## Color

Configure base and hover colors for buttons.

### Color Options
- **Background**  
  Button background color in normal state.
- **Text Color**  
  Button text/link color in normal state.
- **Background Hover**  
  Button background color on hover.
- **Text Hover Color**  
  Button text color on hover.

> Tips: Use sufficient color contrast so buttons remain readable and draw attention.

## Border Radius

Adjust the corner roundness of buttons.

### Settings
- Supports per-side configuration (top, right, bottom, left).
- Common values:
  - `0px` → sharp corners
  - `4px – 6px` → slightly rounded (recommended)
  - `20px+` → pill/rounded buttons

## Padding

Control spacing between content (text/icon) and the button edges.

### Settings
- **Top**
- **Right**
- **Bottom**
- **Left**

Proper padding makes buttons easier to click and visually proportional.

## Border

Configure button borders, including hover effects.

### Border Options
- **Enable Border**  
  Enable or disable the border.
- **Border Color**  
  Border color in normal state.
- **Border Hover Color**  
  Border color on hover.
- **Border Width**  
  Border thickness per side.
- **Border Style**  
  Border line style (`solid`, `dashed`, `dotted`, etc.).

> Note: Border hover is active if `enablehover` is enabled.

## Box Shadow

Add shadow effects to buttons to provide visual depth.

### Box Shadow Options
- **Enable**  
  Enable or disable shadow.
- **Shadow Color**  
  Shadow color.
- **Horizontal Offset**  
  Horizontal shadow position.
- **Vertical Offset**  
  Vertical shadow position.
- **Blur**  
  Shadow blur amount.
- **Spread**  
  Shadow spread.

### Examples
- Light shadow for modern, minimal buttons
- Larger shadow for CTA (Call To Action) buttons

## Design Recommendations

- Use colors consistent with **Global Color**.
- Avoid overly large box shadows that distract focus.
- Ensure sufficient padding for comfortable clicking on mobile.

## Conclusion

With these Button Customizer settings, you can adjust button appearance globally without writing additional CSS. Ideal for maintaining UI consistency and site branding.