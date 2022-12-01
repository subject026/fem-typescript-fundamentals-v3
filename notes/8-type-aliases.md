# Type Aliases

Define types with friendly names that we can export/import throughout codebase.

```ts
// convention is to use TitleCase for names
export type UserContactInfo = {
  name: string;
  email: string;
};
```

Makes things easier to read

```ts
type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = ["success", { name: string; email: string }];

function maybeGetUserInfo(): UserInfoOutcomeError | UserInfoOutcomeSuccess {
  if (Math.random() > 0.5) {
    return ["success", { name: "steve", email: "steve@email.com" }];
  } else {
    return ["error", new Error("no user data found")];
  }
}
```

## Inheritance (pseudo inheritance?)

Can combine existing types using intersection types.

```ts
type SpecialDate = Date & { end: Date };

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

function makeWeek(): SpecialDate {
  const start = new Date();
  const end = new Date(start.valueOf() + ONE_WEEK);
  return { ...start, end };
}
```
