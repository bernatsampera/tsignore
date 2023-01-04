---
title: 'Intersections'
date: '2022-12-28'
spoiler: 'In TypeScript, an intersection is a way to combine multiple types into a single type. The resulting type includes all the properties and methods of all the types that were combined.
'
---

In TypeScript, an intersection is a way to combine multiple types into a single type. The resulting type includes all the properties and methods of all the types that were combined.

For example, consider the following types:

```tsx
type A = {
  name: string;
  age: number;
};

type B = {
  location: string;
  hobby: string;
};
```

We can create a new type that includes all the properties and methods of both `A` and `B` using an intersection:


```tsx
type AB = A & B;

const ab: AB = {
  name: 'John',
  age: 30,
  location: 'New York',
  hobby: 'soccer'
};
```


Now, the `ab` object has the properties `name`, `age`, `location`, and `hobby`.

Intersections are often used to create more specific types from more general types. For example, we might have a generic `Person` type with basic information about a person, and then create more specific types like `Student` or `Employee` that include additional properties and methods specific to those roles.

```tsx

type Person = {
  name: string;
  age: number;
};

type Student = Person & {
  major: string;
  GPA: number;
};

type Employee = Person & {
  jobTitle: string;
  salary: number;
};

const student: Student = {
  name: 'Alice',
  age: 21,
  major: 'Computer Science',
  GPA: 3.8
};

const employee: Employee = {
  name: 'Bob',
  age: 35,
  jobTitle: 'Software Engineer',
  salary: 100000
};
```


In this example, the `Student` and `Employee` types are created by intersecting the `Person` type with additional properties and methods specific to those roles.
