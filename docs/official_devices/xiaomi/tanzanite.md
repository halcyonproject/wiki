---
slug: /devices/tanzanite
pagination_next: null
pagination_prev: null
title: "Redmi Note 14 4G (tanzanite)"
---

# Redmi Note 14 4G (tanzanite)

:::info

## Device Information

- **Device:** Redmi Note 14 4G
- **Release Date:** 2025, January 15
- **Chipset:** MediaTek Helio G99 (MT6789)
- **RAM:** 6 GB / 8 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 5500 mAh
- **Display:** 6.67 inches, AMOLED, 120Hz, 1080x2400 pixels
- **Rear Camera:** Triple 108 MP (wide) + 2 MP (macro) + 2 MP (depth)
- **Front Camera:** 20 MP (wide)
- **Halcyon Version:** Viola
- **Maintainer:** [Ido](https://github.com/xyzuniverse)
  :::

<a href="https://www.pling.com/p/1685941/" class="button button--primary">Get builds - Beta</a>

## Installation Guide

:::caution
Make sure you have fully charged battery and backup your data before proceeding.
:::

### Installing Recovery

1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash empty super image onto your device using `fastboot wipe-super super_empty.img`.
5. Flash the boot image onto your device using `fastboot flash vendor_boot --slot=all vendor_boot.img`.
6. Reboot into recovery mode by typing `fastboot reboot` in command line or by holding `Power + Vol Up`.

### Installing ROM

1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:

```
adb sideload halcyon_tanzanite-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
