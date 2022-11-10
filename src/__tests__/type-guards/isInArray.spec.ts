import {describe, expect, it} from 'vitest';
import {isInArray} from '../../type-guards';

describe('isInArray', () => {
  it('returns true if value is present in array', () => {
    expect(isInArray('duane', ['duane', 'johnson'])).toBe(true);
  });

  it('returns false if value is not present in array', () => {
    expect(isInArray('book', ['duane', 'johnson'])).toBe(false);
  });
});
