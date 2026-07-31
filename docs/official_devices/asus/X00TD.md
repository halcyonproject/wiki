---
slug: /devices/X00TD
pagination_next: null
pagination_prev: null
title: "Asus Zenfone Max Pro M1"
---

# Asus Zenfone Max Pro M1 (X00TD)
:::info
## Device Information

- **Device:** Asus Zenfone Max Pro M1
- **Release Date:** 2018, May
- **Chipset:** 	Qualcomm SDM660 Snapdragon 636
- **RAM:** 3GB / 4GB / 6GB
- **Storage:** 32GB / 64GB / 128GB
- **Battery:** Li-Po 5000 mAh
- **Display:** IPS LCD, 5.99 inches, 92.1 cm2 (~76.2% screen-to-body ratio), 1080 x 2160 pixels, 18:9 ratio (~404 ppi density)
- **Rear Camera:** 13MP, 1.12-micron pixels, f/2.2 Dual LED flash + 5MP, 1.12-micron pixels, f/2.4
- **Front Camera:** 8MP, 1-micron pixels, f/2.2 1080p 30 fps video, Selfie-light
- **Halcyon Version:** Bloom
- **Maintainer:** aepranata
:::

<a href="https://get.hlcyn.org/builds/X00TD/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Recovery Installation (ADB Sideload)
This method involves flashing a custom recovery first, then sideloading the ROM package.

#### Step 1: Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Up`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery onto your device using `fastboot flash recovery recovery.img`.
5. Reboot into recovery mode by holding `Power + Vol Down`.

#### Step 2: Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_X00TD-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
