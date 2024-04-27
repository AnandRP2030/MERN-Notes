import { useSelector } from "react-redux";
import {
  VISIBILITY_STATUS,
  TASK_STATUS,
} from "../../../constants/todoConstants";
import { useState, useEffect } from "react";
import styles from "./displayTodo.module.css";

export const DisplayTodo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const { SHOW_COMPLETED, SHOW_PENDING, SHOW_ALL } = VISIBILITY_STATUS;
  const { PENDING, COMPLETED } = TASK_STATUS;
  const { items, currentVisibilityStatus } = useSelector((state) => state.todo);
  useEffect(() => {
    if (currentVisibilityStatus === SHOW_PENDING) {
      let pendingItems = items.filter((item) => {
        item.status === SHOW_PENDING;
      });
      setTodoItems(pendingItems);
    } else if (currentVisibilityStatus === SHOW_COMPLETED) {
      let completedItems = items.filter((item) => {
        item.status === SHOW_COMPLETED;
      });
      setTodoItems(completedItems);
    } else {
      setTodoItems(items);
    }
  }, []);
  const handleShowChange = (e) => {
    console.log("ee", e.target.value);
  };
  const makeTaskPending = (index) => {};
  const makeTaskCompleted = (index) => {};

  console.log("itme", items, currentVisibilityStatus);
  return (
    <div className={`${styles.displayContainer} bg-primary mt-5`}>
      <h1> Display todo</h1>
      <select onChange={handleShowChange}>
        <option value={SHOW_ALL}>Show All</option>
        <option value={SHOW_PENDING}>Show Pending</option>
        <option value={SHOW_COMPLETED}>Show Completed</option>
      </select>
      <div className={`${styles.displayBox}`}>
        {todoItems.map((todo, index) => {
          return (
            <div key={index} className="d-flex">
              {todo.status === PENDING ? (
                <input
                  type="checkbox"
                  onChange={() => {
                    makeTaskCompleted(index);
                  }}
                  className="me-4"
                />
              ) : (
                <input
                  type="checkbox"
                  onChange={() => {
                    makeTaskPending(index);
                  }}
                  className="me-4"
                  checked
                />
              )}

              <h3> {todo.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
