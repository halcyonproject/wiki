---
slug: /devices/ginkgo
pagination_next: null
pagination_prev: null
title: "Redmi Note 8/8T (ginkgo/willow)"
---

# Redmi Note 8/8T (ginkgo/willow)

:::info
## Device Information
- **Device:** Redmi Note 8/8T (ginkgo/willow)
- **Release Date:** 2019, October 16
- **Chipset:** Qualcomm Snapdragon 665
- **RAM:** 3GB / 4GB / 6GB
- **Storage:** 32GB / 64GB / 128GB
- **Battery:** 4000mAh
- **Display:** 6.3 inches, IPS LCD, 1080 x 2340 pixels
- **Rear Camera:** Quad 48MP (main) + 8MP (ultrawide) + 2MP (macro)
- **Front Camera:** 13MP
- **Halcyon Version:** Bloom
- **Maintainer:** [Aubrey Nyx](https://github.com/6e7978)
:::

<a href="https://get.hlcyn.org/builds/ginkgo/" class="button button--primary">Get builds</a>

# Installation Guide

:::danger
These builds are only for Redmi Note 8 and 8T, released in 2019. It will **NOT** support the Redmi Note 8 released in 2021.
:::

:::caution
Make sure your device's battery has atleast ≥70% charged before proceeding. Back up your data and remove any accounts, lockscreen security, as that has a possibility cause issues on setup.
:::

### Installing Recovery
1. Enter fastboot mode by using a key combination `Power + Vol Down`.
2. Connect your device to your PC via USB.
3. Verify that your PC detects the device with `fastboot devices`.
4. Flash the recovery onto your device using `fastboot flash recovery recovery.img`.
5. Reboot into recovery mode by holding `Power + Vol Up`.

### Installing ROM
1. Download the latest release of Halcyon.
2. Reboot into recovery mode.
3. Perform a **Format data**.
4. Return to the main menu.
5. Select **Apply update > Apply from ADB**.
6. Sideload the ROM using the following command:
```bash
adb sideload ota-halcyon_ginkgo-xxxxx.zip
```

## Troubleshooting

If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems.
