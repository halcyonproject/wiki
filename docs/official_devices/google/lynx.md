---
slug: /devices/lynx
pagination_next: null
pagination_prev: null
title: "Google Pixel 7a (lynx)"
---

# Google Pixel 7a (lynx)

:::info

## Device Information

- **Device:** Google Pixel 7a (lynx)
- **Release Date:** 2023, May 10
- **Chipset:** Google Tensor G2
- **RAM:** 8GB
- **Storage:** 128GB
- **Battery:** 4385 mAh
- **Display:** 6.1 inches, OLED, HDR, 90Hz, 1080x2400 pixels
- **Rear Camera:** 64 MP (wide), 13 MP (ultrawide)
- **Front Camera:** 13 MP (ultrawide)
- **Halcyon Version:** Bloom
- **Maintainer:** herobuxx, binzet  
  :::

<a href="https://get.hlcyn.org/builds/lynx/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Before proceeding, please ensure you are on the Android 16 Stock ROM.
:::

### Installing Recovery

1. Enter fastboot mode using the key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery image onto your device using `fastboot flash vendor_boot vendor_boot.img`.
5. Reboot into recovery mode by using the volume keys to navigate the bootloader menu and the power key to select the **Recovery** option.

### Installing ROM

1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:

```
adb sideload ota-halcyon_lynx-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.