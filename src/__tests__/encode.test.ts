import { describe, it, expect } from 'vitest';
import { encodeLight } from '../encode.js';
import { SAMPLE_DATA } from './sampleData.js';

describe('encodeLight', () => {
  it.each(SAMPLE_DATA)('can encode %s', (encoded, decoded, reëncoded) => {
    expect(encodeLight(decoded)).toBe(reëncoded || encoded);
  });
});
