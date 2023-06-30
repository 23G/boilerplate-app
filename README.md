# React Native Boilerplate

<br />

## Table of Contents

-   [Tools](#tools-included-in-this-template)
-   [Environment setup](#env-setup)
-   [Installation](#installation)
-   [Development](#development)
-   [Building the app](#build-commands)

<br />

___

<br />
  
## Tools / features included in this template

- Local, staging, and production environments
- Expo modules core
- Prettier
- React i18n
- React Native Config
- React Navigation
- Redux Toolkit
- RTK Query
- Tailwind
- TypeScript

<br />
 
---

<br />
 
## Environment setup

Follow [this guide](https://reactnative.dev/docs/environment-setup) to setup the environment for running React Native apps. Make sure to select the `React Native CLI Quickstart` tab since we don't use Expo.

<br />
 
---

<br />
 
## Installation

Create a new React Native project using this template:

```
npx react-native init <project-name> --npm --template https://github.com/23g/boilerplate-app
```

In the project root, create `.env` files representing the different environments:

-   .env.production
-   .env.staging
-   .env.local

The `ENV` variable should contain the value 'production', 'staging' or 'local' respectively.

Then run:

```
npm install
npm run pod
```

Change the bundle identifiers and package names (per build flavor / Xcode scheme) to suit your project.

Finally, create an empty file named `tailwind.json` in the root directory.

<br />
 
---

<br />
 
## Development

Run tailwind-rn in development mode:

```
npm run dev:tailwind
```

Start the packager:

```
npm start
```

<br />
 
---

<br />
 
## Building the app

### iOS:

Select the desired scheme and device in Xcode and press `Run`.

### Android

Run one of the following commands to launch the app with a specific environment in mind:

```
npm run android:prod
npm run android:staging
npm run android:local
```
