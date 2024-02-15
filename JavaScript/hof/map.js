const arr = ["A", "B", "C", "D"];
arr.forEach((elem, index, arr) => {
  //   console.log(elem, index, arr);
});

const userDetails = [
  { name: "x", userType: "user" },
  { name: "a", userType: "user" },
  { name: "y", userType: "mod" },
  { name: "z", userType: "mod" },
];

const users = userDetails.filter((user) => {
  return user.userType !== "user";
});
// console.log("users", users);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = nums.filter((num) => {
  return num % 2 == 0;
});
const squares = nums.map((num) => {
  return num * num;
});

const sum = nums.reduce((acc, curr) => {});

console.log("squares", squares);
// console.log("even nums", evenNums);
// console.log("add two", addTwo);

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

const array1 = [1, 2, 3, 4];

// reduce
// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator * currentValue
);

console.log(sumWithInitial);
// Expected output: 10