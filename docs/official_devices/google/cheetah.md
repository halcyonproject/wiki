---
slug: /devices/cheetah
pagination_next: null
pagination_prev: null
title: "Google Pixel 7 Pro (cheetah)"
---

# Google Pixel 7 Pro (cheetah)

:::info

## Device Information

- **Device:** Google Pixel 7 Pro (cheetah)
- **Release Date:** 2022, October 13
- **Chipset:** Google Tensor G2
- **RAM:** 8GB / 12GB
- **Storage:** 128GB / 256GB / 512GB
- **Battery:** 5000 mAh
- **Display:** 6.7 inches, LTPO AMOLED, 120Hz, 1440x3120 pixels
- **Rear Camera:** 50 MP (wide), 48 MP (periscope telephoto, 5x optical zoom), 12 MP (ultrawide)
- **Front Camera:** 10.8 MP (ultrawide)
- **Halcyon Version:** Bloom
- **Maintainer:** herobuxx  
  :::

<a href="https://get.hlcyn.org/builds/cheetah/" class="button button--primary">Get builds</a>

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
adb sideload ota-halcyon_cheetah-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.