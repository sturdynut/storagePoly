# Storage Poly | [![CircleCI](https://circleci.com/gh/sturdynut/storagePoly/tree/master.svg?style=svg&circle-token=c75d9cef31f5d841ff8201af2923ade3e7500602)](https://circleci.com/gh/sturdynut/storagePoly/tree/master) [![Coverage Status](https://coveralls.io/repos/github/sturdynut/storagePoly/badge.svg?branch=master)](https://coveralls.io/github/sturdynut/storagePoly?branch=master)

A polyfill for localStorage and sessionStorage for those times when they're undefined.

## Requirements

* Node 6+

## Install

`yarn add storagepoly` or `npm install storagepoly -S`

## Usage

```javascript
import 'storagepoly'; // or require('storagepoly')

// Setting
localStorage.setItem('myItem', 'My stored value');

// Getting
const myItem = localStorage.getItem('myItem');

// Removing
localStorage.removeItem('myItem');

// Clearing
localStorage.clear();

```

## API

* `localStorage`: Mirrors api of `window.localStorage` [DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* `sessionStorage`: Mirrors api of `window.sessionStorage` [DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

## Questions?

[@sturdynut](https://twitter.com/sturdynut)

## Bugs?

[Submit a bug](https://github.com/sturdynut/storagepoly/issues)

## License

This project is distributed under the MIT license.
