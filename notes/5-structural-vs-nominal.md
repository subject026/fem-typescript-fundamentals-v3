# Structural vs Nominal Types

Type checking can be thought of as evaluating compatability or type equivalence.

## Static vs Dynamic

Whether type checking occurs at compile time or run time.

TS is static system - checking occurs at compile time.

JS is dynamic system - type checking still occurs but at runtime instead.

## Nominal

All about NAMES

```js
class Foo {
  method(input: string): number { ... }
}
class Bar {
  method(input: string): number { ... }
}
let foo: Foo = new Bar(); // ERROR!!
```

## Structural

All about SHAPE.

```js
class Foo {
  method(input: string): number { ... }
}
class Bar {
  method(input: string): number { ... }
}
let foo: Foo = new Bar(); // Okay.
```

### Typescript?

Structural. Names are really for our convenience.

## Duck Typing

Looks like / quacks like a duck, it's a duck.

Similar to structural but usually used to describe dynamic type systems. Only cares about what is needed, not where things come from.
