---
slug: /development/building/downloading_source
sidebar_position: 1
pagination_prev: null
---
# Downloading Source

## Setting Up the Repo Tool

Ensure you have the Repo tool installed. If not, you can install it using the following command:

if you don't have it already:

Create a `.bin` directory
   ```
   mkdir ~/bin
   ```

Download the Repo script
   ```
   curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
   ```

Set Permissions
   ```
   chmod a+x ~/bin/repo
   ```

## Creating a Directory
Create a new directory where you want to store the Halcyon Project source code:

```
mkdir halcyon
```
Change directory to halcyon
```
cd halcyon
```

## Initializing Repo
Initialize the Repo tool in the newly created directory:

```
repo init -u https://github.com/halcyonproject/manifest -b ursinia
```

This command initializes the Repo tool with the URL of the Halcyon Project repository.

## Syncing the Repository
Sync the local repository with the latest changes from the remote repository:

```
repo sync -c -j$(nproc --all) --force-sync
```

This command fetches the latest changes and updates your local repository accordingly.