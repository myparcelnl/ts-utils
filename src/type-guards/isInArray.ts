/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
/**
 * Type guard which checks if given value is inside an array.
 */
export const isInArray = <T extends readonly any[]>(value: any, array: T): value is T[number] => array.includes(value);
