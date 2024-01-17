In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have some differences in terms of scope, hoisting, and reassignment. Here's an overview of each:

1. **var:**
   - Variables declared with `var` are function-scoped. This means that their scope is limited to the function in which they are declared. If declared outside any function, the variable has global scope.
   - `var` is hoisted to the top of its scope during the compilation phase. This means that you can use the variable before it's declared in the code, but its value will be `undefined`.
   - `var` allows for redeclaration and reassignment.

   Example:
   ```javascript
   function example() {
     if (true) {
       var x = 10;
     }
     console.log(x); // Outputs 10, even though x was declared inside the if block.
   }
   ```

2. **let:**
   - Variables declared with `let` are block-scoped, which means their scope is limited to the block (enclosed by curly braces) in which they are defined.
   - `let` is also hoisted, but unlike `var`, it is not initialized until the code execution reaches the declaration. So, using it before declaration results in a `ReferenceError`.
   - `let` allows for reassignment but not redeclaration within the same scope.

   Example:
   ```javascript
   function example() {
     if (true) {
       let y = 20;
       console.log(y); // Outputs 20
     }
     // console.log(y); // ReferenceError: y is not defined
   }
   ```

3. **const:**
   - Variables declared with `const` are block-scoped like `let`.
   - `const` variables must be assigned a value when declared, and they cannot be reassigned to a new value. However, the value they hold may be mutable (e.g., for objects and arrays).
   - Like `let`, `const` is hoisted but not initialized until the code execution reaches the declaration.

   Example:
   ```javascript
   function example() {
     const z = 30;
     // z = 40; // TypeError: Assignment to constant variable.
     console.log(z); // Outputs 30
   }
   ```

In general, it's recommended to use `const` by default and only use `let` when you know the variable's value will be reassigned. `var` is rarely used in modern JavaScript due to its hoisting behavior and less predictable scoping.