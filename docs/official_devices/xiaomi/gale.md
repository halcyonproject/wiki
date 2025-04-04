---
slug: /devices/gale
pagination_next: null
pagination_prev: null
title: "Redmi 13C / POCO C65 (gale/gust)"
---
# Redmi 13C / POCO C65 (gale/gust)
:::info
## Device Information
- **Device:** Redmi 13C / POCO C65
- **Release Date:** 2023, November 10
- **Chipset:** 	MediaTek Helio G85 (MT6768)
- **RAM:**  4 GB / 6 GB / 8 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.74 inches, IPS LCD, 90Hz, 720x1600 pixels
- **Rear Camera:** Triple 50 MP (wide) + 2 MP (macro)
- **Front Camera:** 8 MP (wide)
- **Halcyon Version:** Viola
- **Maintainer:** [wulan17](https://github.com/wulan17)
:::
<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>
## Installation Guide
:::caution
Make sure to backup your data before proceeding!
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
adb sideload halcyon_gale-xxxxx.zip
```
## Troubleshooting
If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
