---
slug: /devices/bangkk
pagination_next: null
pagination_prev: null
title: "Moto G84 5G (bangkk)*"
---

# Moto G84 5G (bangkk)
:::info
## Device Information

- **Device:** Moto G84 5G
- **Release Date:** 2023, September 08
- **Chipset:** 	Qualcomm SM6375 Snapdragon 695 5G
- **RAM:** 8 GB/12 GB
- **Storage:** 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.5 inches, P-OLED, 120Hz, 1080x2400 pixels
- **Rear Camera:** 50 MP (wide) + 8 MP (ultrawide)
- **Front Camera:** 16 MP (wide)
- **Halcyon Version:** Viola
- **Maintainer:** [Rex](https://github.com/rexix01)
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with fastboot devices`.
4. Flash the boot image onto your device using fastboot flash boot boot.img`.
5. Flash the dtbo image using  fastboot flash dtbo dtbo.img .
6. And now finally flash the vendor boot image using fastboot flash vendor_boot vendor_boot.img .
7. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_bangkk-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
