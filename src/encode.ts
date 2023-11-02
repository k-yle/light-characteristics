import { Light } from './defintions.js';

export function encodeLight(tags: Light): string {
  let str = '';

  if (tags.CATLIT === 'directional') str += 'Dir';
  if (tags.CATLIT === 'aero') str += 'Aero';
  if (tags.MLTYLT) str += tags.MLTYLT;
  if (tags.LITCHR) {
    if (tags.SIGGRP) {
      if (tags.LITCHR.includes('+')) {
        // light charactertics with a plus are formatted differently
        const [prefix, suffix] = tags.LITCHR.split('+');
        str += `${prefix}(${tags.SIGGRP})+${suffix}`;
      } else {
        str += `${tags.LITCHR}(${tags.SIGGRP})`;
      }
    } else {
      // no group, simple case
      str += tags.LITCHR;
    }
  }

  // if the last character is not a bracket, and the next token
  // is going to be a colour, then add a dot
  if (str && str.at(-1) !== ')') str += '.';

  if (tags.COLOUR.length) str += tags.COLOUR.join('');

  // add another dot, unless the previous group was empty
  if (str.at(-1) !== '.') str += '.';

  if (tags.SIGPER) str += `${tags.SIGPER}s`;
  if (tags.HEIGHT) str += `${tags.HEIGHT}m`;
  if (tags.VALMXR) str += `${tags.VALMXR}M`;

  // turns out we didn't need that separator
  if (str.at(-1) === '.') str = str.slice(0, -1);

  if (tags.CATLIT === 'vertical') str += '(vert)';
  if (tags.CATLIT === 'horizontal') str += '(hor)';
  if (tags.CATLIT === 'front') str += '(Front)';
  if (tags.CATLIT === 'rear') str += '(Rear)';
  if (tags.CATLIT === 'upper') str += '(Upper)';
  if (tags.CATLIT === 'lower') str += '(Lower)';

  return str;
}
