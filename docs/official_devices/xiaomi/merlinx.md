---
slug: /devices/merlinx
pagination_next: null
pagination_prev: null
title: "Redmi Note 9 (merlinx)"
---

# Redmi Note 9 (merlinx)
:::info
## Device Information

- **Device:** Redmi Note 9
- **Release Date:** May 12, 2020
- **Chipset:** 	MediaTek Helio G85 (12nm)
- **RAM:** 3 GB / 4 GB / 6 GB
- **Storage:** 64 GB / 128 GB
- **Battery:** 5020 mAh
- **Display:** 6.53 inches, IPS LCD, 1080 x 2340 pixels 
- **Rear Camera:** Quad 48 MP (main) + 8 MP (Ultrawide) + 2 MP (macro) + 2 MP (depth)
- **Front Camera:** 13 MP
- **Halcyon Version:** Ursinia
- **Maintainer:** HeroBuxx, and rktdnt
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>
<a href="https://www.pling.com/p/1685941/" class="button button--primary">Get builds - Beta</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the recovery onto your device using `fastboot flash recovery recovery.img`.
6. Reboot into recovery mode by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_merlinx-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.