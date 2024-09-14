import { addNewItem } from "../todoSlice.js";
import { useDispatch } from "react-redux";
import styles from "./addTodo.module.css";
import { useState } from "react";
export const AddTodo = () => {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();

  const addItemToTheList = () => {
    if (!todoItem) {
      alert("Please enter your todo item");
      return;
    }
    dispatch(addNewItem(todoItem))
  }


  return (
    <>
      <h1> Todo App </h1>
      <input
        className={styles.inputStyles}
        type="text"
        value={todoItem}
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
      />
      <button onClick={addItemToTheList}> Add todo </button>
    </>
  );
};
