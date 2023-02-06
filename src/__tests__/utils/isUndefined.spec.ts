import {describe, expect, it} from 'vitest';
import {isUndefined} from '../../utils/isUndefined';

describe('isUndefined', () => {
  it('returns true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it.each([[{}], [[]], [false], [true], [0], [1], [''], ['foo'], [null]])('returns false for %s', (value) => {
    expect(isUndefined(value)).toBe(false);
  });
});
