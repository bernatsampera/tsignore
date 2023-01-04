---
title: 'Generics'
date: '2023-01-03'
spoiler: 'Generics in TypeScript allow you to create reusable components that can work with a variety of types.'
---
Generics in TypeScript allow you to create reusable components that can work with a variety of types. Here is a simple example of how to use generics in a function:

```tsx
function identity<T>(arg: T): T {
  return arg;
}
```

In this example, the function identity takes in a single argument of type T and returns a value of type T. You can call the function using type argument inference, like this:

```tsx
let output = identity('hello');  // string
```

Or you can specify the type argument explicitly:

```tsx
let output = identity<number>(10);  // number
```

You can also use generics in classes and interfaces. Here's an example of a generic interface:

```tsx
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

You can also specify the type parameter when implementing the interface:

```tsx
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```


## When is it appropriate to use Generics in TypeScript?


Generics are useful in TypeScript because they allow you to create reusable components that can work with a variety of types. This is especially useful when writing functions or classes that are not specific to a particular type, but that can work with any type.

For example, consider the following function:

```tsx
function identity(arg: any): any {
  return arg;
}
```



This function takes in an argument of type `any` and returns a value of the same type. While this function is very flexible and will work with any value, it is not very type-safe. The function doesn't provide any information about the type of the argument or the return value, so the caller of the function doesn't have any type guarantees.

On the other hand, if we rewrite the function using generics, we get the following:

```tsx
function identity<T>(arg: T): T {
  return arg;
}
```



Now, the function takes in an argument of type `T` and returns a value of the same type. When calling the function, the caller can specify the type argument, like this:

```tsx
let output = identity<string>('hello');  // string
```

This makes the function more type-safe, because the caller knows that the return value will be of the same type as the argument.

Generics are also useful when creating classes and interfaces that are not specific to a particular type, but that can work with a variety of types. This allows you to create more flexible and reusable components that can be easily adapted to different situations.
