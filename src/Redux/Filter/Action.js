import * as actionTypes from "./FilterActionTypes";

export const addedColor = (color, colorType) => {
  return {
    type: actionTypes.COLOR_CHANGE,
    payload: { color, colorType },
  };
};
export const statusChange = (status) => {
  return {
    type: actionTypes.STATUS_CHANGE,
    payload: status,
  };
};
