/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Resolves the type of given promise.
 */
export type ResolvePromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
