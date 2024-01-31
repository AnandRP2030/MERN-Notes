var companyNames = ["Apple", "samsung", "Google", "Microsoft", "reliance"];
var ceos = ["tim", "mike", "james", "john"];

// document.write(companyNames);
console.log("my array", companyNames);

//1 Array Length => find the length of the Array
console.log("array length", companyNames.length);
// document.write(companyNames.length);

//2 Array add a new value at the end
companyNames.push("Tesla");
console.log("after push", companyNames);

//3 Remove the final value from the array
companyNames.pop();
console.log("Array after pop", companyNames);

console.log("3 th index values", companyNames[3]);

//4 Use splice to remove the element at the specified index
companyNames.splice(2, 2);

console.log("Companies after deleting", companyNames);

//5 concat (combine) 2 or multiple arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var combinedArray = arr1.concat(arr2, arr3);
console.log("combined arrays", combinedArray);

var studentsList = ["Abcd", "Abc", "Abc", "ghi", "jkl", "new tweet"];
//6 arr.indexOf(item)
const indexOfTheStudents = studentsList.indexOf("ghi");
console.log("index of students", indexOfTheStudents);

//7 Reverse an array
var reversedArray = studentsList.reverse();
console.log("reversed array", reversedArray);

// 8. slice method
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log("sliced array",animals.slice(2));
console.log("sliced array",animals.slice(2, 4));
console.log("sliced array2",animals.slice(0,-2));

//9. months sorted
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

//10. sort numbs
const array1 = [2, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// [1, 100000, 21, 30, 4];

// 11. ascending order sort
const numbers = [3, 1, 4, 1, 5];
const ascendingSort = numbers.sort((a, b) => a - b);
console.log("ascending sort", ascendingSort);

// 12. descending order sort
const descendingSort = numbers.sort((a , b) => b - a);  
console.log("descending order", descendingSort);
