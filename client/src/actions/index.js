import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, DELETE_SURVEY } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
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
    history.push("/surveys");

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    history.push("/surveys");
    console.error(err);
    dispatch({ type: FETCH_USER, payload: err.error });
  }
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = surveyId => async dispatch => {
  await axios.delete(`api/surveys/delete/${surveyId}`);
  dispatch({ type: DELETE_SURVEY, payload: surveyId });
};
