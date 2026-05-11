---
slug: /devices/r8q
pagination_next: null
pagination_prev: null
title: "Samsung Galaxy S20 FE 5G (Qualcomm) (r8q)"
---

# Samsung Galaxy S20 FE 5G (Qualcomm) (r8q)

:::danger ⚠️ ATTENTION: Check Your Processor!
This build is **ONLY** for the **Snapdragon 865** variant (**r8q** / G780G / G781B). 
Flashing this on an Exynos device will cause a hard brick.

If your device has an **Exynos 990** processor (G780F), you need the **r8s** build.
👉 **[Click here to go to the r8s (Exynos) page](/devices/r8s)**
:::

:::info

## Device Information

- **Device:** Samsung Galaxy S20 FE (Qualcomm) (r8q)
- **Release Date:** 2020, September 23
- **Chipset:** Snapdragon 865
- **RAM:** 6GB / 8GB
- **Storage:** 128GB
- **Battery:** 4500 mAh
- **Display:** 6.5 inches, AMOLED, 120Hz, 1080x2400 pixels
- **Rear Camera:** 12MP (wide), 12MP (ultrawide), 8MP (telephoto)
- **Front Camera:** 32 MP (wide)
- **Halcyon Version:** Bloom
- **Maintainer:** [Yurumee](https://github.com/Yumeerin)
  :::

<a href="https://get.hlcyn.org/builds/r8q/" class="button button--primary">Get builds</a>

## Installation Guide

:::caution
Before proceeding, please remove all lockscreen security (PIN, password, pattern, and fingerprint) and ensure you have backed up your data. Keeping any lockscreen credentials active while switching ROMs can cause the partition responsible for FRP to get corrupted, which in turn locks you out once you move back to One UI. In such a case, bypassing it might be illegal in your country/region. We are not responsible for any malfunction resulting from not following these steps.
:::

### Requirements
1. A Windows/Linux/macOS PC with ADB and Heimdall installed

### Installing Recovery
1. Power off the device.
2. Enter Download mode by pressing and holding `Volume Up + Vol Down` keys and connect your device to your PC via USB.
3. Press `Volume Up` key.
4. Flash the recovery image onto your device.
```
heimdall flash --RECOVERY recovery.img
```
5. As soon as device reboots, keep usb cable connected and press and hold `Power + Volume Up` keys in order to boot into newly flashed recovery.

### Installing ROM

1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Apply update > Apply from ADB.
6. Now you can start sideloading by this command:

```
adb sideload ota-halcyon_r8q-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
