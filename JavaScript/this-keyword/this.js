// console.log(this); // window object
function a() {
  console.log(this); // window object
}
a();

let employee = {
  name: "Elon",
  age: 56,
  getAge() {
    console.log("this ", this); // this refer to the entire object
    return this.age;
  },
};

console.log("age", employee.getAge());

// 2nd method
function getUserId() {
  return this.userId;
}
let user1 = {
  userId: 1,
  getId: getUserId, // do not use () parenthisis here.
};

let user2 = {
  userId: 2,
  getId: getUserId,
};

console.log("Get User ids");
console.log(user1.getId());
console.log(user2.getId());


