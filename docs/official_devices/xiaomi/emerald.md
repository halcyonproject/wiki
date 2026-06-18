---
slug: /devices/emerald
pagination_next: null
pagination_prev: null
title: "Redmi Note 13 Pro 4G / Poco M6 Pro 4G (emerald)"
---

# Redmi Note 13 Pro 4G / Poco M6 Pro 4G (emerald)

:::info

## Device Information

- **Device:** Redmi Note 13 Pro 4G / Poco M6 Pro 4G 
- **Release Date:** 2024, January 15
- **Chipset:** MediaTek Helio G99 Ultra (MT6789)
- **RAM:** 6 GB / 8 GB / 12GB
- **Storage:** 128 GB / 256 GB / 512GB
- **Battery:** 5000 mAh
- **Display:** 6.67 inches, AMOLED, 120Hz, 1080x2400 pixels
- **Rear Camera:** Triple 200 MP (wide) + 8 MP (ultrawide) + 2 MP (macro) / Triple 64 MP (wide) + 8 MP (ultrawide) + 2 MP (macro)
- **Front Camera:** 16 MP (wide)
- **Halcyon Version:** Bloom
- **Maintainer:** itsmeexaveroo
  :::

<a href="https://get.hlcyn.org/builds/emerald/" class="button button--primary">Get builds</a>


## Installation Guide

:::caution
Make sure you have fully charged battery, and backup your data before proceeding.
:::

### Installing Recovery

1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash vendor_boot --slot=all vendor_boot.img`.
5. Reboot into recovery mode by typing `fastboot reboot` in command line then hold `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_emerald-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
