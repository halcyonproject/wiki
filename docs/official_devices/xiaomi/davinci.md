---
slug: /devices/davinci
pagination_next: null
pagination_prev: null
title: "Xiaomi 9T (davinci)*"
---

# Xiaomi 9T (davinci)
:::info
## Device Information

- **Device:** Xiaomi 9T 
- **Release Date:** 
- **Chipset:** 	Qualcomm Snapdragon 730 (SM7150-AA)
- **RAM:** 6 GB
- **Storage:** 128 GB (UFS 2.0)
- **Battery:** 4000 mAh Non-removable Li-Po
- **Display:** 6.39 inches, 1080 x 2340 pixels
- **Rear Camera:** 48MP wide camera, 8MP telephoto camera, 13MP ultra wide-angle camera
- **Front Camera:** 16 MP (wide)
- **Halcyon Version:** Viola
- **Maintainer:** superxorn
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot recovery.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_garnet-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems
