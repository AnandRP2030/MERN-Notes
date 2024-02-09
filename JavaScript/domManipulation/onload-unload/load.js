function show() {
  const body = document.querySelector("body");
  console.log("body", document.body);
  console.log("body load completed");
  //   alert("wlr");
}

const h1 = document.querySelector("h1");
// h1.addEventListener("mouseleave", () => {
//   h1.style.color = "red";
// });
h1.addEventListener("mouseover", () => {
  h1.style.color = "green";
});
