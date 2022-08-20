import * as actionTypes from "./FilterActionTypes";

export const added = (color, colorType) => {
  return {
    type: actionTypes.COLOR_CHANGE,
    payload: { color, colorType },
  };
};
export const toggle = (status) => {
  return {
    type: actionTypes.TOGGLE,
    payload: status,
  };
};
