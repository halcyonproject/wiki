---
slug: /devices/fogos
pagination_next: null
pagination_prev: null
title: "Motorola g34 / g35 5G (fogos)"
---
# Motorola g34 / g35 5G (fogos)
:::info
## Device Information

- **Device:** Motorola G34 / G35 5G  
- **Release Date:** 2024, August 28  
- **Chipset:** Qualcomm SM6375 Snapdragon 6s Gen 3 (6 nm)  
- **RAM:** 4 GB / 8 GB  
- **Storage:** 128 GB  
- **Battery:** 5000 mAh  
- **Display:** 6.5 inches, IPS LCD, 120Hz, 720x1600 pixels (~270 ppi)  
- **Rear Camera:**  
  - 50 MP, f/1.8 (wide), 1/2.76", 0.64µm, PDAF  
  - 2 MP (macro)  
- **Front Camera:** 16 MP, f/2.4 (wide), 1.0µm  
- **Halcyon Version:** Bloom  
- **Maintainer:** herobuxx  
:::

<a href="https://get.hlcyn.org/builds/fogos/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to back up your data before proceeding.  
Make sure to flash the required firmware to avoid bricks. 
:::

### Method 1: Web Flasher (Recommended)
The easiest way to install Halcyon is via our browser-based Web Flasher. 

1. Reboot your device into **Fastboot mode** (Power + Volume Down).
2. Connect your device to your PC via USB.
3. Open the [Halcyon Web Flasher](https://flash.hlcyn.org) in a Chromium-based browser (Chrome, Edge, or Brave).
4. Select **Motorola g34 / g35 5G (fogos)** from the device list.
5. Click **Connect Device** and follow the on-screen instructions to complete the installation.

### Method 2: Fastboot Package (Manual)
If you prefer to flash using a manual script from your computer, you can use the Fastboot package. Refer to [this document](/fastboot-package) for more information on how to flash using Fastboot packages.

### Method 3: Recovery Installation (ADB Sideload)
This method involves flashing a custom recovery first, then sideloading the ROM package.

#### Step 1: Installing Recovery
1. Enter bootloader mode by holding **Power + Volume Down**.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device using `fastboot devices`.
4. Flash the boot image onto your device using `fastboot flash boot boot.img`.
5. Flash the vendor boot image onto your device using `fastboot flash vendor_boot vendor_boot.img`.
6. Reboot into recovery mode by typing `fastboot reboot recovery` in command line or navigate through bootloader and choose `Reboot to recovery`.

#### Step 2: Flashing Preparation
:::caution
This step is required to prevent boot issues or permanent device bricking. Skipping it may leave your device stuck in EDL mode with no easy recovery. Do not skip it.
:::
1. Download the copy-partitions zip from [here](https://mirrorbits.lineageos.org/tools/copy-partitions-20220613-signed.zip).
2. Reboot into recovery mode.
3. Select **Apply update > Apply from ADB**.
4. Sideload the file using:
```bash
adb sideload copy-partitions-20220613-signed.zip
```
5. When presented with a screen that says **Signature verification failed**, press **Yes**.

#### Step 3: Installing the ROM
1. Download the latest Halcyon build.
2. Reboot into recovery mode.
3. Perform a **Format Data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_fogos-xxxxx.zip
```

## Troubleshooting
If you encounter any issues during or after installation, feel free to ask in our chat group for help and solutions to common problems.
