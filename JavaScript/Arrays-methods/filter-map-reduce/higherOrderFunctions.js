// arrow function

const add = (a, b) => {
  return a + b;
};

//for each
const students = ["A", "B", "C"];
students.forEach((elem) => {
  console.log(elem);
  return elem;
});

// map function
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numSquares = nums.map((num, index, arr) => {
  // console.log("num", num, "index", index, "arr", arr);
  return num * 2;
});
console.log("squres", numSquares);

// old way of filtering
let evenNumbs = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNumbs.push(nums[i]);
  }
}
// console.log(evenNumbs);

// filter function
const evenNumbers = nums.filter((x) => x % 2 === 0);

const oddNumbers = nums.filter((x) => {
  return x % 2 === 1;
});
console.log("even numbers", evenNumbers);
console.log("odd numbers", oddNumbers);

// reduce function
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
  console.log("acc", accumulator, "curr", currentValue);
  return accumulator + currentValue;
});

console.log("sum value", sumWithInitial);
