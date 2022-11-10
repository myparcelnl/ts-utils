import {describe, expect, it} from 'vitest';
import {isEnumValue} from '../../type-guards';

enum MyEnum {
  DUANE = 'duane',
  JOHNSON = 'johnson',
}

describe('isEnumValue', () => {
  it('returns true if value is present in enum', () => {
    expect(isEnumValue('duane', MyEnum)).toBe(true);
  });

  it('returns false if value is not present in enum', () => {
    expect(isEnumValue('book', MyEnum)).toBe(false);
  });
});
