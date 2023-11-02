import {
  Colour,
  LIGHT_CATEGORIES,
  Light,
  LightCategory,
} from './defintions.js';
import {
  LIGHT_CHARACTERISTICS_SORTED,
  findNextColour,
  isCategory,
  isCharacteristic,
} from './util.js';

const FINAL_NUMBERS_REGEX =
  /(?<SIGPER>\d[\d.]*s)?(?<HEIGHT>\d[\d.]*m)?(?<VALMXR>\d[\d.]*(M|Nm))?$/;

/** The encoded string may use abbreviations of the long category names */
const CATLIT_MAP: Record<string, string> = {
  vertical: 'vert',
  horizontal: 'hor',
  directional: 'dir',
} satisfies Partial<Record<LightCategory, string>>;

export function decodeLight(originalString: string): Light {
  let string = originalString;
  const light = <Light>(<never>{ COLOUR: [] });

  // see if it starts with a category. If yes, remove that from the string
  const prefix = Object.keys(LIGHT_CATEGORIES).find((option) =>
    string.toLowerCase().startsWith(CATLIT_MAP[option] || option),
  );
  if (prefix && isCategory(prefix)) {
    light.CATLIT = prefix;
    const originalValue = CATLIT_MAP[prefix] || prefix;
    string = string.slice(originalValue.length);
  }

  // see if it ends with a category. If yes, remove that from the string
  const suffix = Object.keys(LIGHT_CATEGORIES).find((option) =>
    string.toLowerCase().endsWith(`(${CATLIT_MAP[option] || option})`),
  );

  if (suffix && isCategory(suffix)) {
    light.CATLIT = suffix;
    const originalValue = CATLIT_MAP[suffix] || suffix;
    // minus 2 because of the opening and closing brackets
    string = string.slice(0, -originalValue.length - 2);
  }

  // see if the start of the string is a number. If yes, it
  // must be MLTYLT. Remove that from the string
  const leadingNumbers = string.match(/^\d+/g)?.[0];
  if (leadingNumbers) {
    light.MLTYLT = +leadingNumbers;
    string = string.slice(leadingNumbers.length);
  }

  const numbersMatch = string.match(FINAL_NUMBERS_REGEX);
  if (numbersMatch?.groups && numbersMatch?.[0]) {
    const { SIGPER, HEIGHT, VALMXR } = numbersMatch.groups;
    if (SIGPER) light.SIGPER = parseFloat(SIGPER);
    if (HEIGHT) light.HEIGHT = parseFloat(HEIGHT);
    if (VALMXR) light.VALMXR = parseFloat(VALMXR);

    // remove this block from the string
    string = string.slice(0, -numbersMatch[0].length);
  }

  // the only thing remaining that could be in brackets is the SIGGRP.
  const maybeSignalGroup = string.match(/\((?<SIGGRP>[\w+]+)\)/);
  if (
    maybeSignalGroup?.groups?.SIGGRP &&
    maybeSignalGroup.index !== undefined
  ) {
    light.SIGGRP = maybeSignalGroup.groups.SIGGRP;
    // replace this block with a separator, since the closing bracket
    // previously acted as an implicit separator.
    // There could now be consequetive dots, but we don't care.
    // The only case where we don't do this, is if the next char
    // is a plus.
    const fullMatch = maybeSignalGroup[0];
    const nextChar = string[maybeSignalGroup.index + fullMatch.length];

    string = string.replace(fullMatch, nextChar === '+' ? '' : '.');
  }

  // all that is left is the light characteristic and colour.
  const maybePattern = LIGHT_CHARACTERISTICS_SORTED.find((option) =>
    string.startsWith(option),
  );
  if (maybePattern && isCharacteristic(maybePattern)) {
    light.LITCHR = maybePattern;
    // replace this block with a separator.
    // There could now be consequetive separators, we don't care.
    string = string.replace(maybePattern, '.');
  }

  // the only thing that can be left is the colour(s), and separators (space or period).
  string = string.replaceAll('.', '').replaceAll(' ', '');

  let nextColour: Colour | undefined;
  // eslint-disable-next-line no-cond-assign
  while ((nextColour = findNextColour(string))) {
    light.COLOUR.push(nextColour);
    string = string.slice(nextColour.length);
  }
  // the loop will exit when the start of the
  // string is blank, or not a valid colour.

  // we should now be done. Error if anything is missing.
  if (!light.LITCHR) throw new SyntaxError('No light characteristic found');
  if (string) throw new SyntaxError(`Unexpected text remaining: “${string}”`);

  return light;
}
