import { describe, it, expect } from 'vitest';
import { decodeLight } from '../decode.js';
import { SAMPLE_DATA } from './sampleData.js';

describe('decodeLight', () => {
  it.each(SAMPLE_DATA)('can decode %s', (encoded, decoded) => {
    expect(decodeLight(encoded)).toStrictEqual(decoded);
  });
});
