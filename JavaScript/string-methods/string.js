var myPlace = "Trivandrum";
// get length of the string
var lengthOfString = myPlace.length;
console.log("Length of the string:", lengthOfString);

// get a specified char from a string .charAt() method
const char = myPlace.charAt(50);
console.log("value", char);

// combine multiple strings  .concat() method
const firstName = "Elon";
const lastName = "Musk";
const fullName = firstName.concat(" ", lastName, "5656 ",firstName);

console.log("concatination", fullName);  // ElonMusk

// check the character exists
const indexOfChar = firstName.indexOf("o");
const indexOfChar2 = firstName.indexOf("p");
console.log("index of o", indexOfChar); // 2
console.log("index of p", indexOfChar2); // -1

var s1="java test";
var n=s1.indexOf("test");
console.log(n); // 5

// convert to lower case
const lowerCasePlace = myPlace.toLowerCase();
console.log("lower case", lowerCasePlace);

// convert to upper case
const upperCasePlace = myPlace.toUpperCase();
console.log("upper case", upperCasePlace);

// slice a string
// trivandrum
const slicePlace = myPlace.slice(1, 4); // slice(start index, end index) => start index include , end index exclude
console.log("slice", slicePlace);

// trim method
// The trim() method of String values removes whitespace from both ends 
//of this string and returns a new string, without modifying the original string.
const welcome = "welcome to India";
console.log(welcome)
const trimWel = welcome.trim();
console.log(trimWel); // Welcome to india


// split method
// It splits a string into substring array, then returns that newly created array.
const splitted = welcome.split("");
console.log("splitted ",splitted); // [ '', '', '', 'Welcome', 'to', 'India', '', '' ]


var myHobbies  = "I like play chess, i like play football";
// string.replace(searchValue, replaceValue);
// It replaces all occurrences of a substring in a string with a new substring.
var normalReplaced = myHobbies.replace("like", "not like"); 
console.log(normalReplaced); //I not like play chess, i like play football

const replaceAll = myHobbies.replace(/like/g, "not like");
console.log(replaceAll); //I not like play chess, i not like play football


const caseInsensitive = myHobbies.replace(/Chess/i, "table tennis"); 
console.log(caseInsensitive);//  I like play table tennis, i like play football

// replaceAll   
const newReplacement = myHobbies.replaceAll("play", "watch");
console.log(newReplacement); //I like watch chess, i like watch football

// substring
const myStr = "hello world";
const subStr = myStr.substr(4, 3); // substr(startIndex, length)
console.log("sub string", subStr);

