import { FETCH_SURVEYS, DELETE_SURVEY } from "../actions/types";

export default (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
      case DELETE_SURVEY:
        return state.filter(survey => survey._id !== action.payload);
        // case ERROR:
        //   return action.payload;
          
    default:
      return state;
  }
};
