import {describe, expect, it} from 'vitest';
import {partitionArray} from '../../utils';

describe('partitionArray', () => {
  it('partitions array into two parts based on a predicate', () => {
    expect(partitionArray([1, 2, 3, 4, 5], (value) => value % 2 === 0)).toEqual([
      [2, 4],
      [1, 3, 5],
    ]);
  });

  it.each([
    ['empty', []],
    ['null', null],
    ['undefined', undefined],
  ])('returns two empty arrays if any input is %s', (_, value) => {
    expect(partitionArray(value, () => true)).toEqual([[], []]);
  });
});
