---
slug: /devices/klee
pagination_next: null
pagination_prev: null
title: "POCO X8 Pro / Redmi Turbo 5 (klee)"
---

# POCO X8 Pro / Redmi Turbo 5 (klee)

:::info

## Device Information

- **Device:** POCO X8 Pro / Redmi Turbo 5 (klee)
- **Release Date:** 2026, March 17 (POCO) / 2026, January 29 (Redmi)
- **Chipset:** Mediatek Dimensity 8500 Ultra
- **RAM:** 8GB / 12GB / 16GB (Redmi variant)
- **Storage:** 256GB / 512GB
- **Battery:** 6500 mAh / 7560 mAh (Redmi variant)
- **Display:** 6.67 inches, AMOLED, HDR10+, 120Hz, 1220x2712 pixels
- **Rear Camera:** 50 MP (wide), 8MP (ultrawide)
- **Front Camera:** 20 MP (wide)
- **Halcyon Version:** Bloom
- **Maintainer:** [khayloaf](https://github.com/kylieeXD)
  :::

<a href="https://get.hlcyn.org/builds/klee/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Before proceeding, please remove all lockscreen security (PIN, password, pattern, and fingerprint) and ensure you have backed up your data. Keeping any lockscreen credentials active while switching ROMs can cause the fingerprint sensor to stop working, and in many cases this issue cannot be easily recovered. We are not responsible for any malfunction resulting from not following these steps. Firmware (OS3.0.5.0.WPJMIXM) is required.
:::

### Method 1: Web Flasher (Recommended)
The easiest way to install Halcyon is via our browser-based Web Flasher. 

1. Reboot your device into **Fastboot mode** (Power + Volume Down).
2. Connect your device to your PC via USB.
3. Open the [Halcyon Web Flasher](https://flash.hlcyn.org) in a Chromium-based browser (Chrome, Edge, or Brave).
4. Select **POCO X8 Pro / Redmi Turbo 5 (klee)** from the device list.
5. Click **Connect Device** and follow the on-screen instructions to complete the installation.

### Method 2: Fastboot Package (Manual)
If you prefer to flash using a manual script from your computer, you can use the Fastboot package. Refer to [this document](/fastboot-package) for more information on how to flash using Fastboot packages.

### Method 3: Recovery Installation (ADB Sideload)
This method involves flashing a custom recovery first, then sideloading the ROM package.

#### Step 1: Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash vendor_boot --slot=all vendor_boot.img`.
5. Reboot into recovery mode by typing `fastboot reboot` in command line then hold `Power + Vol Up`.

#### Step 2: Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_klee-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
