import {describe, expect, it} from 'vitest';
import {asyncSome} from '../../utils';

describe('asyncSome', () => {
  it('should return true if one element passes the predicate', async () => {
    const arr = [1, 2, 3, 4, 5];
    const result = await asyncSome(arr, (value) => value > 4);

    expect(result).toBe(true);
  });

  it('should return false if all elements fail the predicate', async () => {
    const arr = [1, 2, 3, 4, 5];
    const result = await asyncSome(arr, (value) => value > 5);

    expect(result).toBe(false);
  });
});
