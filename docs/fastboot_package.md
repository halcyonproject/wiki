---
slug: /fastboot-package
pagination_next: null
pagination_prev: null
title: "Flashing Fastboot Packages"
sidebar_class_name: hidden
---

# Flashing Fastboot Packages

:::warning Device Compatibility Required
Fastboot packages can **only be flashed on a limited set of devices**. Not all Android devices support fastboot package flashing. Please read the device requirements section below carefully to ensure your device is compatible.
:::

## Device Requirements

### Supported Devices

Fastboot package flashing is supported only on devices that meet **ALL** of the following criteria:

- **Android Version:** Launched with Android 10 or later
- **Dynamic Partitions:** Device must support Dynamic Partitions (`super` partition)
- **Fastbootd:** Device must have fastbootd support (userspace fastboot)

These features typically became standard in devices released with Android 10+, but some older flagships may also support them.

### Unsupported Devices

The following device types are **NOT compatible** with fastboot package flashing:

- **Samsung devices** - Samsung uses Odin protocol (proprietary download mode) and does not support fastboot packages
- **Older devices** - Devices released before Android 10 without Dynamic Partitions support (even if the community has implemented a dynamic partition retrofit)
- **Devices without fastbootd** - Devices that only support bootloader-level fastboot, not userspace fastboot
- **Some custom ROM implementations** - Devices with custom bootloaders that don't implement fastbootd

:::caution Samsung Devices
If you own a Samsung device, do **not** attempt to use fastboot package flashing. Please refer to your device's specific installation method instead.
:::

## Understanding Fastboot Packages

A fastboot package (often named with `.zip` extension) is a complete ROM package designed to be flashed through fastboot in a single operation. Unlike traditional ADB sideloading, fastboot packages:

- Are flashed directly to partitions via fastboot protocol
- Support flashing multiple partitions simultaneously
- Require the device to be in fastbootd/userspace fastboot mode
- Work with Dynamic Partition layouts

:::note Availability
Fastboot packages are available since **Halcyon 16.0 Bloom** and later versions.
:::

## Prerequisites

:::danger Remove Accounts and Lock Screen - CRITICAL
Before flashing, **you MUST remove**:
- Your lock screen (PIN, pattern, password, fingerprint, face unlock)
- All accounts (Google, Samsung, Xiaomi, etc.)

**Failure to do so can:**
- Lock you out of your device via Factory Reset Protection (FRP), making it unusable
- **Permanently damage the TEE (Trusted Execution Environment)** on some devices
- **Render biometric hardware (fingerprint sensor) permanently unusable** on affected devices

This damage has been confirmed on multiple devices and cannot be repaired after flashing. This is not reversible.
:::

Before flashing a fastboot package, ensure you have:

- **ADB/Fastboot tools** installed on your computer
- **USB drivers** installed (if on Windows)
- **Unlocked bootloader** (device-dependent)
- **USB cable** capable of data transfer (not just charging)
- **Removed all accounts and lock screen** from your device

## Installation Steps

### 1. Enter Fastboot Mode

The method varies by device. Common combinations include:

- Power + Volume Down
- Power + Volume Up
- Power + Volume Down + Volume Up (press simultaneously)

Consult your specific device documentation for the exact key combination.

### 2. Connect to Computer

Connect your device to your PC via USB cable and verify it's detected:

```
fastboot devices
```

You should see your device listed with a serial number.

:::caution Check Connection
If your device is not listed, check USB drivers and try a different USB port.
:::

### 3. Wipe the Device

Before flashing, wipe the device to ensure a clean installation:

```
fastboot -w
```

This command will erase all data on your device.

### 4. Flash the Package

Download the fastboot package for your device and run:

```
fastboot update fastboot-halcyon_XXXXXX.zip
```

Example: `fastboot-halcyon_surya-16.2-20260210-1800-Alpha-GMS-signed.zip`

*(Replace with your device's actual package filename)*

This command will:
- Extract all partitions from the package
- Flash them to the appropriate partitions
- Verify each partition after flashing
- Automatically reboot when complete

### 5. Verify Installation

After flashing completes and the device reboots:

```
fastboot reboot
```

Or allow the automatic reboot to proceed. Your device should boot into the newly flashed ROM.

## Getting Help

If you encounter issues not covered here:

- Check your **device-specific documentation**
- Ask in our **[Telegram group](https://t.me/hlcynprjctchat)** for community support
- Verify you followed **all prerequisites** correctly
- Provide your **device codename** and **exact error message** when asking for help

:::info Need Device-Specific Help?
Each officially supported device has its own documentation page with device-specific instructions and troubleshooting. Refer to the [Official Devices](/devices) section for your device.
:::
