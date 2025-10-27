---
slug: /devices/citrus
pagination_next: null
pagination_prev: null
title: "POCO M3 (citrus)"
---

# POCO M3 (citrus)
:::info
## Device Information

- **Device:** POCO M3
- **Release Date:** January 08, 2021
- **Chipset:** 	Qualcomm SM6115 Snapdragon 662
- **RAM:** 4 GB / 6 GB
- **Storage:** 64 GB / 128 GB
- **Battery:** 6000 mAh
- **Display:** 6.53 inches, IPS LCD, 1080 x 2340 pixels
- **Rear Camera:** Quad 48 MP (main) + 2 MP (macro) + 2 MP (depth)
- **Front Camera:** 8 MP
- **Halcyon Version:** Tithonia, Ursinia, Viola, Bloom
- **Maintainer:** herobuxx
:::

<a href="https://get.hlcyn.co/builds/citrus/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the recovery onto your device using `fastboot flash recovery recovery.img`.
6. Reboot into recovery mode by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_citrus-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.