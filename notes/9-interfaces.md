# Interfaces

For defining object types.

```ts
interface UserInfo {
  name: string;
  email: string;
}

function printUserInfo(info: UserInfo) {
  console.log(`${info.name} ${info.email}`);
}
```

## Inheritance

TS calls these heritage clauses.

### `extends` keyword

Interfaces can extend from interfaces.

```ts

```

### `implements` keyword

Classes implement interfaces.

```ts
interface AnimalLike {
  eat(food): void;
}

class Dog implements AnimalLike {
  eat() {
    // ...
  }
  bark() {
    return "woof";
  }
}
```

## Interfaces are open

Can redeclare an interface in the same scope to augment it.

```ts
interface UserInfo {
  name: string;
  email: string;
}

interface UserInfo {
  phone: number;
}

const user: UserInfo = {
  name: "steve",
  email: "steve@email.com",
  phone: 123,
};
```

Useful for tagging new property onto an existing object. Good solution when type information is incomplete.

```ts
interface Window {
  newProperty: string;
}
```
