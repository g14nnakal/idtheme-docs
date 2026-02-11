---
title: How to Add Shipping Costs in WooCommerce Using Woongkir
outline: deep
---

# How to Add Shipping Costs in WooCommerce Using Woongkir

::: danger Warning
The tutorial link is outdated because the Woongkir plugin is no longer updated and has been removed from the WordPress repository.
:::

## Video Tutorial

Here is the full tutorial video:
<YouTubeEmbed video-id="bTVbRxyjAA4" />

## Prerequisites
- WooCommerce installed and basic configuration completed.
- Consistent product weight unit (grams or kg).

## Woongkir Installation
1. Go to **Plugins → Add New**.
2. Search for “Woongkir”.
3. Click **Install** then **Activate**.

Woongkir plugin link: [https://wordpress.org/plugins/woongkir/](https://wordpress.org/plugins/woongkir/)

## Woongkir Settings
Go to **WooCommerce → Woongkir** or **WooCommerce → Settings → Woongkir** (depending on version/plugin).

- Shipping Origin Province = Store’s province.
- Shipping Origin City = Store’s city/regency.
- Subdistrict/Kecamatan (if available) = Store’s district.
- Postcode = Store’s postal code.
- Weight Unit = Ensure it matches WooCommerce settings (grams recommended for RajaOngkir accuracy).
- RajaOngkir API Key = Enter the API key from **rajaongkir.com**.
- RajaOngkir Account Type = Choose based on your plan (Starter/Basic/Pro).
- Couriers = Enable couriers you use (JNE, TIKI, POS, etc.).
- Services = Choose services to display (REG, YES, OKE, etc.) if available.
- Optional: Enable shipping cost cache if provided by the plugin, for better performance.

Click **Save changes**.

## Add Method in Shipping Zones
1. Go to **WooCommerce → Settings → Shipping**.
2. Create or select a **Shipping zone** (e.g., Indonesia).
3. Click **Add shipping method**.
4. Choose **Woongkir** then **Add method**.
5. Open the **Woongkir** method and adjust additional options (if any).

## Testing
- Add a product to the cart, open the **Checkout** page.
- Enter the customer’s complete address (province, city/district, postal code).
- Ensure the shipping cost appears according to the enabled courier services.

## Tips & Troubleshooting
- Shipping cost not showing/0: check API key, enabled couriers/services, complete address, and product weight unit.
- Limited services: adjust courier services in Woongkir settings and ensure the area is covered.
- Performance: enable shipping cost cache (if available) and reduce repeated API calls.