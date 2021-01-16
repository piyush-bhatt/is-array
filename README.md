# is-array

is-array package for Deno. Checks whether a given value is an array.

## Usage

```typescript
import isArray from "https://github.com/piyush-bhatt/is-array/raw/main/mod.ts";

const isArrayAnArray = isArray([1,2,3]); // true
const isObjectAnArray = isArray({}); // false
const isNumberAnArray = isArray(35); // false
const isStringAnArray = isArray('foo'); // false
const isBooleanAnArray = isArray(true); // false
const isNullAnArray = isArray(null); // false
const isUndefinedAnArray = isArray(undefined); // false
const isFunctionAnArray = isArray(() => {}); // false
```

## MIT Licensed
