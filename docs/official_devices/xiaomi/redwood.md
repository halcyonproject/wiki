---
slug: /devices/redwood
pagination_next: null
pagination_prev: null
title: "redwood*"
---

# POCO X5 Pro 5G / Redmi Note 12 Pro Speed Edition (redwood) - Discontinued
:::info
## Device Information

- **Device:** POCO X5 Pro 5G / Redmi Note 12 Pro Speed Edition
- **Release Date:** February 07, 2023
- **Chipset:** 	Qualcomm SM7325 Snapdragon 778G 5G
- **RAM:** 6 GB / 8 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.67 inches, AMOLED, 1B colors, Dolby Vision, HDR10+, 120Hz, 1080 x 2400 pixels
- **Rear Camera:** Triple 108 MP (main) + 8 MP (ultrawide) + 2 MP (telephoto macro)
- **Front Camera:** 16 MP
- **Halcyon Version:** Tithonia
- **Maintainer:** None
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
6. Flash the dtbo image onto your device using `fastboot flash dtbo dtbo.img`.
7. Flash the vendor_boot image onto your device using `fastboot flash vendor_boot vendor_boot.img`. 
8. Reboot into recovery mode by typing `fastboot reboot recovey` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_redwood-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
