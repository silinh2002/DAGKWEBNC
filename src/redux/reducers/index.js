import { combineReducers } from "redux";
import boardProducer from "./Board";

const reducer = combineReducers({
  board: boardProducer,
  // column: columnProducer,
  // card: cardProducer,
  // user: userProducer,
});

export default reducer;
