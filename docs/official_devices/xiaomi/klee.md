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
- **Maintainer:** [Ido](https://github.com/xyzuniverse)
  :::

<a href="https://get.hlcyn.org/builds/klee/" class="button button--primary">Get builds</a>

## Installation Guide

:::caution
Before proceeding, please remove all lockscreen security (PIN, password, pattern, and fingerprint) and ensure you have backed up your data. Keeping any lockscreen credentials active while switching ROMs can cause the fingerprint sensor to stop working, and in many cases this issue cannot be easily recovered. We are not responsible for any malfunction resulting from not following these steps. Firmware (OS3.0.5.0.WPJMIXM) is required.
:::

### Fastboot package installation

If you want to install using the Fastboot package, the complete installation guide is available [here](/fastboot-package). Otherwise, you can follow the instructions below to flash via recovery using ADB sideload.

### Installing Recovery

1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery image onto your device using `fastboot flash vendor_boot vendor_boot.img`.
5. Reboot into recovery mode by typing `fastboot reboot` in command line and then hold `Power + Vol Up` to boot to recovery.

### Installing ROM

1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:

```
adb sideload ota-halcyon_klee-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
