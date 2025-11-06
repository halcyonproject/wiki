---
slug: /devices/peridot
pagination_next: null
pagination_prev: null
title: "POCO F6 / Redmi Turbo 3 (peridot)"
---

# POCO F6 / Redmi Turbo 3 (peridot)
:::info
## Device Information

- **Device:** POCO F6 / Redmi Turbo 3 (peridot)
- **Release Date:** November 2025
- **Chipset:** 	Qualcomm SM8635 Snapdragon 8s Gen 3 (4 nm)
- **RAM:** 8 GB / 12 GB (LPDDR5X)
- **Storage:** 256 GB / 512 GB (UFS 4.0)
- **Battery:** 5000 mAh, non-removable, 90W fast charge
- **Display:** 1220 x 2712 pixels, 20:9 ratio, 6.67 inches, 120 hz, AMOLED
- **Rear Camera:** Dual 50 MP (main) + 8 MP (ultrawide)
- **Front Camera:** 20 MP (wide)
- **Halcyon Version:** Bloom
- **Maintainer:** Devansh P.
:::

<a href="https://get.hlcyn.co/builds/peridot" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot boot.img`
5. Flash the init_boot image onto your device using `fastboot flash init_boot init_boot.img`
6. Flash the dtbo image onto your device using `fastboot flash dtbo dtbo.img`
7. Flash the recovery image onto your device using `fastboot flash recovery recovery.img`.
8. Flash the vendor_boot image onto your device using`fastboot flash vendor_boot vendor_boot.img`
9. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload ota-halcyon_peridot-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.