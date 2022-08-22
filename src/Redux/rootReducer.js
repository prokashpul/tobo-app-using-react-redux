import { combineReducers } from "redux";
import filterReducer from "./Filter/Reducer";
import todoReducer from "./Todo/Reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
