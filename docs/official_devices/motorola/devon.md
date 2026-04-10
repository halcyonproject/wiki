---
slug: /devices/devon
pagination_next: null
pagination_prev: null
title: "Motorola g32 (devon)*"
---
# Motorola g32 (devon)
:::info
## Device Information

- **Device:** Motorola G32  
- **Release Date:** 2022, August 16  
- **Chipset:** Qualcomm SM6225 Snapdragon 680 (6 nm)  
- **RAM:** 4 GB / 6 GB / 8 GB  
- **Storage:** 64 GB / 128 GB / 256 GB  
- **Battery:** 5000 mAh  
- **Display:** 6.5 inches, IPS LCD, 90Hz, 1080x2400 pixels (~405 ppi)  
- **Rear Camera:**  
  - 50 MP, f/1.8 (wide), 1/2.76", 0.64µm, PDAF  
  - 8 MP, f/2.2, 118˚ (ultrawide), 1/4.0", 1.12µm  
  - 2 MP, f/2.4 (macro)  
- **Front Camera:** 16 MP, f/2.4 (wide), 1.0µm  
- **Halcyon Version:** Bloom  
- **Maintainer:** pixelthrived  
:::

<a href="https://get.hlcyn.org/builds/devon/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to back up your data before proceeding.  
Make sure to flash the required firmware to avoid bricks. 
:::

### Installing the recovery
1. Enter the bootloader mode by holding **Power + Volume Down**.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device using `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot boot.img`.
5. Flash the vendor boot image onto your device using `fastboot flash vendor_boot vendor_boot.img`.
6. Flash the dtbo image onto your device using `fastboot flash dtbo dtbo.img`.
7. Reboot into the newly installed recovery mode by typing `fastboot reboot recovery` in the command line, or by navigating through the bootloader and choosing `Reboot to recovery`.

### Flashing Preparations
:::caution
This step is required to prevent boot issues or permanent device bricking. Skipping it may leave your device stuck in EDL mode with no easy recovery. Do not skip it.
:::
1. Download the copy-partitions zip from [here](https://mirrorbits.lineageos.org/tools/copy-partitions-20220613-signed.zip).
2. Reboot into the recovery mode, if you aren't already in.
3. Select **Apply update > Apply from ADB**.
4. Sideload the file using:
```
adb sideload copy-partitions-20220613-signed.zip
```
5. When presented with a screen that says **Signature verification failed**, press **Yes**.

### Installing the ROM
### Method 1: OTA package flashing
1. Download the latest OTA Halcyon build.
2. Reboot into the recovery mode.
3. Perform a **Factory Reset** (if you are coming from a different ROM).
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM:
```
adb sideload ota-halcyon_devon-xxxxx.zip
```
7. Reboot.

### Method 2: Fastboot package flashing
Refer to [this document](/fastboot-package) for more information on what Fastboot packages are, including how to flash them.

## Troubleshooting
If you encounter any issues during or after installation, feel free to ask in our chat group for help and solutions to common problems.
