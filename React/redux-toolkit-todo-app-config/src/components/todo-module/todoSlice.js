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
      state.items.push({ name: action.payload, status: DEFAULT_TASK_STATUS });
    },
  },
});

export const { addNewItem } = todoSlice.actions;
export default todoSlice.reducer;
