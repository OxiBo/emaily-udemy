// shows users their form inputs for review

import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";

import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label htmlFor="">{label}</label>
        <div>{ !formValues[name] ? "no-replay@emaily.com" : formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Confirm form</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat white-text  right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.form.surveyForm.values)
  return {
    formValues: state.form.surveyForm.values
  };
};
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
