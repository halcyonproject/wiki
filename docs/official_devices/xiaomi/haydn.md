---
slug: /devices/haydn
pagination_next: null
pagination_prev: null
title: "Mi 11i/11X Pro/Redmi K40 Pro+ (haydn) - Discontinued*"
---

# Mi 11i/11X Pro/Redmi K40 Pro+ (haydn) - Discontinued
:::info
## Device Information

- **Device:** Xiaomi Mi 11i/11X Pro/Redmi K40 Pro+
- **Release Date:** May 05, 2021
- **Chipset:** 	Qualcomm SM8350 Snapdragon 888 5G
- **RAM:** 8 GB / 12 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 4520 mAh
- **Display:** 6.67 inches, Super AMOLED, 120Hz, HDR10+, 1080 x 2400 pixels
- **Rear Camera:** Triple 108 MP (main) + 8 MP (ultrawide) + 5 MP (telephoto macro)
- **Front Camera:** 20 MP
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
8. Reboot into recovery mode by typing `fastboot reboot recovey` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_haydn-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
