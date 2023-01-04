---
title: 'Extends'
date: '2023-01-04'
spoiler: 'The extends keyword is used to create a subclass or specify that a type parameter must be a subclass of a particular class or implement a particular interface.'
---

The `extends` keyword is used in typescript to tell that one `class/type/interface` is related to another one. <br>
For example, if we have a class called Animal, and we want to make a new class called Dog that is related to the Animal class, we can use the extends keyword to tell the computer that the Dog class is a special kind of Animal. 
This way, the Dog class can do everything that the Animal class can do, and we can also add some extra things that only dogs can do. 
The extends keyword is really helpful because it helps us organize our code and make it easier for the computer to understand.

## How to use extends in typescript 

In this example, the Shape interface defines a common interface for all shapes, including a method for calculating the area of the shape. The Circle and Rectangle interfaces both extend the Shape interface, which means that they inherit all of the members of the Shape interface and can also define additional members of their own.

```tsx
interface Shape {
  // common properties and methods for all shapes
  area(): number;
}

interface Circle extends Shape {
  // additional properties and methods for circles
  radius: number;
}

interface Rectangle extends Shape {
  // additional properties and methods for rectangles
  width: number;
  height: number;
}
```

Here's an example of how you might use these interfaces:
In this example, the getArea function takes a Shape as an argument and returns its area. The circle and rectangle variables are both objects that implement the Circle and Rectangle interfaces, respectively, which means that they both have an area method that can be called to calculate the area of the shape.

```tsx
function getArea(shape: Shape): number {
  return shape.area();
}

const circle: Circle = {
  radius: 5,
  area: () => Math.PI * 5 ** 2,
};

const rectangle: Rectangle = {
  width: 10,
  height: 20,
  area: () => 10 * 20,
};

console.log(getArea(circle)); // prints 78.53981633974483
console.log(getArea(rectangle)); // prints 200
```


##  How to extract IDs from an array of objects with varying properties

We have this function in Javascript, `getIds`, and will receive different kinds of objects, but each of objects have always the property id

```jsx
function getIds(items) {
  return items.map(item => item.id);
}
```

### How can we write the type of the element `items` in Typescript?
 We cannot use `items: { id: number }[]` because items may have also have other properties besides id, we must use generics, extending those from the id property, the only one common in all of them.

```tsx
function getIds<T extends { id: number }>(items: T[]): number[] {
  return items.map(item => item.id);
}
```