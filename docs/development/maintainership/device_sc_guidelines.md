---
slug: /development/maintainership/device-guidelines
sidebar_position: 2
---
# Device Source Code Guidelines

You can refer to the definitions of the keywords used [here](https://datatracker.ietf.org/doc/html/rfc2119).

## Device Tree and Vendor Tree

Device trees for Halcyon:

- **MUST** have proper commit authorship.  
- **MUST** have clear and descriptive commit titles.  
- **MUST** follow proper formatting for commit titles and descriptions.  
- **MUST** include a working proprietary files list.  
- **MUST NOT** ship any prebuilt APKs that do not come from Halcyon, including Google Camera and GrapheneOS Camera. 
- **MUST NOT** contain any unused overlays.  
- **MUST NOT** include any features that do not exist in the stock ROM.  
- **MUST NOT** remove packages that are included in the ROM by default.  
- **MUST NOT** include overlays unrelated to the device (e.g., QS tile order).  
- **MUST** have enforcing SELinux.  
- **MAY** include OEM camera ports.
- **SHOULD** follow **AOSP directory and naming structure**.
- **SHOULD NOT** use **dirty hacks** or hardcoded paths (e.g., `system/etc/hosts` redirection).

## Kernel Source

Kernel sources for Halcyon:

- **MUST** have a complete commit history and proper authorship.  
- **MUST NOT** include any type of blocker (e.g., Boeffla Wakelock Blocker, FS blocker).  
- **MUST NOT** include any type of modification (e.g., KernelSU, Apatch).  
- **MUST NOT** include any form of overclocking (e.g., CPU/GPU overclocking, screen overclocking).  
- **MUST** be able to be built with AOSP Clang.
- **SHOULD** maintain **consistency with device trees**, including `defconfig`.
- **MUST** be able to boot **without modifications to init or recovery**.
- **MUST** not break **DTBO or recovery boot**.