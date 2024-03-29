let obj = {
  name: "Anand",
  place: "Trivandrum, kollam",
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
console.log("user obj", user.name, user.age, user["likes birds"]);
console.log("user", user);

let user2 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user2) {
  console.log("keys ", key); // key
  console.log("values ",user2[key]); // value
}
