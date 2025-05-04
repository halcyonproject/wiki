---
slug: /devices/fleur
pagination_next: null
pagination_prev: null
title: "Redmi Note 11S / POCO M4 Pro (fleur)*"
---
# Redmi Note 11S / POCO M4 Pro (fleur) - Discontinued
:::info
## Device Information
- **Device:** Redmi Note 11S / POCO M4 Pro
- **Release Date:** 2022, February 28
- **Chipset:** 	MediaTek Helio G96 (MT6781)
- **RAM:** 6 GB / 8 GB
- **Storage:** 64 GB / 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.43 inches, AMOLED, FHD+, 90Hz, 1080x2400 pixels
- **Rear Camera:** Triple 64 MP (main) + 8 MP (ultrawide) + 2 MP (macro)
- **Front Camera:** 16 MP (wide)
- **Halcyon Version:** Ursinia, Viola
- **Maintainer:**
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>
<a href="https://www.pling.com/p/1685941/" class="button button--primary">Get builds - Beta</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding. If you're from 4.14 based ROMs make sure you have flashed latest HyperOS Global firmware first!
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
adb sideload halcyon_fleur-xxxxx.zip
```
## Troubleshooting
If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.