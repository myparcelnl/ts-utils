import {describe, expect, it} from 'vitest';
import {isEnumValue} from '../../type-guards';

enum MyEnum {
  DUANE = 'duane',
  JOHNSON = 'johnson',
}

enum MyNumberEnum {
  DUANE = 4880,
  JOHNSON = 4881,
}

describe('isEnumValue', () => {
  it('returns true if value is present in enum', () => {
    expect(isEnumValue('duane', MyEnum)).toBe(true);
  });

  it('returns false if value is not present in enum', () => {
    expect(isEnumValue('book', MyEnum)).toBe(false);
  });

  it('returns true if value is present in number enum', () => {
    expect(isEnumValue(4880, MyNumberEnum)).toBe(true);
  });

  it('returns false if value is not present in number enum', () => {
    expect(isEnumValue(1, MyNumberEnum)).toBe(false);
  });
});
