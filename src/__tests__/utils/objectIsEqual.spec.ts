import {describe, expect, it} from 'vitest';
import {objectIsEqual} from '../../utils';

describe('objectIsEqual', () => {
  it('returns true for equal objects', () => {
    expect(objectIsEqual({foo: 'bar'}, {foo: 'bar'})).toBe(true);
  });

  it('returns false for different objects', () => {
    expect(objectIsEqual({foo: 'bar'}, {foo: 'baz'})).toBe(false);
  });

  it('returns false for different objects with overlapping keys', () => {
    expect(objectIsEqual({foo: 'bar'}, {foo: 'bar', baz: 'qux'})).toBe(false);
  });
});
