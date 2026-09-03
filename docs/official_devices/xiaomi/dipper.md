---
slug: /devices/dipper
pagination_next: null
pagination_prev: null
title: "Xiaomi Mi 8 (dipper)"
---

# Xiaomi Mi 8 (dipper)
:::info
## Device Information

- **Device:** Xiaomi Mi 8
- **Release Date:** July, 2018
- **Chipset:** Qualcomm Snapdragon 845
- **RAM:** 6 GB / 8 GB
- **Storage:** 64 GB, 128 GB
- **Battery:** 3400 mAh
- **Display:** 6.21 inches, Super AMOLED, 1080 x 2248 pixels
- **Rear Camera:** 12 MP (f/1.8, 1/2.55", 1.4 μm, 4-axis OIS, dual-pixel PDAF) + 12 MP (f/2.4, 1/3.4", 1.0 μm), 2x optical zoom, dual pixel phase detection autofocus, dual-LED flash
- **Front Camera:** 20 MP (f/2.0, 1.8 μm), 1080p
- **Halcyon Version:** Bloom
- **Maintainer:** neroices
:::

<a href="https://get.hlcyn.org/builds/dipper/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
- Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery onto your device using `fastboot flash recovery recovery.img`.
5. Reboot into recovery mode by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_dipper-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.