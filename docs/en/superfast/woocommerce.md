---
title: How to Import and Configure WooCommerce in Superfast
outline: deep
---

# How to Import and Configure WooCommerce in Superfast

This documentation explains how to enable WooCommerce layouts in Superfast, from plugin installation to store page setup.

## Video Tutorial

Please watch the tutorial video below for a complete guide:

<YouTubeEmbed video-id="vDOeM8AMn2Y" />

## 1. Preparation

- Ensure the Superfast theme is installed and active.

## 2. Install the WooCommerce Plugin

1. Go to **Plugins → Add New**.
2. In the search field, type **WooCommerce**.
3. Select the official WooCommerce plugin (usually appears at the top).
4. Click **Install Now** then **Activate**.

After activation, WooCommerce runs a setup wizard.

## 3. Skip Automatic Page Setup

In the WooCommerce wizard:

- Fill store details as needed.
- When you reach the page creation step (Shop, Cart, Checkout, My Account), you can **skip** automatic page creation because:
  - These pages will be imported via Superfast’s **Import Demo Data**.

## 4. Import WooCommerce Demo Layout

1. Go to **Appearance → Import Demo Data**.
2. After WooCommerce is installed, an additional option appears:
   - For example, **WooCommerce Layout** or a specific store layout.
3. Choose the WooCommerce demo.
4. Click **Import** and confirm in the popup.
5. Wait until the process completes.

When finished, Superfast will:

- Add store pages (Shop), Cart, Checkout, and My Account.
- Apply product layout settings according to the demo.

## 5. Configure Pages in WooCommerce Settings

Go to **WooCommerce → Settings**.

### Products Tab → Display

- Under **Shop page**, select the **Shop** page.
- Configure product display on the shop page as needed:
  - Grid/list layout.
  - Number of products per page.

### Checkout Tab

Under **Checkout pages**:

- **Cart page**: select the **Cart** page.
- **Checkout page**: select the **Checkout** page.

### Accounts Tab

Under **My Account Page**:

- Select the **My Account** page.

Save changes after configuring each tab.

## 6. Add Products

After WooCommerce pages are ready:

1. Go to **Products → Add New**.
2. Enter product title, description, price, category, and product image.
3. Choose the product type (simple, variable, etc.).
4. Click **Publish**.

Products will appear on the shop page according to the Superfast layout.

## 7. Conclusion

If errors occur or pages don’t look right:

- Recheck page assignments in WooCommerce Settings.
- **Re‑save permalinks** in **Settings → Permalinks**.
- Ensure no other plugins conflict with WooCommerce or Superfast.