import initialState from "./initialState";
import * as actionTypes from "./FilterActionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STATUS_CHANGE:
      return {
        ...state,
        status: action.payload,
      };
    case actionTypes.COLOR_CHANGE:
      const { color, colorType } = action.payload;

      switch (colorType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
