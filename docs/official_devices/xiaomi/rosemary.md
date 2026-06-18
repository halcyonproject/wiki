---
slug: /devices/rosemary
pagination_next: null
pagination_prev: null
title: "Redmi Note 10S / 11SE India / POCO M5s (rosemary)"
---

# Redmi Note 10S / 11SE India / POCO M5s (rosemary)

:::info
## Device Information

- **Device:** Redmi Note 10S / 11SE India / POCO M5s
- **Release Date:** 10 March, 2021
- **Chipset:** 	Mediatek Helio G95
- **RAM:** 4 GB / 6 GB / 8 GB
- **Storage:** 64 GB / 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 16.33cm (6.43 Inches), 1100 nits peak brightness, 1080 x 2400 pixels, 19.5:9 ratio (~440 ppi density)
- **Rear Camera:** 64MP(main) + 8MP(Ultra-Wide) + 2MP(Macro) + 2MP(Depth)
- **Front Camera:** 13 MP
- **Halcyon Version:** Bloom
- **Maintainer:** probaero
:::

<a href="https://get.hlcyn.org/builds/rosemary" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
- Make sure to backup your data before proceeding.
- Firmware version 14.0.17.0.TFFMIXM is required.
:::

### Method 1: Web Flasher (Recommended)
The easiest way to install Halcyon is via our browser-based Web Flasher. 

1. Reboot your device into **Fastboot mode** (Power + Volume Down).
2. Connect your device to your PC via USB.
3. Open the [Halcyon Web Flasher](https://flash.hlcyn.org) in a Chromium-based browser (Chrome, Edge, or Brave).
4. Select **Redmi Note 10S / 11SE India / POCO M5s (rosemary)** from the device list.
5. Click **Connect Device** and follow the on-screen instructions to complete the installation.

### Method 2: Fastboot Package (Manual)
If you prefer to flash using a manual script from your computer, you can use the Fastboot package. Refer to [this document](/fastboot-package) for more information on how to flash using Fastboot packages.

### Method 3: Recovery Installation (ADB Sideload)
This method involves flashing a custom recovery first, then sideloading the ROM package.

#### Step 1: Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery onto your device using `fastboot flash boot boot.img`.
5. Reboot into recovery mode by using `fastboot reboot recovery`.

#### Step 2: Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_rosemary-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
