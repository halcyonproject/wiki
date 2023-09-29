---
slug: /devices/rosemary
pagination_next: null
pagination_prev: null
---

# Redmi Note 10S/11SE India (rosemary/secret/maltose)
:::info
## Device Information

- **Device:** Redmi Note 10S/11SE India
- **Release Date:** 10 March, 2021
- **Chipset:** 	Mediatek Helio G95
- **RAM:** 6 GB / 8 GB
- **Storage:** 64 GB / 128 GB
- **Battery:** 5000 mAh
- **Display:** 16.33cm (6.43 Inches), 1100 nits peak brightness, 1080 x 2400 pixels, 19.5:9 ratio (~440 ppi density)
- **Rear Camera:** 64MP(main) + 8MP(Ultra-Wide) + 2MP(Macro) + 2MP(Depth)
- **Front Camera:** 13 MP
- **Halcyon Version:** Tithonia
- **Maintainer:** [Beru Stella](https://github.com/Windowz414) & [Rahul](https://github.com/User132New)
:::

**Builds Will be available soon...**

## Installation Guide
:::Caution
Clean flash required, So make sure to backup your data before proceeding.
Usage of MIUI 12.5.19.0.RKLINXM is required.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the recovery onto your device using `fastboot flash boot boot.img`.
6. Reboot into recovery mode by using `fastboot reboot recovery`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply Update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_rosemary-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
