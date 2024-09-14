import { useSelector , useDispatch} from "react-redux";
import {
  VISIBILITY_STATUS,
  TASK_STATUS,
} from "../../../constants/todoConstants";
import { useState, useEffect } from "react";
import styles from "./displayTodo.module.css";
import {showAllItems, showPendingItems, showCompletedItems} from "../todoSlice.js";

export const DisplayTodo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const { SHOW_COMPLETED, SHOW_PENDING, SHOW_ALL } = VISIBILITY_STATUS;
  const { PENDING, COMPLETED } = TASK_STATUS;
  const { items, currentVisibilityStatus } = useSelector((state) => state.todo);
  const dispatch = useDispatch()
  useEffect(() => {
    if (currentVisibilityStatus === SHOW_PENDING) {
      let pendingItems = items.filter((item) => {
        return item.status === "PENDING";
      });
      console.log("items 2", items, SHOW_PENDING);
      console.log("pendingItems", pendingItems);
      setTodoItems(pendingItems);
    } else if (currentVisibilityStatus === "SHOW_COMPLETED") {
      let completedItems = items.filter((item) => {
        return item.status === "COMPLETED";
      });
      setTodoItems(completedItems);
    } else {
      setTodoItems(items);
    }
  }, [items, currentVisibilityStatus]);
  const handleShowChange = (e) => {
    const {value} = e.target
    if (value === SHOW_ALL) {
      dispatch(showAllItems());
    } else if (value === SHOW_PENDING) {
      dispatch(showPendingItems());
    } else if (value === SHOW_COMPLETED) {
      dispatch(showCompletedItems());
    }
    // if (e.target.value === SHOW_ALL) {
    //   setTodoItems(items);
    // } else if (e.target.value === SHOW_PENDING) {
    //   let pendingItems = items.filter((item) => {
    //     item.status === SHOW_PENDING;
    //   });
    //   setTodoItems(pendingItems);
    // } else if (e.target.value === SHOW_COMPLETED) {
    //   let completedItems = items.filter((item) => {
    //     item.status === SHOW_COMPLETED;
    //   });
    //   setTodoItems(completedItems);
    // }
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
