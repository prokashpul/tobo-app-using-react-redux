import { initialState } from "./initialState";
import * as actionTypes from "./TodoActionTypes";

const nextTodoId = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
  return maxID + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADED:
      return action.payload;
    case actionTypes.ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case actionTypes.TOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case actionTypes.COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoID) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });
    case actionTypes.DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case actionTypes.ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case actionTypes.CLEAR:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
