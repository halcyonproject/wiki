---
slug: /devices/beryllium
pagination_next: null
pagination_prev: null
title: "POCO F1 (beryllium)"
---

# POCO F1 (beryllium)
:::info
## Device Information

- **Device:** POCO F1
- **Release Date:** August 22, 2018
- **Chipset:** Qualcomm Snapdragon 845 Octa-core
- **RAM:** 6 GB / 8 GB
- **Storage:** 64 GB, 128 GB, 256 GB
- **Battery:** 4000 mAh
- **Display:** 6.18 inches, IPS LCD, 1080 x 2246 pixels
- **Rear Camera:** Dual 12 MP (main, ƒ/1.9) + 5 MP (depth)
- **Front Camera:** 8 MP
- **Halcyon Version:** Bloom
- **Maintainer:** ibratabian17
:::

<a href="https://get.hlcyn.co/builds/beryllium/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the recovery onto your device using `fastboot flash recovery recovery.img`.
6. Reboot into recovery mode by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_beryllium-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.