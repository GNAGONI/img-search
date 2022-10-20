# Overview

The application allows users to search for the images after the simple login.

## Project structure

The `src` folder contains the following key folders:

- `components` - simple components without any business logic
- `features` - functionality with isolated logic of the app behavior
- `hooks` - custom hooks of the application
- `modules` - group of components, business logic and types
- `providers` - providers of the application
- `constants` - common constant storage

### `modules`

The `modules` folder stores key parts of the application functionality connecting components, types and business logic, including store interaction using actions, sagas. The module in the application may be referred as a page.

### `features`

The `features` folder stores isolated features, which are defined as a high-level application logic. For example, feature `Notification` in the application provides a top-level notification, which can be fired by the action, which `Notification` feature provides.

## Project solutions

The project uses the following key modules:

- `react`
- `typescript`
- `redux`
- `redux-persist` - provides consistency of a storage during page reloading
- `redux-saga` - allows to move business logic from components or any other part of code to an isolated place
- `mui` - material-ui library for components and their styling

## Available Scripts

### `npm start`

Runs the app in the development mode

### `npm run build`

Builds the app in the production mode

### `npm run test`

Runs tests for the app

### `npm run lint`

Lints the app

### `npm run predeploy`

Runs lint, test and build scripts for the app
