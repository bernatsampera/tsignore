---
title: 'Postel Law'
date: '2023-01-05'
spoiler: 'Be conservative in what you do, be liberal in what you accept from others'
---

In typescript is a good rule of thumb to follow the following rule

> Design your functions to be flexible in the types of input they accept, but strict in the types of output they produce

1. Reusability: By designing your functions to be flexible in the types of input they accept, you can make them more reusable in a variety of different contexts. This can save you time and effort when writing code, as you can use the same function in multiple places rather than having to write separate functions for each specific use case.
2. Reliability: By being strict in the types of output that your functions produce, you can help ensure that your functions are reliable and consistent. This can make it easier to use your functions correctly and catch errors when they are used incorrectly.
3. Understandability: By clearly specifying the expected input and output types of your functions, you can make it easier for other developers (including yourself) to understand how to use your functions correctly. This can improve the maintainability and readability of your code.


To be flexible in the types of input that a function accepts in TypeScript, you can use a combination of type annotations and type assertions to specify the types of the input parameters that the function expects. For example, you might use a union type to allow a function to accept multiple different types of input, or you might use a type assertion to override the type inference of the TypeScript compiler.

To be strict in the types of output that a function produces in TypeScript, you can use type annotations to specify the return type of the function. This will ensure that the function always returns a value of the specified type, and it will help catch errors if the function is returning a value of the wrong type.

For example, here is how you might apply it in a function where just one parameter `ìd` is required, but all others may be optional

```tsx
type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUserWithRequiredId = Partial<Omit<User, 'id'>> & { id: number };

function getUser = (user: PartialUserWithRequiredId): User {
  ///
}
```