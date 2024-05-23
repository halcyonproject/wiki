---
slug: /devices/camellia
pagination_next: null
pagination_prev: null
title: "POCO M3 Pro/Redmi Note 10T/10 5G/11 SE (camellia)*"
---

# POCO M3 Pro/Redmi Note 10T/10 5G/11 SE (camellia) - Discontinued
:::info
## Device Information

- **Device:** Poco M3 Pro/Redmi Note 10T/10 5G/11 SE
- **Release Date:** April 28, 2021
- **Chipset:** 	Mediatek Dimensity 700 5G
- **RAM:** 4 GB / 6 GB / 8 GB
- **Storage:** 64 GB / 128 GB
- **Battery:** 5000 mAh
- **Display:** 6.5 inches, IPS LCD, 90Hz, 1080 x 2400 pixels
- **Rear Camera:** Triple 48 MP (wide) + 2 MP (macro) + 2 MP (depth)
- **Front Camera:** 8 MP
- **Halcyon Version:** Tithonia
- **Maintainer:** None
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
caution Make sure to backup your data before proceeding. Make sure your either on MIUI 13+

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the recovery onto your device using `fastboot flash boot boot.img`.
6. Reboot into recovery mode by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_begonia-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
