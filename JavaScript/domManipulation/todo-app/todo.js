document.addEventListener("keydown", function (event) {
  // Do something when the user presses a key on the keyboard

  console.log(event.key);
});

let todosDisplay = document.getElementById("tasks");

let todos = [];

let form = document.querySelector("form");
console.log("form", form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#input-task");
  let inputValue = input.value;
  todos.push(inputValue);
  displayElement();
  input.value = "";
});

function displayElement() {
  // remove existing elements from the display
  todosDisplay.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    // create elements using createElement() method
    const li = document.createElement("li");
    console.log("li", li);
    const deleteBtn = `<button class='dlt-btn' onclick='deleteTodo(${i})'> Delete </button>`;
    const completeBtn = `<button class='com-btn' onclick='completeTodo(${i})'> Complete </button>`;
    li.innerHTML = `${todos[i]} ${deleteBtn} ${completeBtn}`;
    todosDisplay.appendChild(li);
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayElement();
}
