// function outerFunction() {
//   const outerVar = "I am outside!";
//   function innerFunction() {
//     console.log(outerVar); // logs "I am outside!"
//   }
//   return innerFunction;
// }

// const myInnerFunction = outerFunction();
// console.log("my innder fn.", myInnerFunction);
// myInnerFunction(); // logs "I am outside!"

function makeAdder(x) {
  return function (y) {
    x += 100;
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 110
console.log(add10(2)); // 115
