---
slug: /devices/surya
pagination_next: null
pagination_prev: null
title: "POCO X3 / POCO X3 NFC (surya)"
---

# POCO X3 / POCO X3 NFC (surya)
:::info
## Device Information

- **Device:** POCO X3 / POCO X3 NFC 
- **Release Date:** 
- **Chipset:** 	Qualcomm SM7150-AC Snapdragon 732G
- **RAM:** 6GB / 8GB
- **Storage:** 64GB / 128GB
- **Battery:** 5160 / 6000 mAh
- **Display:** 6.67 inches, IPS LCD, HDR10, 120Hz, 1080x2400 pixels
- **Rear Camera:** Quad 64 MP (wide) + 13 MP (ultrawide) + 2 MP (macro) + 2 MP (depth)
- **Front Camera:** 20 MP (wide)
- **Halcyon Version:** Ursinia
- **Maintainer:** lily985
:::

<a href="" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot recovery.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_surya-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
