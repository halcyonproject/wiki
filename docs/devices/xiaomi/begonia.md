---
slug: /devices/begonia
pagination_next: null
pagination_prev: null
title: "begonia"
---

# Redmi Note 8 Pro (begonia)
:::info
## Device Information

- **Device:** Redmi Note 8 Pro
- **Release Date:** August 29, 2019
- **Chipset:** MediaTek Helio G90T
- **RAM:** 6 GB / 8 GB
- **Storage:** 64 GB / 128 GB
- **Battery:** 4500 mAh
- **Display:** 6.53 inches, IPS LCD, 1080 x 2340 pixels
- **Camera:** Quad 64 MP (main) + 8 MP (ultrawide) + 2 MP (macro) + 2 MP (depth)
- **Halcyon Version:** Tithonia
- **Maintainer:** [herobuxx](https://github.com/herobuxx)
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

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
5. Select Apply Update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_begonia-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.