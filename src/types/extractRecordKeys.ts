/* eslint-disable @typescript-eslint/no-explicit-any */
import {ExtractRecord} from './extractRecord';

/**
 * Extracts the keys of a record whose values are assignable to the given type.
 */
export type ExtractRecordKeys<T extends Record<any, any>, U> = keyof ExtractRecord<T, U>;
