# Pure Functions

1.  pure function, which means a function that produces the same output given the same input and has no side effects ( global variables or performing I/O operations.)

2.  If you call a pure function with the same arguments, it will always return the same result.

example:

// this function don't have any side effects,
// impure functions (functions have side effects)

function add(a, b) {
return a + b
}

add (5, 2) // 7
add (7, 2); // 9
// no matter how many times i call this add function with these inputs, it always return the same result.

# Use Memo hook

1. Memo stands for memoization

2. UseMemo is a react hook used of memoization, optimizing performance by caching the result of a function
3. impure (with side effects) functions aren't use inside use memo hook

4. useMemo use only for expensive(time taking) functions that we don't invoke everytime while our
   components re-render
5. This means that if the inputs to the function have not changed since the last render, React will return the cached result instead of recomputing the function.

6. You typically use useMemo when you have a function that takes some inputs and produces an output, but you don't want to recalculate that output on every render unless the inputs have changed.

7. This is common when dealing with calculations, data processing, or any operation that consumes significant resources.

8. Advantage

- This can be beneficial for performance, especially when dealing with computationally expensive operations.
