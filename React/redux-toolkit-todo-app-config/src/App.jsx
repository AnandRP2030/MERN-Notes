import { AddTodo } from "./components/todo-module/addTodo/addTodo";
import "./App.css";
import { DisplayTodo } from "./components/todo-module/displayTodo/displayTodo";
function App() {
  return (
    <>
      <h1> Welcome </h1>
      <AddTodo />
      <DisplayTodo />
    </>
  );
}

export default App;
