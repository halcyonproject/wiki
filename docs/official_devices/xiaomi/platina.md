---
slug: /devices/platina
pagination_next: null
pagination_prev: null
title: "Mi 8 Lite (platina)"
---

# Mi 8 Lite (platina)
:::info
## Device Information

- **Device:** Xiaomi Mi 8 Lite
- **Release Date:** September 2018
- **Chipset:** Qualcomm SDM660 Snapdragon 660 (14 nm)
- **RAM:** 4 GB / 6 GB
- **Storage:** 64 GB / 128 GB
- **Battery:** 3350 mAh
- **Display:** 6.26 inches, IPS LCD, 1080 x 2280 pixels
- **Rear Camera:** Dual 12 MP (main, f/1.9, dual pixel PDAF) + 2 MP (auxiliary)
- **Front Camera:** 24 MP
- **Halcyon Version:** Bloom
- **Maintainer:** Alif Fathur
:::

<a href="https://get.hlcyn.org/builds/platina/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
- Make sure to backup your data before proceeding.
- Firmware version V12.0.3.0.QDTMIXM is required.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery onto your device using `fastboot flash recovery recovery.img`.

### Flashing Preparation
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Download `super_empty.img` from Download page.
4. Flash super empty tp enable retrofit dynamic partition
```bash
fastboot wipe-super super_empty.img
```
5. Reboot into recovery mode by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_platina-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.