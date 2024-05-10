import { useSelector } from "react-redux";
export const DisplayTodo = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <h1> Todo Items </h1>
      {todos.map((todo) => {
        return (
          <div style={{ display: "flex" }}>
            <h3>{todo.id}</h3> &nbsp;
            <h3>{todo.item}</h3> &nbsp;
            <button>Delete</button> &nbsp;
            <button>Complete Todo</button> &nbsp;
          </div>
        );
      })}
    </div>
  );
};
