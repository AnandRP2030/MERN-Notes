function printSomething () {
    if (true) {
        var myName = "xyz"; // functional scope
    }
    console.log("my name", myName);
}




let myName = "abc";

myName = "skdfjk";

const something = "sdf";
something = "dfkj";
console.log("something",something)
printSomething()

// keywords 
// var => functional scope 
// let => block scope
// const => block scope

// variable or function name rules
// 1. cannot start with number
// 2. cannot start with special characters
// 3. can start with letters
// 4. don't user js keywords (break, if, loops, etc..)