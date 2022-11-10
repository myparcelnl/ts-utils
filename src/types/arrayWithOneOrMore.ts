/**
 * Forcibly type an array to have at least one element.
 */
export type ArrayWithOneOrMore<T> = {0: T} & T[];
