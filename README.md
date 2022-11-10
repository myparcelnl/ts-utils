# TypeScript Utilities

This is a collection of TypeScript utilities that we reuse across all TS projects.

## Installation

**Using Yarn**

```bash
yarn add @myparcel/ts-utils
```

**Using pnpm**

```bash
pnpm add @myparcel/ts-utils
```

**Using npm**

```bash
npm install @myparcel/ts-utils
```

> ⚠️ Note: You can install this package as a dev dependency if you are not using the type guards.

## Contents

### Type guards

#### [isEnumValue](src/type-guards/isEnumValue.ts)

Type guard for checking if a value is a key of the given enum.

```ts
import { isEnumValue } from '@myparcel/ts-utils';

enum MyEnum {
  A = 'A',
  B = 'B',
}

const value = 'A';

if (isEnumValue(MyEnum, value)) {
  // value is of type MyEnum.A
}
```

#### [isInArray](src/type-guards/isInArray.ts)


#### [isOfType](src/type-guards/isOfType.ts)
Type guard for checking if an object value is of a specific type by checking if a given K exists.

```ts
import { isOfType } from '@myparcel/ts-utils';

interface BaseObject {
  a: string;
  b: number;
}

interface ObjectWithC extends BaseObject {
  c: string;
}

const value = {
  a: 'a',
  b: 1,
  c: 'c',
};

if (isOfType<ObjectWithC>(value, 'c')) {
  // value is of type ObjectWithC
}
```

### Types

### Utils

#### [toArray](src/utils/toArray.ts)

