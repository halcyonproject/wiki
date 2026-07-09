---
slug: /devices/husky
pagination_next: null
pagination_prev: null
title: "Google Pixel 8 Pro (husky)"
---

# Google Pixel 8 Pro (husky)

:::info

## Device Information

- **Device:** Google Pixel 8 Pro (husky)
- **Release Date:** 2023, October 12
- **Chipset:** Google Tensor G3
- **RAM:** 12GB
- **Storage:** 128GB / 256GB / 512GB / 1TB
- **Battery:** 5050 mAh
- **Display:** 6.7 inches, LTPO OLED, 120Hz, 1344x2992 pixels
- **Rear Camera:** 50 MP (wide), 48 MP (periscope telephoto, 5x optical zoom), 48 MP (ultrawide)
- **Front Camera:** 10.5MP (ultrawide)
- **Halcyon Version:** Bloom
- **Maintainer:** herobuxx  
  :::

<a href="https://get.hlcyn.org/builds/husky/" class="button button--primary">Get builds</a>

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
adb sideload ota-halcyon_husky-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.