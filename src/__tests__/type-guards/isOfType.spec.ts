import {describe, expect, it} from 'vitest';
import {isOfType} from '../../type-guards';

type MyObjectType = {
  ref: string;
};

describe('isOfType', () => {
  it('works on objects', () => {
    expect(isOfType<MyObjectType>({ref: 'foo'}, 'ref')).toBe(true);
  });

  it('works on objects with inherited properties', () => {
    expect(isOfType<MyObjectType>(Object.create({ref: 'foo'}), 'ref')).toBe(true);
  });

  it('works on strings', () => {
    expect(isOfType<string>('', 'substring')).toBe(true);
  });

  it('works on arrays', () => {
    expect(isOfType<string[]>(['string'], 'length')).toBe(true);
  });

  it('works on functions', () => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    expect(isOfType<Function>(() => undefined, 'call')).toBe(true);
  });

  it('works on classes', () => {
    class MyClass {
      public foo = 'foo';
    }

    expect(isOfType<MyClass>(new MyClass(), 'foo')).toBe(true);
  });

  it('works on classes with inherited properties', () => {
    class MyClass {
      public foo = 'foo';
    }

    class ChildClass extends MyClass {}

    expect(isOfType<MyClass>(new ChildClass(), 'foo')).toBe(true);
  });

  it.each([
    [undefined],
    [null],
    [0],
    [1],
    [true],
    [false],
    [NaN],
    [Infinity],
    [Symbol('foo')],
    [(): void => undefined],
    [new Date()],
    [new Error()],
    [new Map()],
    [new Set()],
  ])('does not match on %s', (value) => {
    expect(isOfType<MyObjectType>(value, 'ref')).toBe(false);
  });
});
