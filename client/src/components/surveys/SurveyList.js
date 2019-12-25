import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";


class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            {/* <div className="right"> */}
            <p className="right" style={{ display: "block" }}>
              Last Responded:
              { survey.lastResponded ? new Date(survey.lastResponded).toLocaleDateString() : " Not responded yet"}
            </p>
            <br />
            <p className="right" style={{ display: "block" }}>
              Send On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            {/* </div> */}
          </div>
          <div className="card-action">
            
            <a href="">Yes: {survey.yes}</a>
            <a href="">No: {survey.no}</a>
            <button onClick={() => this.props.deleteSurvey(survey._id)} className="red btn-flat right white-text" type="submit">
              DELETE
              <i className="material-icons right">delete</i>
            </button>
           
         
           
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return {
    surveys
  };
};
export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);
