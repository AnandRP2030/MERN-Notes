let obj = {
  name: "Anand",
  place: "Trivandrum",
};
console.log("obj", obj);

// delete a key
console.log("is deleted ?", delete obj.place); // true
console.log("is deleted ?", delete obj.age); // true

console.log("after deleting", obj);

let user = {
  name: "John",
  age: 30,
  "likes birds": true,
  // multiword property name must be quoted
};
document.write("user obj", user.name, user.age, user["likes birds"]);
console.log("user", user);

let user2 = {
  name: "John",
  age: 30,
  isAdmin: true,
};
for (let key in user2) {
  console.log(key);
  console.log(user2[key]);
}
