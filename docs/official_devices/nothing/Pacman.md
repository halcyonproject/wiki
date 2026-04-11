---
slug: /devices/Pacman
pagination_next: null
pagination_prev: null
title: "Phone (2a) (Pacman)"
---

# Nothing Phone (2a) (Pacman)

:::info

## Device Information

- **Device:** Nothing Phone (2a)
- **Release Date:** 12 March 2024
- **Chipset:** MediaTek Dimensity 7200 Pro
- **RAM:** 8 GB / 12 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.7 inches, FHD+ LTPO AMOLED, 120Hz, 1084x2412 pixels
- **Rear Camera:**
  - 50 MP, f/1.9, 24mm (wide), 1/1.56", 1.0µm, PDAF, OIS
  - 50 MP, f/2.2, 114˚ (ultrawide), 1/2.76", 0.64µm
- **Front Camera:** 32 MP, f/2.2, (wide), 1/2.74", 0.8µm
- **Halcyon Version:** Bloom
- **Maintainer:** fukiame
:::

<a href="https://get.hlcyn.org/builds/Pacman/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter bootloader mode by holding **Power + Volume Up**, then select **FASTBOOT MODE**.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device using `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot boot.img`.
5. Flash the vendor boot image onto your device using `fastboot flash vendor_boot vendor_boot.img`
6. Reboot into recovery mode by typing `fastboot reboot recovery` in command line.

### Installing the ROM
1. Download the latest Halcyon build.
2. Reboot into recovery mode.
3. Perform a **Format Data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM:
```
adb sideload ota-halcyon_Pacman-xxxxx.zip
```

## Troubleshooting
If you encounter any issues during or after installation, feel free to ask in our chat group for help and solutions to common problems.
