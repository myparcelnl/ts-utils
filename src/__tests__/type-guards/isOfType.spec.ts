import {describe, expect, it} from 'vitest';
import {isOfType} from '../../type-guards';

type MyObjectType = {
  ref: string;
};

describe('isOfType', () => {
  it('checks for value', () => {
    expect(isOfType<MyObjectType>({ref: 'foo'}, 'ref')).toBe(true);
  });

  it('does not match undefined', () => {
    expect(isOfType<MyObjectType>({ref: undefined}, 'ref')).toBe(false);
  });

  it('does not match wrong keys', () => {
    expect(isOfType<MyObjectType>('string', 'ref')).toBe(false);
  });
});
