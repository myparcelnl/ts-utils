import {describe, expect, it} from 'vitest';
import {removePropertiesWith} from '../../utils/removePropertiesWith';

describe('removePropertiesWith', () => {
  it('should remove properties with given predicate', () => {
    const object = {
      one: 1,
      two: 2,
      three: 3,
    };

    const result = removePropertiesWith(object, (value) => value === 2);

    expect(result).toEqual({
      one: 1,
      three: 3,
    });
  });
});
