---
slug: /devices/stone
pagination_next: null
pagination_prev: null
title: "POCO X5 5G / Redmi Note 12 5G (stone)"
---

# POCO X5 5G / Redmi Note 12 5G(stone)
:::info
## Device Information

- **Device:** POCO X5 5G / Redmi Note 12 5G
- **Release Date:** Feb 07, 2023 / Jan 11, 2023
- **Chipset:** 	Qualcomm SM6375 Snapdragon 695 5G / Qualcomm SM4375 Snapdragon 4 Gen 1
- **RAM:** 6 GB / 8 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.67 inches, Super AMOLED, 120Hz, 1080 x 2400 pixels
- **Rear Camera:** Triple 48 MP (main) + 8 MP (ultrawide) + 2 MP (macro)
- **Front Camera:** 13 MP
- **Halcyon Version:** Ursinia
- **Maintainer:**
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the boot image onto your device using `fastboot flash boot boot.img`.
8. Reboot into recovery mode by typing `fastboot reboot recovey` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_stone-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
