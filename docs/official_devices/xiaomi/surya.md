---
slug: /devices/surya
pagination_next: null
pagination_prev: null
title: "POCO X3 / POCO X3 NFC (surya)"
---

# POCO X3 / POCO X3 NFC (surya)
:::info
## Device Information

- **Device:** POCO X3 / POCO X3 NFC 
- **Release Date:** 
- **Chipset:** 	Qualcomm SM7150-AC Snapdragon 732G
- **RAM:** 6GB / 8GB
- **Storage:** 64GB / 128GB
- **Battery:** 5160 / 6000 mAh
- **Display:** 6.67 inches, IPS LCD, HDR10, 120Hz, 1080x2400 pixels
- **Rear Camera:** Quad 64 MP (wide) + 13 MP (ultrawide) + 2 MP (macro) + 2 MP (depth)
- **Front Camera:** 20 MP (wide)
- **Halcyon Version:** Ursinia, Viola, Bloom
- **Maintainer:** rktdnt, herobuxx
:::

<a href="https://get.hlcyn.org/builds/surya/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Method 1: Web Flasher (Recommended)
The easiest way to install Halcyon is via our browser-based Web Flasher. 

1. Reboot your device into **Fastboot mode** (Power + Volume Down).
2. Connect your device to your PC via USB.
3. Open the [Halcyon Web Flasher](https://flash.hlcyn.org) in a Chromium-based browser (Chrome, Edge, or Brave).
4. Select **POCO X3 / POCO X3 NFC (surya)** from the device list.
5. Click **Connect Device** and follow the on-screen instructions to complete the installation.

### Method 2: Fastboot Package (Manual)
If you prefer to flash using a manual script from your computer, you can use the Fastboot package. Refer to [this document](/fastboot-package) for more information on how to flash using Fastboot packages.

### Method 3: Recovery Installation (ADB Sideload)
This method involves flashing a custom recovery first, then sideloading the ROM package.

#### Step 1: Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery image onto your device using `fastboot flash recovery recovery.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

#### Step 2: Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_surya-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
