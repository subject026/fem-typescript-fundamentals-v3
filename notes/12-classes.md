# Classes

TS adds features on top of standard JS classes.

## Class Fields

In javascript

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

const newCar = new Car("BMW", "318is");

newCar.cheese; // don't get any type info just any's
```

Annotate the class fields up front in TS

```ts
class Car {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}
```

## Aceess Modifier Keywords

indicate the visibility of with `public`, `protected`, `private`.

ECMAscript private class fields (`#propertyName`) work nicely with ts. These are private at runtime(?)

```ts
class Car {
    // public properties accessible anywhere
  public make: string;
  public model: string;
  // protected properties accessible within class or child classes
  protected vinNumber: generateVinNumber()
  // private properties only accessible within this class
  private doorLockCode: generateDoorLockCode();
  // ES private class field
  #year: number
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  protected unlockAllDoors() {
    unlockCar(thism this.doorLockCode)
  }
}

class Sedan extends Car {
    constructor(make: string, model: string) {
    super(make, model)
    this.vinNumber // can access protected property here
    this.doorLockCode // not accessible here, only within parent class
  }

  public unlock() {
    this.unlockAllDoors() // this method on parent class is callable here but not outside classes
  }
}
```

## readonly

Prevents reassignment, not mutability.

```ts
class Car {
  readonly make: string;
  readonly model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  updateMake() {
    this.make = "something else"; // this isn't possible
  }
}
```

## Param Properties

Avoid having to type out assignments in constructor function

```ts
class Car {
  constructor(public make: string, public model: string, public year: number) {}
}
```

compiles to

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
```
