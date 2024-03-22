---
slug: /docs/device-guidelines
sidebar_position: 2
---
# Device Source Code Guidelines

You can check reference of used keyword [here](https://datatracker.ietf.org/doc/html/rfc2119).

## Device tree and Vendor Tree
Device tree for Halcyon:
- **MUST** have proper commit authorship
- **MUST** have proper and descriptive commit title
- **MUST** have proper format for commit title and descriptions
- **MUST** include working Proprietary files list
- **MUST NOT** ship any prebuilt APKs that doesn't come from Halcyon. Including Google Camera, GrapheneOS Camera
- **MUST NOT** contain any unused overlays
- **MUST NOT** include any features that doesn't exist on stock ROM
- **MUST NOT** remove packages that comes from the ROM by default
- **MUST NOT** include any overlays that don't have anything to do with the device. e.g: QS Tile order
- **MUST** have Enforcing SELinux
- **MAY** include OEM Camera ports.

## Kernel Source
Kernel source for Halcyon:
- **MUST** have complete commit history and proper authorship
- **MUST NOT** include any types of blocker e.g: Boeffla Wakelock Blocker, fs blocker
- **MUST NOT** include any types of Overclocking e.g: CPU/GPU Overclock. Screen Overclock
- **MUST** able to be built with AOSP Clang.