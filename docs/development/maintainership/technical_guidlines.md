---
slug: /development/maintainership/tech_guidelines
sidebar_position: 3
title: "Technical Guidelines"
---
# Technical Guidelines for Halcyon Maintainers

This page provides detailed technical guidelines for all maintainers to follow when building and maintaining Halcyon. These guidelines ensure consistency and high-quality builds across all supported devices.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).  

## Build Environment

- **MUST** use the official Halcyon build environment configuration.
- **MUST NOT** use custom compilers or toolchains unless explicitly approved by the core team. Only the default Clang provided in the Halcyon source is allowed for building.
- **MUST** ensure that the build environment is properly set up, using the correct versions of required dependencies and tools.

## Device Configuration
- **MUST** maintain the device tree, vendor files, and kernel configuration according to upstream standards.
- **MUST** have synchronized vendor tree with defined proproetary files in the device tree.
- **MUST** ensure changes to the device configuration are properly tested before submitting builds.
- **MUST** keep all files up to date with the latest changes from the core Halcyon source.
- **MUST NOT** add unsupported or unapproved features that deviate from Halcyon’s philosophy.

## Ported Features from Stock ROM
Halcyon allows the inclusion of certain ported features from the stock ROM of a device, with some restrictions to ensure consistency, avoid duplication, and maintain the clean, stock-like experience of the ROM.

### OEM Camera Apps
- **MUST** be ported exclusively from the stock ROM of the device being maintained. Porting features from other devices that do not natively support them (e.g., Leica MIUI Camera on a device without Leica lenses) is NOT allowed.
- **MUST** function correctly on the device and be thoroughly tested for stability.
- **MUST NOT** introduce duplicate apps that already exist in Halcyon. For example, if the OEM Camera requires a gallery app (e.g., OnePlus Camera requiring OnePlus Gallery) and this creates a duplicate of an existing app in Halcyon (such as Google Photos), the inclusion of the OEM Camera and its dependencies **SHOULD** be restricted or rejected.
- **SHOULD** integrate smoothly with the system without conflicting with core Halcyon features or existing apps.

### Audio Mods (Dolby, Dirac, etc.)
- **MUST** be ported from the stock ROM of the device being maintained.
- **MUST** be thoroughly tested to ensure they work well with the device’s audio hardware.
- **MUST NOT** interfere with or degrade the performance of other system audio features.

### Additional Restrictions
- **MUST NOT** include any other third-party mods that are not from the stock ROM or are not approved by the core team.
- **MUST** avoid adding features that deviate from Halcyon’s clean, stock-like user experience, unless approved by the core team.
- **MUST** prioritize the stability and performance of the system when deciding to add or remove any ported feature.

## Best Practices for Building
- **MUST** ensure that all builds are reproducible by following standard Halcyon build instructions.
- **MUST** verify the stability and functionality of the build on the device before submitting it for release.
- **MUST** document any changes, including new features, bug fixes, or optimizations, in commit messages or change logs.
- **MUST** follow any specific instructions from the core team regarding upcoming changes or major updates.

## Release Guidelines

- **MUST** only submit builds that meet Halcyon’s quality standards.
- **MUST** communicate with the core team about any issues or blockers during the build process.
- **MUST** follow the Halcyon release schedule and provide timely updates to the community.