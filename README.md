# Light Characteristic Parser

[![Build Status](https://github.com/k-yle/light-characteristics/workflows/Build%20and%20Test/badge.svg)](https://github.com/k-yle/light-characteristics/actions)
[![Coverage Status](https://coveralls.io/repos/github/k-yle/light-characteristics/badge.svg?branch=main&t=LQmPNl)](https://coveralls.io/github/k-yle/light-characteristics?branch=main)
[![npm version](https://badge.fury.io/js/light-characteristics.svg)](https://badge.fury.io/js/light-characteristics)
[![npm](https://img.shields.io/npm/dt/light-characteristics.svg)](https://www.npmjs.com/package/light-characteristics)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/light-characteristics)

🛥️🔦 A JavaScript library to encode and decode [light characteristics](https://en.wikipedia.org/wiki/Light_characteristic) used on [nautical charts](https://en.wikipedia.org/wiki/Nautical_chart).

## Install

```sh
npm install light-characteristics
```

## Usage

```js
import { decodeLight, encodeLight } from 'light-characteristics';

const light = decodeLight('AeroF.RY.5m');
light; // -> { LITCHR: 'F', COLOUR: ['R', 'Y'], HEIGHT: 5, CATLIT: 'aero' }

const encoded = encodeLight({
  LITCHR: 'F',
  COLOUR: ['R', 'Y'],
  HEIGHT: 5,
  CATLIT: 'aero',
});
encoded; // -> 'AeroF.RY.5m'
```
