import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [
        {name: "", status: "PENDING"}
    ],
    visibilityOption: "SHOW_ALL"
}
const todoSlicer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addNewItem: (state, action) => {
            state.items.push({name: action.payload, status: "PENDING"})
        }
    }
}) 

export const {addNewItem} = todoSlicer.actions;
export default todoSlicer.reducer;