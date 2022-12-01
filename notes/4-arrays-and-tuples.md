# Arrays

```ts
const fileExtensions = ["js", "ts"]; // inferred as string[]

const stuff: string[] = ["one", "two", "three"]; // explicit annotation
```

## Tuples

Special type of array.

```ts
const car = [2002, "BMW", "525"]; // inferred as (string | number)[]

// we can define the shape of the array like this
const car: [number, string, string] = [2002, "BMW", "525"];

// this will give an error as the array doesn't match the type
const car: [number, string, string] = [2002, "BMW", "525", "petrol"];
```

At the moment tuple length is enforced on assignment like above but not when mutating with `push` or `pop`.
