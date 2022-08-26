import * as actionTypes from "./TodoActionTypes";

export const loaded = (todos) => {
  return {
    type: actionTypes.LOADED,
    payload: todos,
  };
};
export const added = (todoText) => {
  return {
    type: actionTypes.ADDED,
    payload: todoText,
  };
};
export const toggle = (todoID) => {
  return {
    type: actionTypes.TOGGLE,
    payload: todoID,
  };
};
export const allCompleted = () => {
  return {
    type: actionTypes.ALL_COMPLETED,
  };
};
export const colorSelected = (todoID, color) => {
  return {
    type: actionTypes.COLOR_SELECTED,
    payload: {
      todoID,
      color,
    },
  };
};
export const deleted = (todoID) => {
  return {
    type: actionTypes.DELETED,
    payload: todoID,
  };
};
export const clear = (todoText) => {
  return {
    type: actionTypes.CLEAR,
  };
};
