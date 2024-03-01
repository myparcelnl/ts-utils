import {type MakeRequired} from '../../types';

const correct1: MakeRequired<{a?: number; b?: string}, 'a'> = {
  a: 1,
};
const correct2: MakeRequired<{a?: number; b?: string}, 'a' | 'b'> = {
  a: 1,
  b: 'b',
};

// @ts-expect-error
const incorrect1: MakeRequired<{a?: number; b?: string}, 'a'> = {
  b: 'b',
};
// @ts-expect-error
const incorrect2: MakeRequired<{a?: number; b?: string}, 'a' | 'b'> = {
  a: 1,
};
