# Javvascript Scopes
In JavaScript, variable scopes determine the accessibility and visibility of variables within different parts of your code. There are three main types of scopes: global, local, and block.

Let's break down the provided code and discuss the scopes:

```javascript
var globalScopeVar = "xyz";

function printName() {
    var localScopeVar = "ABC";
}

console.log(globalScopeVar);
// console.log(localScopeVar);  // This will result in an error
```

1. **Global Scope:**
   - The variable `globalScopeVar` is declared using the `var` keyword outside any function or block. This makes it a global variable.
   - Global variables are accessible throughout the entire script, both inside and outside functions.

2. **Local Scope (Function Scope):**
   - The variable `localScopeVar` is declared using the `var` keyword inside the `printName` function. This makes it a local variable.
   - Local variables are accessible only within the function in which they are declared. In this case, `localScopeVar` is only accessible within the `printName` function.

3. **Block Scope:**
   -


**Note:**
- In modern JavaScript, the `let` and `const` keywords are often preferred over `var` for variable declarations. `let` and `const` have block-level scope, which means they are limited to the block (enclosed by curly braces) in which they are defined. This can help prevent unintended variable hoisting and scoping issues associated with `var`.