import { ADD_ITEM, REMOVE_ITEM } from "./ActionTypes/actionTypes";
const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};
const removeItem = () => {
  return {
    type: REMOVE_ITEM,
  };
};

export { addItem, removeItem };

// This file contains action creators, which are functions that return action objects.
// Actions are payloads of information that send data from your application to your Redux store.
// In your case, you have two actions: `addItem` and `removeItem`
