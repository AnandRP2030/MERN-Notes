function example() {
  if (true) {
    // var has functional scope
    var x = 10;
  }
  console.log(x); // Outputs 10, even though x was declared inside the if block.
}
example();


// let has block scope
function example2() {
  if (true) {
    let y = 20;
    console.log(y); // Outputs 20
  }
  // console.log(y); // ReferenceError: y is not defined
}
example2();


function example3() {
  const z = 30;
  // z = 40; // TypeError: Assignment to constant variable.
  console.log(z); // Outputs 30
}
example3();
