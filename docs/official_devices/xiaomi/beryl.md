---
slug: /devices/beryl
pagination_next: null
pagination_prev: null
title: "Redmi Note 14 5G / 14 SE / POCO M7 Pro 5G (beryl)"
---

# Redmi Note 14 5G / 14 SE / POCO M7 Pro 5G (beryl)
:::info
## Device Information

- **Device:** Redmi Note 14 5G / 14 SE / POCO M7 Pro 5G
- **Other codenames**: citrine
- **Release Date:** 2024, September 26
- **Chipset:** Mediatek Dimensity 7025 Ultra
- **RAM:** 6GB / 8GB / 12GB
- **Storage:** 128GB / 256GB / 512GB
- **Battery:** 5110 mAh
- **Display:** 6.67 inches, AMOLED, HDR10+, 120Hz, 1080x2400 pixels
- **Rear Camera:** 108 MP (wide Global) / 64 MP (wide India, CN, & POCO) + 8 MP (ultrawide (non-POCO & non-CN)) + 2 MP (macro)
- **Front Camera:** 20 MP (wide non-CN) / 16MP (wide CN)
- **Halcyon Version:** Bloom
- **Maintainer:** naokoshoto
:::

<a href="https://get.hlcyn.co/builds/beryl/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery image onto your device using `fastboot flash vendor_boot vendor_boot.img`.
5. Reboot into recovery mode by typing `fastboot reboot` in command line and then hold `Power + Vol Up` to boot to recovery.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:
```
adb sideload ota-halcyon_beryl-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
