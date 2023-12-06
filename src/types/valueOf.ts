/**
 * Get the values of a type
 */
export type ValueOf<T extends Record<string, unknown>> = T[keyof T];
