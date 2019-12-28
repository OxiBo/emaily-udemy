import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  DELETE_SURVEY,
  ERROR,
  SORT_BY,
  FIND_BY_TITLE
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  // console.log(res.data)
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  //   console.log(res.data)
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post("/api/surveys", values);

    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch({ type: ERROR, payload: { error: false } });
  } catch (err) {
    // need to work on this

    // console.error(err.response.data);
    dispatch({ type: ERROR, payload: err.response.data });
  }
  history.push("/surveys");
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = surveyId => async dispatch => {
  await axios.delete(`api/surveys/delete/${surveyId}`);
  dispatch({ type: DELETE_SURVEY, payload: surveyId });
};

export const chooseSortBy = filter => ({
  type: SORT_BY,
  payload: filter
});

export const findByTitle = title => ({
  type: FIND_BY_TITLE,
  payload: title
});
