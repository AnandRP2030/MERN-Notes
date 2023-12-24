const companies = ["Reliance", "Tata", "Tesla"];
companies.push("Apple");
console.log(companies);

// splice
companies.splice(1, 2);
// first argument is an index of the array

console.log("after removing tata", companies);

// concat
var names = ["AB", "CD", "EF"];
var age = ["12", "34", "56"];
var userNameAndAge = names.concat(age, companies);
console.log("name & age", userNameAndAge);

// users - index of
var users = ["A", "B", "C", "D"];
var userName = users.indexOf("D");
console.log("User name", userName);

if (userName === -1) {
  console.log("User not available");
} else {
  console.log("user avaialble at index", userName);
}

// reverse
var reversedUsers = users.reverse();
console.log("reversed users", reversedUsers);

// push, pop, length, typeof, splice, concat, reverse

var softwaresList = ["HTML", "CSS", "Javascript", "PHP", "jQuery"];
console.log("length", softwaresList.length); // 5
// 0 < 5 => true
// 1 < 5 => true
// 5 < 5 => false
for (var i = 0; i < softwaresList.length; i++) {
  document.write("Iterate using For - ", softwaresList[i], "<br> &nbsp;");
  console.log("Iterate using For - ", softwaresList[i], "<br> &nbsp;");
}

// rest of the code
