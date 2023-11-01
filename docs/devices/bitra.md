---
slug: /devices/bitra
pagination_next: null
pagination_prev: null
---

# Realme GT Neo2 5G (bitra)
:::info
## Device Information

- **Device:** Realme GT Neo2 5G
- **Release Date:** September 2021.
- **Chipset:** 	Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)
- **RAM:** 12  GB / 8 GB LPDDR4X RAM
- **Storage:** 128 GB / 256 GB UFS 3.1
- **Battery:** 5000 mAh Li-Po (non-removable), 65W fast charge
- **Display:** 6.62 inch, 1080 x 2400 (20:9 ratio) AMOLED, 120Hz, HDR10+
- **Rear Camera:** 64MP (wide) / 8MP (ultrawide) / 2MP (macro)
- **Front Camera:** 16MP (wide)
- **Halcyon Version:** Tithonia
- **Maintainer:** [EisregenHaha](https://github.com/EisregenHaha)
:::

<a href="https://www.pling.com/p/2058150/" class="button button--primary">Get builds</a>

## Installation Guide
:::caution
Make sure to backup your data before proceeding.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery image onto your device using `fastboot flash recovery recovery.img`.
5. Reboot into recovery mode by typing `fastboot reboot recovey` in command line.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a Format data.
4. Return to the main menu.
5. Select Advanced > ADB sideload.
6. Now you can start sideloading by this command:
```
adb sideload halcyon_redwood-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
