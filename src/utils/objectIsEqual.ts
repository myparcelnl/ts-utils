/**
 * Compares two objects and returns true if they are equal
 */
export const objectIsEqual = (a: unknown, b: unknown): boolean => JSON.stringify(a) === JSON.stringify(b);
