---
slug: /devices/starlte
pagination_next: null
pagination_prev: null
title: "Galaxy S9 (starlte)*"
---

# Samsung Galaxy S9 (starlte)
:::info
## Device Information

- **Device:** Samsung Galaxy S9
- **Release Date:** March 2018.
- **Chipset:** 	Exynos 9810 (10 nm)
- **RAM:** 4  GB
- **Storage:** 64 GB / 128 GB / 256 GB UFS 2.1
- **Battery:** 3000 mAh Li-Ion (non-removable)
- **Display:** 5.8 in (147.32 mm) 2960x1440 (567 PPI) Super AMOLED
- **Rear Camera:** 12MP (wide)
- **Front Camera:** 8MP
- **Halcyon Version:** Ursinia
- **Maintainer:** 
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Requirements
1. A Windows/Linux/macOS PC with ADB and Heimdall installed

### Installing Recovery
1. Enter Download mode by using a key combination `Power + Vol Down + Bixby`.
2. Press `Volume Up` key.
3. Connect your device to your PC via USB.
4. Flash the recovery image onto your device.
```
heiimdall flash --RECOVERY recovery.img --no-reboot
```
5. Reboot into recovery mode by holding `Power + Vol Down` and then `Power + Vol Up + Bixby`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_starlte-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.