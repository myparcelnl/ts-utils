import * as EXPORTS from '../../src';
import {describe, expect, it} from 'vitest';

describe('exports', () => {
  it('should export the correct files', () => {
    expect(EXPORTS).toMatchSnapshot();
  });
});
