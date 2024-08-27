--
slug: /devices/stone
pagination_next: null
pagination_prev: null
title: "POCO X5 5G / Redmi Note 12 5G(stone)"
---

# Redmi Note 12 5G / POCO X5 5G (stone)
:::info
## Device Information

- **Device:** Redmi Note 12 5G / POCO X5 5G
- **Release Date:**
- **Chipset:**  Qualcomm SM6375 Snapdragon 695 g5
- **RAM:** 8 GB / 6 gb
- **Storage:** 128 GB / 256 GB
- **Battery:** 5000 mAh
- **Display:** 6.67 inches, AMOLED, 120Hz
- **Rear Camera:** 48 MP, f/1.8, (wide), PDAF 13 MP, 8 MP, f/2.2,>
- **Front Camera:** 13 MP, f/2.5, (wide)
- **Halcyon Version:** Ursinia
- **Maintainer:** Nomi..shaw
:::

<a href="https://www.pling.com/p/2058150/" class="button button-->

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
4. Verify that your PC detects the device with `fastboot devices`.
5. Flash the boot image onto your device using `fastboot flash boot boot.img`.
8. Reboot into recovery mode by typing `fastboot reboot recovey` in command line or by >

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Select Apply update > Apply from ADB.
4. Now you can start sideloading by this command:
```
adb sideload halcyon_stone-xxxxx.zip
```
5. After flash rom Reboot to recovery again.
6. Format data.
7. Reboot to system and enjoy...

