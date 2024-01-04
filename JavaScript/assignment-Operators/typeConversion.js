let value = true;
console.log(typeof value); // boolean
value = String(value);
console.log(typeof value); // string

var num = "123";
console.log(typeof num); // string
num = Number(num);
console.log(typeof num); // number

// The subtraction operation is being performed on two strings, "5" and "2".
// However, JavaScript implicitly converts these strings to numbers when a mathematical 
//operation (such as subtraction) is applied. So, the expression "5" - "2" is effectively 
// interpreted as 5 - 2, resulting in the numerical value 3.
console.log("5" - "2"); // 3
