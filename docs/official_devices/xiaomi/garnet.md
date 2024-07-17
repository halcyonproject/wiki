---
slug: /devices/garnet
pagination_next: null
pagination_prev: null
title: "Redmi Note 13 Pro 5G / POCO X6 5G (garnet)*"
---

# Redmi Note 13 Pro 5G / POCO X6 5G (garnet)
:::info
## Device Information

- **Device:** Redmi Note 13 Pro 5G / POCO X6 5G 
- **Release Date:** 
- **Chipset:** 	Qualcomm SM7435 Snapdragon 7s Gen 2
- **RAM:** 8 GB / 12 GB / 16 GB
- **Storage:** 128 GB / 256 GB / 512 GB
- **Battery:** 5100 mAh
- **Display:** 6.67 inches, AMOLED, HDR10+, 120Hz, 1220x2712 pixels
- **Rear Camera:** Triple 200/64 MP (main) + 8 MP (ultrawide) + 2 MP (telephoto macro)
- **Front Camera:** 16 MP (wide)
- **Halcyon Version:** Ursinia
- **Maintainer:** Soni Dharma
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
adb sideload halcyon_garnet-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
