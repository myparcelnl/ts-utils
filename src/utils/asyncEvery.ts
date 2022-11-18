import {PromiseOr} from '../types';

/**
 * Returns true if every element in the array satisfies the provided predicate.
 */
export const asyncEvery = async <A>(
  arr: A[],
  predicate: (value: A, index: number, array: A[]) => PromiseOr<boolean>,
): Promise<boolean> => {
  for (let i = 0; i < arr.length; i++) {
    if (!(await predicate(arr[i], i, arr))) {
      return false;
    }
  }

  return true;
};
