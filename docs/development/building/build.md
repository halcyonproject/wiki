---
slug: /development/building/build
sidebar_position: 2
pagination_next: null
---

# Build the Source
After downloading the source, let's build Halcyon now!

## Initialize the environment
```
. build/envsetup.sh
```
## Select target device 
- For older branches than 14.2
```
lunch halcyon_DEVICE-userdebug
```
- For 14.2 and newer branches
```
lunch halcyon_DEVICE-RELEASE-userdebug
```

### Available Release Types
| Release Type | Branch | Codename | Android Version | Status       |
|--------------|--------|----------|-----------------|--------------|
| ap1a         | 14.2   | Ursinia  | 14 QPR2         | Deprecated   |
| ap2a         | 14.3   | Ursinia  | 14 QPR3         | Deprecated   |
| ap3a         | 15.0   | Viola    | 15 Pre-QPR      | Deprecated   |
| ap4a         | 15.1   | Viola    | 15 QPR1         | Default      |

## Proceed with the build
```
make carthage -j$(nproc --all)
```