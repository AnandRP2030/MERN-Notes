import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes/actionTypes";
const initialState = {
  numOfItems: 0,
  username: "ABCD",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };
    case REMOVE_ITEM: {
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    }
    default:
      return state;
  }
};
