---
slug: /devices/guam
pagination_next: null
pagination_prev: null
title: "Motorola Moto E7 Plus (guam)"
---
# Motorola Moto E7 Plus (guam)
:::info
## Device Information

- **Device:** Motorola E7 Plus  
- **Release Date:** 2020, September 16  
- **Chipset:** Qualcomm SM4250 Snapdragon 460 (11 nm)  
- **RAM:** 4 GB  
- **Storage:** 64 GB  
- **Battery:** 5000 mAh  
- **Display:** 6.5 inches, IPS LCD, 60Hz, 720x1600 pixels (~270 ppi)  
- **Rear Camera:**  
  - 48 MP, f/1.7 (wide), 1/2.0", 0.8µm, PDAF  
- **Front Camera:** 8 MP, f/2.2 (wide), 1/4.0", 1.12µm  
- **Halcyon Version:** Bloom  
- **Maintainer:** cinnamonbunni  
:::

<a href="https://get.hlcyn.org/builds/guam/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to back up your data before proceeding.  
Make sure to flash the required firmware to avoid bricks. 
:::

### Method 1: Recovery Installation (ADB Sideload)
This method involves flashing a custom recovery first, then sideloading the ROM package.

#### Step 1: Installing Recovery
1. Enter the bootloader mode by holding **Power + Volume Down**.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device using `fastboot devices`.
4. Flash the vendor boot image onto your device using `fastboot flash recovery recovery.img`.
5. Flash the dtbo image onto your device using `fastboot flash dtbo dtbo.img`.
6. Reboot into the newly installed recovery mode by typing `fastboot reboot recovery` in the command line, or by navigating through the bootloader and choosing `Reboot to recovery`.

#### Step 2: Flashing Preparation
:::caution
This step is required to prevent boot issues or permanent device bricking. Skipping it may leave your device stuck in EDL mode with no easy recovery. Do not skip it.
:::
1. Download the copy-partitions zip from [here](https://mirrorbits.lineageos.org/tools/copy-partitions-20220613-signed.zip).
2. Reboot into the recovery mode, if you aren't already in.
3. Select **Apply update > Apply from ADB**.
4. Sideload the file using:
```bash
adb sideload copy-partitions-20220613-signed.zip
```
5. When presented with a screen that says **Signature verification failed**, press **Yes**.

#### Step 3: Installing the ROM
1. Download the latest OTA Halcyon build.
2. Reboot into the recovery mode.
3. Perform a **Factory Reset** (if you are coming from a different ROM) or **Format Data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_guam-xxxxx.zip
```
7. Reboot.

## Troubleshooting
If you encounter any issues during or after installation, feel free to ask in our chat group for help and solutions to common problems.
