import * as types from "../constants/type";

const initialState = {
  items: [],
  boardName: "LIST OF BOARD",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_BOARD:
      return {
        ...state,
        items: action.payload,
      };
    case types.UPDATE_BOARD:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
