/**
 * Type guard for checking if a value is a key of the given enum.
 */
export function isEnumValue<T extends Record<string, unknown>>(key: unknown, enumObject: T): key is T[keyof T] {
  return Object.values(enumObject).includes(key);
}
