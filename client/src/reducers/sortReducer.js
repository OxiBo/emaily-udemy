import { SORT_BY, FIND_BY_TITLE } from "../actions/types";
const defaultSortReducer = { filter: "", sortByCriteria: "", titleToFind: "" };
export default (state = defaultSortReducer, action) => {
  //   console.log(action);
  //   console.log("??" + action.payload)
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        filter: 'sort',
        sortByCriteria: action.payload
      };
    case FIND_BY_TITLE:
      return {
        ...state,
        filter: "find",
        titleToFind: action.payload
      };
    default:
      return state;
  }
};
