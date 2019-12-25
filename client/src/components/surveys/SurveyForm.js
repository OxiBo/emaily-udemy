// SurveyForm shows a form for a user to add inputs
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";

import validateEmails from "../../utils/validateEmails";
import validateSingleEmail from "../../utils/validateSingleEmail";
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          component={SurveyField}
          type="text"
        />
      );
    });
  }

  render() {
    return (
      <div>
        SurveyForm!
        <form
          action=""
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  // email validation should be before the other because if no emails provided the error message will be - provide emails (lower code part will override error.emails)
  errors.recipients = validateEmails(values.recipients || "");


  errors.from_email = validateSingleEmail(values.from_email);


  _.each(formFields, ({ name }) => {
    if (!values[name] && name !== "from_email") {
      errors[name] = `You must provide ${name}`;
    }
  });
  console.log(errors)

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
