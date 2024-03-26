---
slug: /development/building/build
sidebar_position: 2
pagination_next: null
---

# Build the Source
After downloading the source, let's build Halcyon now!

Initialize the environment
```
. build/envsetup.sh
```
Select target device
```
lunch halcyon_DEVICE-userdebug
```
Proceed with the build
```
m carthage -j$(nproc --all)
```