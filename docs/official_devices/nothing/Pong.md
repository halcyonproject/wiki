---
slug: /devices/Pong
pagination_next: null
pagination_prev: null
title: "Phone 2 (Pong)"
---

# Nothing Phone 2 (Pong)
:::info
## Device Information

- **Device:** Nothing Phone 2 
- **Release Date:** 11 July 2023
- **Chipset:** 	Snapdragon 8+ Gen 1
- **RAM:** 8 GB / 12 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 4700 mAh
- **Display:** 6.7 inches, FHD+ LTPO AMOLED, 120Hz, 1080x2412 pixels
- **Rear Camera:** Main 50MP (Sony IMX890 sensor) + Ultrawide 50MP (Samsung JN1 sensor) 
- **Front Camera:** 32MP
- **Halcyon Version:** Ursinia
- **Maintainer:** AgBKartikey
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter bootloader mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash recovery recovery.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_Pong-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
