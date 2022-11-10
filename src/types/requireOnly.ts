/**
 * Makes all properties of an object optional except the ones specified.
 */
export type RequireOnly<K, T extends keyof K> = Required<Pick<K, T>> & Partial<Omit<K, T>>;
