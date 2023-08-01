/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A type for an instantiable class.
 */
export type Newable<T> = new (...args: any[]) => T;
