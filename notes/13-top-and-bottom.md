# Top and Bottom

Types decribe sets of things you can find stored in a variable.

```ts
let a: boolean; // anything in { true, false }
let b: 5 | 6 | 7; // anything in { 5, 6, 7 }
let c: {
  favoriteFruit?: "pineapple"; // { "pineapple", undefined }
};
```

## Top Types

Symbol `T`. Describes anything allowable by the system. TS provides two of these types, `any` and `unknown`.

### `any`

Anything allowed in javascript.

```ts
let flexible: any = 7;
flexible.it.is.possible.to.access.any.deep.property;
```

Sometimes `any` is appropriate eg.

```ts
// console.log can log anything
console.log(...data: any[]): void
```

### Unknown

Can hold anything but can't be used unless you narrow it with a type guard. Like it comes with a warning label that makes you check what type is

```ts
let unknownThing: unknown = 14;

if (typeof unknownThing === "string") {
  // this code runs if unknownThing is  string
} else if (typeof unknownThing === "number") {
  // this runs if it's a number
} else {
  // runs for any other type
}
```

## Bottom Types

### `never`

Represents values that are not allowed. Useful for exhaustive conditionals where you know you need to handle every case of something.

```ts
class Car {}
class Boat {}

type Vehicle = Car | Boat;

let myVehicle: Vehicle = new Car();

if (myVehicle instanceof Car) {
  // do something
} else if (myVehicle instanceof Boat) {
  // do something
} else {
  // this should never run
  // will run if there we're not handling one of the types included in the union
  const neverValue: never = myVehicle;
}
```

You could throw an error in the `else` clause but using the `never` type means the issue can be picked up at compile time.

#### helper `UnreachableError` class

```ts
class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message);
  }
}

// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow(); // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive(); // Car
} else {
  // NEITHER!
  throw new UnreachableError(myVehicle);
}
```
