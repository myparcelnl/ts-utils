/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Return a new record only with the keys whose values are assignable to the given type. If no keys are assignable to the given type, the resulting record must be empty.
 */
export type ExtractRecord<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};
