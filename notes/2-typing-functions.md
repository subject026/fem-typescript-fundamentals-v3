# Typing Functions

Ts can infer return types but if we annotate return type explicitly we can catch errors will be surfaced at location of function definition rather than when we use the function.

This is better as the definition is where the code needs to be fixed.

```ts
function add(a: number, b: number) {
  return null;
}

add(add(1, 2), 3); // this will error here

function add(a: number, b: number): number {
  // added return type
  return null; // this will error here as the return value isn't the correct type
}
```
