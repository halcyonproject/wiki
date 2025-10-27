---
slug: /devices/Spacewar
pagination_next: null
pagination_prev: null
title: "Phone (1) (Spacewar)*"
---

# Nothing Phone (1) (Spacewar)
:::info
## Device Information

- **Device:** Nothing Phone (1)
- **Release Date:** 12 July 2022
- **Chipset:** Qualcomm Snapdragon™ 778G+ 5G (SM7325-AE)
- **RAM:** 8 GB / 12 GB
- **Storage:** 128 GB / 256 GB (UFS 3.1)
- **Battery:** 4500 mAh
- **Display:** 6.55 inches, OLED, 120Hz, HDR10+, 1080x2400 pixels
- **Rear Camera:** 50MP (wide, Sony IMX766) + 50MP (ultrawide, Samsung JN1)
- **Front Camera:** 16MP
- **Halcyon Version:** Bloom
- **Maintainer:** nyxalune
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter bootloader mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot boot.img`.
5. Flash the vendor boot imahe onto your device using `fastboot flash vendor_boot vendor_boot.img`
6. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or navigate through bootloader and choose `Reboot to recovery`

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_Spacewar-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
