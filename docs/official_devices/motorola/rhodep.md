---
slug: /devices/rhodep
pagination_next: null
pagination_prev: null
title: "Motorola g82 5G (rhodep)"
---
# Motorola g82 5G (rhodep)
:::info
## Device Information

- **Device:** Motorola g82 5G
- **Release Date:** 2022, June 07
- **Chipset:** Qualcomm SM6375 Snapdragon 695
- **RAM:** 6 / 8 GB
- **Storage:** 128 GB
- **Battery:** 5000 mAh
- **Display:** 6.6 inches, AMOLED, 120Hz, 1080x2400 pixels
- **Rear Camera:**
  - 50 MP, LED flash
  - 8 MP (ultrawide), No flash
  - 2 MP (macro), No flash
- **Front Camera:** 16 MP, No flash
- **Halcyon Version:** Bloom
- **Maintainer:** HeroBuxx  
:::

<a href="https://get.hlcyn.co/builds/rhodep/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to back up your data before proceeding.  
Make sure to flash the required firmware to avoid bricks. 
:::

### Installing Recovery
1. Enter bootloader mode by holding **Power + Volume Down**.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device using `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot boot.img`.
5. Flash the vendor boot imahe onto your device using `fastboot flash vendor_boot vendor_boot.img`
6. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or navigate through bootloader and choose `Reboot to recovery`

### Flashing Preparation
:::caution
This step is required to prevent boot issues or permanent device bricking. Skipping it may leave your device stuck in EDL mode with no easy recovery. Do not skip it.
:::
1. Download the copy-partitions zip from [here](https://mirrorbits.lineageos.org/tools/copy-partitions-20220613-signed.zip).
2. Reboot into recovery mode.
3. Select **Apply update > Apply from ADB**.
4. Sideload the file using:
```
adb sideload copy-partitions-20220613-signed.zip
```
5. When presented with a screen that says **Signature verification failed**, press **Yes**.

### Installing the ROM
1. Download the latest Halcyon build.
2. Reboot into recovery mode.
3. Perform a **Format Data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM:
```
adb sideload ota-halcyon_rhodep-xxxxx.zip
```

## Troubleshooting
If you encounter any issues during or after installation, feel free to ask in our chat group for help and solutions to common problems.
