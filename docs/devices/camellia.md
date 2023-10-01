---
slug: /devices/camellia
pagination_next: null
pagination_prev: null
---

# POCO M3 Pro/Redmi Note 10T/10 5G/11 SE (camellia)
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
- **Maintainer:** [ramshell68](https://github.com/ramshell68)
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
caution Make sure to backup your data before proceeding. Make sure your either on MIUI 13+

1. Download the recovery boot.img and ROM in the release folder
2. Install recovery boot.img using :
```
     fastboot flash boot boot.img
```
3. Boot into it using power + volume up button
4. In recovery adb sideload must be enabled in the apply update section.
```
     adb sideload <rom-name>.zip
```
5. Wipe data/factory reset
6. Reboot and enjoy

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
