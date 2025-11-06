---
slug: /devices/marble
pagination_next: null
pagination_prev: null
title: "POCO F5 / Redmi Note 12 Turbo (marble)"
---

# POCO F5 / Redmi Note 12 Turbo (marble)
:::info
## Device Information

- **Device:** POCO F5 / Redmi Note 12 Turbo 
- **Release Date:** 2023, May 09
- **Chipset:** 	Qualcomm Snapdragon® 7+ Gen 2 (SM7475)
- **RAM:** 8GB/12GB/16GB (LPDDR5 RAM, UFS 3.1 storage)
- **Storage:** 256GB/512GB/1024GB
- **Battery:** Non-removable, 5000 mAh
- **Display:** 6.67″, 120Hz, 2400x1080 (395 ppi)
- **Rear Camera:** 64MP wide angle, 8MP ultra wide-angle, 2MP macro
- **Front Camera:** 16MP in-display
- **Halcyon Version:** Ursinia, Viola, Bloom
- **Maintainer:** [Shakib](https://t.me/Shakib_BD)
:::

<a href="https://get.hlcyn.co/builds/marble/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery image onto your device using `fastboot flash recovery_ab recovery.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload ota-halcyon_marble-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
