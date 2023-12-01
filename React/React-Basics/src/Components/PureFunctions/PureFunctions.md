1. A pure function is a function that always returns the same output for the same input and has no side effects.
2. It means that given the same input, a pure function will always produce the same output, and it does not modify any external state or variables.
3. Pure functions are deterministic and predictable.

4. **Same Input, Same Output:** For a function to be deterministic, if you provide it with a specific set of input values, it will consistently return the same result every time you call it with those same input values. There is no randomness involved in the function's behavior.

5. **No Side Effects:** Deterministic functions do not modify any external state or variables, and they don't perform any actions beyond computing the result. They don't interact with the external world or rely on global variables. Their only influence is through the values they return.

The determinism of pure functions makes them predictable and easy to reason about. When you have a pure function, you can trust that it won't unexpectedly change its behavior or introduce hidden changes elsewhere in your program. This predictability is a key benefit in functional programming paradigms and contributes to writing more reliable and maintainable code.

### Pure Functions:

1. **Pure Function Example:**

```javascript
// Pure function: No side effects, same input always produces the same output
function add(a, b) {
  return a + b;
}

// Example usage:
console.log(add(2, 3)); // Output: 5
```

2. **Pure Function with Immutable Data:**

```javascript
// Pure function with immutable data
function addToList(list, newItem) {
  // Using spread operator to create a new array (immutable)
  return [...list, newItem];
}

// Example usage:
const originalList = [1, 2, 3];
const newList = addToList(originalList, 4);
console.log(newList); // Output: [1, 2, 3, 4]
console.log(originalList); // Output: [1, 2, 3] (unchanged)
```

### Non-Pure Functions:

1. **Non-Pure Function with Side Effect:**

```javascript
// Non-pure function: Modifies external state (console.log is a side effect)
let total = 0;

function addToTotal(value) {
  total += value;
  console.log(`Total is now: ${total}`);
}

// Example usage:
addToTotal(5); // Output: Total is now: 5
addToTotal(3); // Output: Total is now: 8
```

2. **Non-Pure Function with Global State:**

```javascript
// Non-pure function: Relies on external state (global variable)
let globalCounter = 0;

function incrementGlobalCounter() {
  globalCounter++;
  return globalCounter;
}

// Example usage:
console.log(incrementGlobalCounter()); // Output: 1
console.log(incrementGlobalCounter()); // Output: 2
```

In the examples above, the pure functions (`add`, `addToList`) have no side effects and always produce the same output for the same input. On the other hand, the non-pure functions (`addToTotal`, `incrementGlobalCounter`) either modify external state or rely on global variables, introducing side effects and making their behavior less predictable and harder to reason about.
