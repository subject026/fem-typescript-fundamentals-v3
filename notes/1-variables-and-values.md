# variables and values

Types are inferred if not annotated explicitly

```ts
let a = 6; // -> let a: number
```

## literal types

More specific

Here value will always be 6 as it's declared as const. It's an _immutable_ type.

```ts
const a = 6; // -> const a: 6
```

## Implicit any

Sometimes we need to define a variable before it gets initialized. Not enough info for ts to infer a type.

```ts
let time; // -> let time: any

// We need add a type annotation
let time: Date;

time = 100; // -> error

time = new Date();
```

Having `any` types floating around can weaken guarantees you have around your code.

```ts
function add(a, b) {
  return a + b;
}

// ts can't infer return type
add(1, 2); // -> any

// add annotations
function add(a: number, b: number) {
  return a + b;
}

// now it can infer return type
add(1, 2); // -> number
```

`any` is a wildcard which can accept anything and also present itself as anything. When it's is passed into well typed code it compromises that well typed code.
