---
slug: /devices/citrus
pagination_next: null
pagination_prev: null
---

# XIAOMI 11 LITE NE 5G (lisa)
:::info
## Device Information

- **Device:** XIAOMI 11 LITE NE 5G
- **Release Date:** September 15, 2021
- **Chipset:** 	Qualcomm SM7325 Snapdragon 778G 5G
- **RAM:** 6 GB / 8 GB
- **Storage:** 128 GB / 256 GB
- **Battery:** 4250 mAh
- **Display:** 6.53 inches, AMOLED, 1B colors, Dolby Vision, HDR10+, 90Hz, 1080 x 2400 pixels
- **Rear Camera:** Triple 64 MP (main) + 8 MP (ultrawide) + 5 MP (telephoto macro)
- **Front Camera:** 20 MP
- **Halcyon Version:** Tithonia
- **Maintainer:** [Nicolas](https://github.com/Amit152505)
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the boot image onto your device using `fastboot flash boot boot.img`.
6. Flash the vendor_boot image onto your device using `fastboot flash vendor_boot vendor_boot.img`.
7. Flash the dtbo image onto your device using `fastboot flash dtbo dtbo.img`.
8. Reboot into recovery mode by typing `fastboot reboot recovey` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply Update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_lisa-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
