var states = ["Maharashtra", "Tamilnadu", "Kerala", "Karnataka"];

var totalLength = states.length; // 4
// iterate array using loop
for (var i = 0; i < totalLength; i++) {
  var myState = states[i];

  if (myState == states[2]) {
    continue;
  }

  document.write(states[i], " <br/> &nbsp;");
}
document.write("somethin");
console.log("Loop ended");

for (var index in states) {
  console.log("State names", states[index]);
  document.write(states[index]);
}

var softwaresList = ["HTML", "CSS", "Javascript", "PHP", "jQuery"];

for (var i = 0; i < softwaresList.length; i++) {
  document.write("Iterate using For - ", softwaresList[i], "<br> &nbsp;");
}
