// Non-pure function: Modifies external state (console.log is a side effect)
let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

// Example usage:
console.log("total 1", addToTotal(5)); // Output: Total is now: 5
console.log("total 2", addToTotal(5)); // Output: Total is now: 10

// Pure function: No side effects, same input always produces the same output
function add(a, b) {
  return a + b;
}

// Example usage:
// console.log(add(2, 3)); // Output: 5
// console.log(add(2, 3)); // Output: 5
// console.log(add(2, 3)); // Output: 5
// console.log(add(2, 3)); // Output: 5
