# Using

Adds two values

## Definitions

```ts
  add(a: number, b?: number): number;
  add(a: number): (b: number) => number;
```

## Examples

```js
add(2, 4); // => 6
add(3)(8); // => 11
```
