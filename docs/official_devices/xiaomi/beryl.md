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
- **Rear Camera:** 108 MP (Wide Global) / 64 MP (Wide India, CN, & POCO) + 8 MP (UltraWide (non-POCO & non-CN)) + 2 MP (Macro Non-CN / SE)
- **Front Camera:** 20 MP (Wide non-CN) / 16MP (wide CN)
- **Halcyon Version:** Bloom
- **Maintainer:** naokoshoto
:::

<a href="https://get.hlcyn.org/builds/beryl/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data, you running HyperOS 2 Global (2.0.210.0 VOQMIXM recommended), and download correct files for Fastboot or OTA steps before proceeding.
:::

### Fastboot package installation

If you prefer to install using the Fastboot package, the complete installation guide is available [here](/fastboot-package). Otherwise, you can follow the instructions below to flash via recovery using ADB sideload. 

---

:::caution
For the following steps, you must **download the OTA Package and Vendor Boot files**, not the Fastboot Package.
:::

### Installing Recovery

1. Enter Fastboot Mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery image onto your device using `fastboot flash vendor_boot vendor_boot.img`.
5. Reboot into Recovery Mode by typing `fastboot reboot` in command line, then immediately hold `Power + Vol Up` to boot to recovery.

### Installing ROM

1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format Data (this will wipe all user data).
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Start the sideload process using the following command:
```
adb sideload ota-halcyon_beryl-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
