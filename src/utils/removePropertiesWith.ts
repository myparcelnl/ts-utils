/**
 * Removes keys and values from an object if predicate(value) returns true
 */
export const removePropertiesWith = <T extends Record<string, unknown>>(
  object: T,
  predicate: (value: unknown) => boolean | Promise<boolean>,
): Omit<T, keyof T> => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (!predicate(value)) {
      // @ts-expect-error - we know the key is in the object
      acc[key] = value;
    }

    return acc;
  }, {} as T);
};
