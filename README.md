# Visitor Tracking System

Manages visitors check-ins / check-outs.

Project uses react, redux and sagas.

Currently, because of saving in local storage, all actions are synchronous,
but everything is prepared to switch to some async storage.

A simple app that allows to register a card for a visitor after providing thir name. If the creation is successful,
you get card id back, if there is a failure, you are informed of the reason. One person is not allowed to have more 
than one active card.

## Installation

In the project directory use `npm install` to install it on local machine.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:8769](http://localhost:8769) to view it in the browser.

The page will reload if you make edits.
You will also see any code errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Launches code linting.

- `yarn lint:js` using [ESLint](http://eslint.org) and [airbnb](https://github.com/airbnb/javascript) JS Style Guide.
- `yarn lint:css` using [stylelint](https://stylelint.io) with [standard config](https://github.com/stylelint/stylelint-config-standard).

### `npm test`

Launches code testing.