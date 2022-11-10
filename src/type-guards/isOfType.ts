/* eslint-disable @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any */

/**
 * Type guard for checking if an object value is of a specific type by checking if a given K exists.
 */
export function isOfType<T>(value: any, property: keyof T): value is T {
  return value?.hasOwnProperty(property) && undefined !== value[property];
}
