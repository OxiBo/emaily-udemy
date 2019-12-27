import { SORT_BY } from "../actions/types";
const defaultSortReducer = { sortBy: "" };
export default (state = defaultSortReducer, action) => {
//   console.log(action);
//   console.log("??" + action.payload)
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };
    default:
      return state;
  }
};
