### 2 . **What is meant by higher-order function?**

A higher-order function is a function that takes one or more functions as arguments or returns a function as its result or both.

**`map()`**, **`filter()`**, and **`reduce()`**are built-in higher-order functions in JavaScript.

An example of a higher-order function in JavaScript would be the **`Array.prototype.map`**
method, which takes a function as an argument and applies it to each element in an array, returning a new array with the transformed elements.

In JavaScript, treating functions as first-class citizens means that functions can be treated just like any other value or data type. This allows functions to be assigned to variables, passed as arguments to other functions, and returned as values from functions. Higher-order functions (HOFs) take advantage of this characteristic by operating on and manipulating functions.

Another example would be the **`setTimeout`**function, which takes a function as its first argument and a time in milliseconds as its second argument, and executes the function after the specified time has elapsed.

```jsx
const newArr = arr.map((elem) => {
  return elem * elem;
});
```
