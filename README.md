# Halcyon wiki

The Halcyon Wiki website is created as a statically generated site, constructed with the utilization of [Docusaurus](https://docusaurus.io).

## Requirements
- Node.js and npm: You must have `Node.js` and  `npm` (Node Package Manager) installed on your system. If you prefer `yarn` over `npm`, you can install `yarn` through `npm`.

Once you have these prerequisites, you can proceed to setup the project and start developing.
## Setup
Clone this repository
```bash
git clone https://github.com/halcyonproject/wiki.git
```
Go into directory
```bash
cd wiki
```
Install the required dependencies using the following command:
```bash
npm install
```

## Local Development
```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build
```bash
npm run build
```
This command generates static content into the `build` directory.