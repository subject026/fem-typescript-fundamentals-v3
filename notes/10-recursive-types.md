# Recursive Types

```ts
type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];

if (typeof val !== "number") {
  // val: NestedNumbers[]
  val.push(41);

  val.push("wont work"); // this won't work
}
```
