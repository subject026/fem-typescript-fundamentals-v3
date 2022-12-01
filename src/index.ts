/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeOut(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

/**
 * Add three numbers
 * @param a first number
 * @param b second number
 */
export async function addNumbers(a: number, b: number) {
  await timeOut(500);
  return a + b;
}

(async () => {
  console.log(await addNumbers(3, 4));
})();

export function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number; // optional property
}): void {
  let str = `${car.make} ${car.model} ${car.year}`;

  // this is a typeguard
  if (typeof car.chargeVoltage !== undefined) {
    // ts compiler knows chargeVoltage is defined in here
    str += `// ${car.chargeVoltage}`;
  }

  console.log(str);
}

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

// both potential values for the second variable have properties called name
// but we need narrowing to handle this value properly

if (second instanceof Error) {
  second; // we know here this matches Error type
} else {
  second; // in here we know it matches the other type in the union
}

const outcome = maybeGetUserInfo();

if (outcome[0] === "error") {
  // ts understands which tuple we have in here now
  outcome; // ["error", Error]
}

// intersection
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date(start.valueOf() + ONE_WEEK);
  return { ...start, end };
}

// type aliases

export type UserContactInfo = {
  name: string;
  email: string;
};

interface UserInfo {
  name: string;
  email: string;
}

function printUserInfo(info: UserInfo) {
  console.log(`${info.name} ${info.email}`);
}

interface UserInfo {
  phone: number;
}

interface Window {
  newProperty: string;
}

// recursive

type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];

if (typeof val !== "number") {
  val.push(41);

  // val.push("wont work"); // this won't work

  console.log(val);
}

//
// JSON Exercise Solution

type JSONObject = {
  [k: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = JSONObject | JSONArray | string | number | boolean | null;

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {}

// POSITIVE test cases (must pass)
isJSON("hello");
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: "hello" });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, "foo"] } });

// NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => "");
// @ts-expect-error
isJSON(class {});
// something has changed in rts spec? => @ts-expect-error
isJSON(undefined);
// @ts-expect-error
isJSON(new BigInt(143));
// @ts-expect-error
isJSON(isJSON);

// functions

interface ITwoNumberCalculation {
  (x: number, y: number): number;
}

type TTwoNumberCalculation = (x: number, y: number) => number;

const adder: ITwoNumberCalculation = (a, b) => {
  return a + b;
};

type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

// overloads - also known as heads of the function
// like specifiying use cases of a function
function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler);
function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler);

// then our implementation
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myFrame = document.getElementsByTagName("iframe")[0];
const myForm = document.getElementsByTagName("form")[0];

// we can either pass a HTMLFormElement or a HTMLIFrameElement
// ts knows what cb value type is based on element we pass in
handleMainEvent(myFrame, (val) => {
  // val: MessageEvent
});

handleMainEvent(myForm, (val) => {
  // val: FormData
});

// this

function myClickHandler(event: Event) {
  // ts doesn't know what we are calling this handler on
  // this: any
}

function thisClickHandler(this: HTMLButtonElement, event: Event) {
  // ts doesn't know what we are calling this handler on
  // this: HTMLButtonElement
}

// classes

class Car1 {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

const newCar = new Car1("BMW", "318is");

// newCar.cheese; // don't get any type info just any's

// `private` `public`, `protected

function generateVinNumber() {
  return 123;
}
function generateDoorLockCode() {
  return 123;
}

// class Car {
//   public make: string;
//   public model: string;
//   protected vinNumber: number;
//   private doorLockCode: number;
//   constructor(make: string, model: string) {
//     this.make = make;
//     this.model = model;
//     this.vinNumber = generateVinNumber();
//     this.doorLockCode = generateDoorLockCode();
//   }

//   protected unlockAllDoors() {
//     // unlockCar(this.doorLockCode)
//   }
// }

class Car2 {
  readonly make: string;
  readonly model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  updateMake() {
    // this.make = "something else"; // this isn't possible
  }
}

// param properties

class Car3 {
  constructor(public make: string, public model: string, public year: number) {}
}

// unknown

let unknownThing: unknown = 14;

if (typeof unknownThing === "string") {
  // this code runs if unknownThing is  string
} else if (typeof unknownThing === "number") {
  // this runs if it's a number
} else {
  // runs for any other type
}

class Car {}
class Boat {}

type Vehicle = Car | Boat;

let myVehicle: Vehicle = new Car();

if (myVehicle instanceof Car) {
  // do something
} else if (myVehicle instanceof Boat) {
  // do something
} else {
  // this will run if there we're not handling one of the types held by the Vehicle union
  const neverValue: never = myVehicle;
}
