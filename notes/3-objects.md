# Objects

What properties and what are the types of these properties.

```ts
function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number; // optional property
}) {
  let str = `${car.make} ${car.model} ${car.year}`;

  // this is a typeguard
  if (typeof car.chargeVoltage !== undefined) {
    // ts compiler knows chargeVoltage is defined in here
    str += `// ${car.chargeVoltage}`;
  }
}

const someCar = {
  make: "BMW",
  model: "E21",
  year: 1984,
  color: "silver",
};

printCar({
  make: "BMW",
  model: "E21",
  year: 1984,
  color: "silver", // this will error as this property will never be used according to fn definition
});

// this is fine as we might have needed to access color before passing the object as an arg
printCar(someCar);
```

## Dictionaries

Objects where values of a consistent type are retreivable by keys.

```ts
const dict = {
  home: { country: "+44", area: "01222", number: "111111" },
  work: { country: "+44", area: "01222", number: "222222" },
  fax: { country: "+44", area: "01222", number: "333333" },
};

const phones: {
  // can describe this as an index signature
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};
```
