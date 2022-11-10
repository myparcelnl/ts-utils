import {describe, expect, it} from 'vitest';
import {toArray} from '../../utils';

describe('toArray', () => {
  it('wraps single value in array', () => {
    expect(toArray('foo')).toEqual(['foo']);
  });

  it('does not wrap value that is already an array', () => {
    expect(toArray(['foo'])).toEqual(['foo']);
  });

  it('splits string by separator', () => {
    expect(toArray('foo,bar', ',')).toEqual(['foo', 'bar']);
  });
});
