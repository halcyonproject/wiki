---
slug: /devices/rock
pagination_next: null
pagination_prev: null
title: "Redmi 11 Prime / POCO M5 (rock/stone)"
---

# Redmi 11 Prime / POCO M5 (rock/stone)

:::info

## Device Information

- **Device:** Redmi 11 Prime / POCO M5
- **Release Date:** 2022, September 05
- **Chipset:** MediaTek Helio G99 (MT6789)
- **RAM:** 4 GB / 6 GB
- **Storage:** 64 GB / 128 GB
- **Battery:** 5000 mAh
- **Display:** 6.58 inches, IPS LCD, 90Hz, 1080x2408 pixels
- **Rear Camera:** Triple 50 MP (wide) + 2 MP (macro) + 2 MP (depth)
- **Front Camera:** 5 MP (wide)
- **Halcyon Version:** Viola
- **Maintainer:** [Ido](https://github.com/xyzuniverse)
  :::

<a href="https://www.pling.com/p/1685941/" class="button button--primary">Get builds</a>

## Installation Guide

:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery

1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash vendor_boot --slot=all vendor_boot.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM

1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:

```
adb sideload halcyon_rock-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
