# Nullish Values

There are situations where values might be `null` or `undefined`.

## `null`

There is a value and that value is _nothing_

```ts
const userInfo = {
  name: "steve",
  // user has no email
  email: null,
};
```

## `undefined`

value isn't available (yet?)

```ts
const userInfo = {
  name: "steve",
  email: "steve@email.com",
  // indicates this isn't set yet but might be sometime in the future
  signupIsComplete: undefined,
};
```

## `void`

Just to indicate a function's return value can be ignored.

## non-null assertion operator

Used to cast away the possibility that a value might be `null` or `undefined`

Value can still be `null` or `undefined` as this just tells ts to ignore that possibility so you might see a runtime error.

Can be useful in test suites as errors will be thrown causing tests to fail.

```ts
type GroceryCart = {
  fruits?: { name: string; qty: number }[];
  vegetables?: { name: string; qty: number }[];
};

const shopping: GroceryCart = {};

// fruits could be undefined so this will err
shopping.fruits.push({ name: "bean", qty: 1 });

// this will not annoy ts but will err at runtime
shopping.fruits!.push({ name: "bean", qty: 1 });
```
