---
title: 'The Union type in TypeScript: when to apply it'
date: '2023-01-03'
spoiler: 'The Union type in TypeScript allows you to specify a value that can be one of several types. It is represented using the | symbol, and it is often used in cases where a value can be of multiple types, but the types are not related through inheritance.'
---

The Union type in TypeScript allows you to specify a value that can be one of several types. It is represented using the | symbol, and it is often used in cases where a value can be of multiple types, but the types are not related through inheritance.

One common use case for the Union type is when you want to specify a function parameter that can accept multiple types. For example:

```tsx
function printValue(value: string | number) {
  console.log(value);
}
```

Here, the printValue function takes a single parameter value, which can be either a string or a number.

Another use case for the Union type is when you want to specify a type that can be one of several literal types. For example:

```tsx
type Alignment = 'left' | 'center' | 'right';

const align: Alignment = 'left';
```

Here, we've defined a type Alignment that can be one of three literal values: 'left', 'center', or 'right'. We've then defined a constant align of this type, with a value of 'left'.

In general, you should use the Union type when you need to specify a value that can be one of several types, and the types are not related through inheritance.


## More complex scenarios involving the Union type


One potential approach for defining the State type when making a request could be to create a simple interface with three properties:

value: This could represent the response payload for a successful request, or the current value of the data being requested if it has already been retrieved.
isLoading: A boolean flag indicating whether the request is currently in progress.
error: An error message or object to be set if the request fails.

```tsx
interface State {
  value: object;
  isLoading: boolean;
  error?: string;
}
```

However, using this approach for handling the request may introduce some complications. For example, you may need to consider how to properly set and update the value, isLoading, and error properties as the request progresses, and how to correctly handle the different states that the request can be in (e.g. pending, successful, failed). Additionally, you may need to consider how to properly propagate changes to these properties throughout your application, such as updating UI elements to reflect the current state of the request.

```tsx
function handleRequest(state: State) {
  state.isLoading = true;
  try {
    const response = await fetch()
    if (!response.ok) {
      state.isLoading = false;
      throw new Error('Error message')
    }
    state.isLoading = false;
    state.value = await response.json();
  } catch (e) {
    state.error = e;
  }
}
```

One alternative approach to handling state is to use the Union type. With this approach, instead of having a single interface to represent all possible states, we define separate interfaces for each individual state. When we need to update the state, we use the appropriate interface to create a new instance of the state object with the updated value, rather than mutating the existing object. This helps to avoid unintended consequences that can arise from mutating state properties.

```tsx 
interface PendingState {
  value: 'pending'
}
interface ErrorState {
  value: 'error'
  error: string;
}
interface SuccessState {
  value: 'success'
  text: string;
}
type State = PendingState | ErrorState |SuccessState;

function handleRequest(state: State) {
  state = {value: 'pending'}
  try {
    const response = await fetch();
    if(!response.ok) {
      throw new Error('Error message')
    }
    state = {value: 'success', text: response.text()}
  } catch (e) {
    if (typeof e === 'string') {
      state = {value: 'error', error: e}
    }
  }
}
```