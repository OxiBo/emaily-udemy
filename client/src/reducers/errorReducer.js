import { ERROR } from "../actions/types";

export default (state = { error: false }, action) => {
  // console.log(action);
  switch (action.type) {
    case ERROR:
      return action.payload;
      
    default:
      return state;
  }
};
