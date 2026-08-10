---
slug: /devices/gale
pagination_next: null
pagination_prev: null
title: "Redmi 13C/POCO C65 (gale)"
---

# Redmi 13C/POCO C65 (gale)

:::info
## Device Information

- **Device:** Redmi 13C/POCO C65
- **Release Date:** 10 November, 2023
- **Chipset:** 	Mediatek Helio G85
- **RAM:** 4 GB / 6 GB / 8 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 109.7 cm² (6.74 Inches), 450 nits (typ), 600 nits (HBM), 720 x 1600 pixels, 20:9 ratio (~260 ppi density)
- **Rear Camera:** 50MP (main), 2MP (macro)
- **Front Camera:** 8 MP
- **Halcyon Version:** Bloom
- **Maintainer:** wulan17
:::

<a href="https://get.hlcyn.org/builds/gale" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
- Make sure to backup your data before proceeding.
- Firmware with 4.19 kernel is required (OS1.0.5.0.UGPMIXM is recommended).
:::

### Method 1: Web Flasher (Recommended)
The easiest way to install Halcyon is via our browser-based Web Flasher. 

1. Reboot your device into **Fastboot mode** (Power + Volume Down).
2. Connect your device to your PC via USB.
3. Open the [Halcyon Web Flasher](https://flash.hlcyn.org) in a Chromium-based browser (Chrome, Edge, or Brave).
4. Select **Redmi 13C/POCO C65 (gale)** from the device list.
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
adb sideload ota-halcyon_gale-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
