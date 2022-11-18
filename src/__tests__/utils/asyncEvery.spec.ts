import {describe, expect, it} from 'vitest';
import {asyncEvery} from '../../utils';

describe('asyncEvery', () => {
  it('should return true if all elements pass the predicate', async () => {
    const arr = [1, 2, 3, 4, 5];
    const result = await asyncEvery(arr, (value) => value < 6);

    expect(result).toBe(true);
  });

  it('should return false if one element fails the predicate', async () => {
    const arr = [1, 2, 3, 4, 5];
    const result = await asyncEvery(arr, (value) => value < 5);

    expect(result).toBe(false);
  });
});
