function printName(arg1, arg2, arg3) {
    console.log("printing arguments", arg1, arg2, arg3);
  console.log("Name", this.name);
}

let user1 = {
  name: "User one",
};

let user2 = {
  name: "user two",
};
// call method.
console.log("call method below");
printName.call(user1, 1, 2, 3); // userone
printName.call(user2, "NAME1","NAME2", "NAME3"); // user two

// apply method
console.log("apply method below");
let args = ["a", "b", "c"];
printName.apply(user1, args); // user one
printName.apply(user2, args); // user two
