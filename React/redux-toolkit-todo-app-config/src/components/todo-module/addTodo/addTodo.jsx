import styles from "./addTodo.module.css";
export const AddTodo = () => {
  return (
    <>
      <h1> Todo App </h1>
      <input className={styles.inputStyles} type="text" />
      <button> Add todo </button>
    </>
  );
};
