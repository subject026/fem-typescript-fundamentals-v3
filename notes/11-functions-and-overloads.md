# Functions and Function Overloads

## Call Signatures

```ts
// these are equivalent
interface ITwoNumberCalculation {
  (x: number, y: number): number;
}

type TTwoNumberCalculation = (x: number, y: number) => number;
```

### void

Explicitly state a fn doesn't return anything.

```ts
type TPrintSomething = (something: string) => void;
```

## Construct Signature

Like a fn signature but use `new` keyword.

Relatively rare.

```ts
interface IDateConstructor {
  new (value: number): Date;
}
```

## Function Overloads

Consider this example.

```ts
type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myFrame = document.getElementsByTagName("iframe")[0];

const myFrame: HTMLIFrameElement;
handleMainEvent(myFrame, (val) => {
  // this isn't good as we're allowing too many posibilities
  // (parameter) val: any
});
```

With overloads

```ts
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
```

## This

```ts
function myClickHandler(event: Event) {
  // ts doesn't know what we are calling this handler on
  // this: any
}

function thisClickHandler(this: HTMLButtonElement, event: Event) {
  // ts doesn't know what we are calling this handler on
  // this: HTMLButtonElement
}
```

## Best Practices

### explicitly define return types

errors if we don't return the correct type in our implementation. Shows us the error closer to where it would need to be fixed.

###
