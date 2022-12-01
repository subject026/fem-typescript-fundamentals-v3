# Union Types

OR for types

```ts
const result: "error" | "success" = "error"; // can be error or success
```

```ts
function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (Math.random() > 0.5) {
    return ["success", { name: "steve", email: "steve@email.com" }];
  } else {
    return ["error", new Error("no user data found")];
  }
}

const [first, second] = maybeGetUserInfo();

second.name; // fine as both potential values have a name property

second.email; // this will error as the property doesn't exist on one of the potential values

// we can use narrowing to solve this
if (second instanceof Error) {
  second; // we know here this matches Error type
} else {
  second; // in here we know it matches the other type in the union
}
```

## Discriminated (or tagged) Unions

We can identify which union we're looking at if we have a convenient key to use in a type guard. That allows ts to discriminate between the differnt types in a union.

```ts
const outcome = maybeGetUserInfo();

if (outcome[0] === "error") {
  // ts understands which tuple we have in here now
  outcome; // ["error", Error]
}
```
