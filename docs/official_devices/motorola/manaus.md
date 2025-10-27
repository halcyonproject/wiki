---
slug: /devices/manaus
pagination_next: null
pagination_prev: null
title: "Moorola Edge 40 Neo (manaus)*"
---

# Motorola Edge 40 Neo (manaus) - DEPRECATED
:::info
## Device Information

- **Device:** Motorola Edge 40 Neo
- **Release Date:** 2023, September 14
- **Chipset:** 	MediaTek MT6879 Dimensity 7030 
- **RAM:** 8 GB/12 GB
- **Storage:** 128/256 GB
- **Battery:** 5000 mAh
- **Display:** 6.55 inches, P-OLED, 144Hz, 1080x2400 pixels
- **Rear Camera:** 50 MP (wide) + 13 MP (ultrawide)
- **Front Camera:** 32 MP (wide)
- **Halcyon Version:** Bloom
- **Maintainer:** [Rex](https://github.com/rexix01)
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
Make sure to flash the firmware to avoid bricks. 
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the firmware using `fastboot update --skip-reboot manaus-a15-fw.zip`.
5. Do `fastboot reboot fastboot`.
6. Flash the boot image onto your device using `fastboot flash boot boot.img`.
7. And now finally flash the vendor boot image using `fastboot flash vendor_boot vendor_boot.img`.
8. Reboot into recovery mode by typing `fastboot reboot recovery`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_manaus-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
