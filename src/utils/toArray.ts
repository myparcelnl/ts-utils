import {OneOrMore} from '../types';

/**
 * Convert input to an array, if it's not already an array.
 */
export const toArray = <T>(itemOrItems: OneOrMore<T>, separator?: string): T[] => {
  if (itemOrItems === null || itemOrItems === undefined) {
    return [];
  }

  if (separator && typeof itemOrItems === 'string') {
    return itemOrItems.split(separator) as unknown as T[];
  }

  return Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
};
