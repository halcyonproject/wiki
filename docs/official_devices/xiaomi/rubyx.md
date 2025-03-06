---
slug: /devices/rubyx
pagination_next: null
pagination_prev: null
title: "Redmi Note 12 Pro 5G / Note 12 Pro+ 5G/Discovery (rubyx)"
---

# Redmi Note 12 Pro 5G / Note 12 Pro+ 5G/Discovery (rubyx)

:::info

## Device Information

- **Device:** Redmi Note 12 Pro 5G / Note 12 Pro+ 5G/Discovery
- **Release Date:** 2022, October 27
- **Chipset:** MediaTek Dimensity 1080 (MT6877)
- **RAM:** 8 GB / 12 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.67 inches, AMOLED, HDR10+, 120Hz, 1080x2400 pixels
- **Rear Camera:** Triple 50 MP (main) + 8 MP (ultrawide) + 2 MP (macro)
- **Front Camera:** 16 MP (wide)
- **Halcyon Version:** Viola
- **Maintainer:** [Ido](https://github.com/xyzuniverse)
  :::

<a href="https://www.pling.com/p/1685941/" class="button button--primary">Get builds - Beta</a>

## Installation Guide

:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery

1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot boot.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM

1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:

```
adb sideload halcyon_rubyx-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
