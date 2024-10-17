---
slug: /devices/miatoll
pagination_next: null
pagination_prev: null
title: "POCO M2 Pro / Redmi Note 9S / Redmi Note 9 Pro / Redmi Note 9 Pro Max / Redmi Note 10 Lite (miatoll)"
---

# POCO M2 Pro / Redmi Note 9S / Redmi Note 9 Pro / Redmi Note 9 Pro Max / Redmi Note 10 Lite (miatoll)
:::info
## Device Information

- **Device:** POCO M2 Pro / Redmi Note 9S / Redmi Note 9 Pro / Redmi Note 9 Pro Max / Redmi Note 10 Lite (miatoll)
- **Release Date:** March 2020
- **Chipset:** 	Qualcomm SM7125 Snapdragon 720G (8 nm)
- **RAM:** 4 GB / 6 GB / 8 GB
- **Storage:** 64 GB / 128 GB (UFS 2.1)
- **Battery:** 5020 mAh, non-removable, 33W fast charge
- **Display:** 1080 x 2400 pixels, 20:9 ratio, 6.67 inches, IPS LCD, HDR10
- **Rear Camera:** Quad 48 MP (main) + 8 MP (ultrawide) + 5 (macro) + 2 (depth) 
- **Front Camera:** 16 MP (wide)
- **Halcyon Version:** Ursinia
- **Maintainer:** RiteshSahany
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash recovery recovery.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_miatoll-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.