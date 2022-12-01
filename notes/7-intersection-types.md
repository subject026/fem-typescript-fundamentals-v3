# Intersection

AND for types. Rarer than union types

```ts
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

// attach a new property to a date object with & operator
function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date(start.valueOf() + ONE_WEEK);
  return { ...start, end };
}
```
