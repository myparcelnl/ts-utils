/**
 * Recursively makes all properties of an object required.
 */
export type RecursiveRequired<T> = {
  [P in keyof T]-?: T[P] extends (infer U)[]
    ? RecursiveRequired<U>[]
    : T[P] extends object | undefined
    ? RecursiveRequired<T[P]>
    : T[P];
};
