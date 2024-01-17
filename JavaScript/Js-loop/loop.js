// // Initializing an array
// var arr = ["TVM", "KOLLAM", "ALAPUZHA", "B", "C", "D", "O"];
// console.log(arr)

// for (var i = 0; i < arr.length; i++) {

//     if (arr[i] == "B") {
//         continue;
//     }

//     document.write(arr[i]);
//     document.write("<br/>")
// }

// // printing numbers from 0 to 9
// for (var i = 0; i < 10; i++ ){
//     document.write(i);
// }


var name2 = "vignesh"

document.write(`<h1> ${name2} </h1>`)



const a = 5;
const b = 10;
console.log("fifteen is ", a + b, "aksjdfkjdf");
console.log(`Fifteen is ${a + b} sdfdf dfdfdf  `);

// Data types
// 1. primitive data types (store single vlaues)
//  string, number, boolean, undefined, null, NaN

// 2. non primitive (store multiple values)
//  array, object


var arr = ["1", "2", "3"];

var obj = {
    name: "Anand",
    phoneNumber: 12341234,
    haveLicense: true

}


for (var i = 0; i < 10; i++) {
  document.write("<br/> ");
  if (i == 6){
    continue;
  }
  document.write(`<h1> ${i} </h1> `)
}
var i = 20;

while (i < 31) {
    if (i % 2 == 0) {
        document.write(`<h1> ${i} </h1>`)

    }
    i++;
}

i = 20;
do {
    document.write(`<h1>do while loop ${i} </h1> `)
    i++;
} while (i < 31);