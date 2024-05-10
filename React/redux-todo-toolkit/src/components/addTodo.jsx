import {useDispatch} from 'react-redux';
import { useState } from "react";
import { addTodo } from '../redux/todoReducer/todoReducer';
export const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addTodo(item));
    setItem("");
  };
  return (
    <div>
        {/* // controlled inputs */}
      <input
        type="text"
        placeholder="Add todo"
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      <button onClick={addItem}> Add Item</button>
    </div>
  );
};
