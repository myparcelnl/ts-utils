// noinspection JSUnusedGlobalSymbols
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Inverts a map type so that the values become the keys and the keys become the values.
 */
export type ReverseMap<T extends Record<keyof T, keyof any>> = {
  [P in T[keyof T]]: {
    [K in keyof T]: T[K] extends P ? K : never;
  }[keyof T];
};
