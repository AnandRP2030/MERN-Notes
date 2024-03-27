let allData = null;

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("respon", response);
      return response.json();
    })
    .then((data) => {
      allData = data;
      console.log("data", data);
      displayData(allData);
    });
}
// Asynchronous function (Network call, Database interaction)
// async await

function displayData(data) {
  let tableBody = document.querySelector("tbody");

  tableBody.innerHTML = "";

  data.forEach((element, index, arr) => {
    console.log("elem", element, "ind", index, "arr", arr);

    let row = document.createElement("tr");

    let id = document.createElement("td");
    id.innerText = element.id;

    // innerText, innerHTML
    let name = document.createElement("td");
    name.innerText = element.name;

    let email = document.createElement("td");
    email.innerText = element.email;

    let phone = document.createElement("td");
    phone.innerText = element.phone;

    let website = document.createElement("td");
    website.innerText = element.website;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete Item";

    delBtn.addEventListener("click", () => {
      allData.splice(index, 1);
      displayData(arr);
    });
    row.append(id, name, email, phone, website, delBtn);

    tableBody.append(row);
  });
  console.log("data", data);
}
// // slice
// // splice
// // [1, 2, 3, 4, 5].splice(2, 1);
