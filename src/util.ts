import {
  COLOURS,
  Colour,
  LIGHT_CATEGORIES,
  LIGHT_CHARACTERISTICS,
  LightCategory,
  LightCharacteristic,
} from './defintions.js';

/** @internal longest first, so that we match greedily */
export const LIGHT_CHARACTERISTICS_SORTED = Object.keys(
  LIGHT_CHARACTERISTICS,
).sort((a, b) => b.length - a.length);

/** @internal longest first, so that we match greedily */
export const COLOURS_SORTED = Object.keys(COLOURS).sort(
  (a, b) => b.length - a.length,
);

/**
 * @internal
 * If the string starts with a colour, return that colour.
 * Otherwise, return nothing (i.e. fail at the first invalid
 * colour).
 */
export const findNextColour = (string: string): Colour | undefined =>
  COLOURS_SORTED.find((option): option is Colour => string.startsWith(option));

/** @internal */
export const isCategory = (str: string): str is LightCategory =>
  str in LIGHT_CATEGORIES;

/** @internal */
export const isCharacteristic = (str: string): str is LightCharacteristic =>
  str in LIGHT_CHARACTERISTICS;
