# Guards and Narrowing

## Built-in type guards

```ts
let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  // value -> Date
}

// typeof
else if (typeof value === "string") {
  // value -> "pineapple"
}

// specific value check
else if (typeof value === null) {
  // value -> null
}

// truthy / falsey
else if (!value) {
  // value -> undefined
}

// some built-in functions
else if (Array.isArray(value)) {
  // value -> [number]
}

// property presence check
else if ("dateRange" in value) {
  // value -> "pineapple"
}

// all potential types exhausted
else {
  // value -> never;
}
```

## User Defined Type Guards

Critical code is correct as we're telling TS to trust it.

```ts
interface CarLike {
  make: string;
  model: string;
  year: string;
}

// specific return type tells TS boolean returned should be taken as indication of whether
// the value to test confirms to the type
function isCarLike(value: any): value is CarLike {
  return (
    value &&
    typeof value === "object" &&
    "make" in value &&
    typeof value["make"] === "string" &&
    "model" in value &&
    typeof value["model"] === "string" &&
    "year" in value &&
    typeof value["year"] === "number"
  );
}

let maybeCar: unknown;

if (isCarLike(maybeCar)) {
  maybeCar; // maybeCar: CarLike
}

// could also wrap it to create an assert fn
function assertCarLike(value: unknown): asserts value is CarLike {
  if (!isCarLike(value))
    throw new Error(`Value does not appear to be CarLike ${value}`);
}
```

## definite assignment operator

TS can't be sure this boolean will be set when object is instantiated as we're setting it in the promise callback.

```ts
class ThingWithAsyncSetup {
  setupPromise: Promise<any>;
  // Property 'isSetup' has no initializer and is not definitely assigned in the constructor.ts(2564)
  isSetup: boolean;

  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false;
      return this.doSetup();
    });
  }

  private async doSetup() {
    // do something async
  }
}
```

We know this is actually fine and can tell TS we're taking responsibility for it with the definitely assigned operator.

```ts
class ThingWithAsyncSetup {
  setupPromise: Promise<any>;
  // add a bang
  isSetup!: boolean;

  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false;
      return this.doSetup().then(() => {
        this.isSetup = true;
      });
    });
  }

  private async doSetup() {
    // do something async
  }
}
```
