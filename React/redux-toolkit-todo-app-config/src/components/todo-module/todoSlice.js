import { createSlice } from "@reduxjs/toolkit";
import {
  TODO_SLICE_NAME,
  TASK_STATUS,
  VISIBILITY_STATUS,
} from "../../constants/todoConstants.js";

const initialState = {
  items: [
    { name: "buy ", status: TASK_STATUS.PENDING },
    { name: "RUN", status: TASK_STATUS.COMPLETED },
  ],
  currentVisibilityStatus: VISIBILITY_STATUS.SHOW_ALL,
};
const todoSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      let obj = {
        name: action.payload,
        status: TASK_STATUS.PENDING,
      };
      state.items.push(obj);
    },
    deleteItem: (state, action) => {
      let arr = state.items.filter((item) => item.name != action.payload);
      state.items = arr;
    },
    showAllItems: (state) => {
      state.currentVisibilityStatus = VISIBILITY_STATUS.SHOW_ALL;
    },
    showPendingItems: (state) => {
      state.currentVisibilityStatus = VISIBILITY_STATUS.SHOW_PENDING;
    },
    showCompletedItems: (state) => {
      state.currentVisibilityStatus = VISIBILITY_STATUS.SHOW_COMPLETED;
    },
  },
});

export const {
  addNewItem,
  showAllItems,
  showPendingItems,
  showCompletedItems,
} = todoSlice.actions;
export default todoSlice.reducer;

// synchronouse
// asynchronouse (redux - thunk)

// pending
// Pending

// constant
