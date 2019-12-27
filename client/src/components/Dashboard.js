import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import FlashMessage from "react-flash-message";
import { connect } from "react-redux";
import { chooseSortBy } from "../actions";

const Dashboard = ({ error, sortBy, chooseSortBy }) => {
  // console.log(sortBy)
  return (
    <div>
      <div>
        {error.error ? (
          <FlashMessage duration={7000}>
            <strong>{error.error}</strong>
          </FlashMessage>
        ) : (
          ""
        )}
      </div>

      <div className="row ">
        <div className="col s12 m3">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
        <div className="input-field col s12 m6">
          {/* <form class="col s12"> */}
          <div className="select-wrapper">
            <label>Sort your surveys</label>
            <select
              className="browser-default"
              value={sortBy}
              onChange={e => {
                chooseSortBy(e.target.value);
              }}
            >
              <option value="" disabled >
                Sort By
              </option>
              <option value="dateSent">by date sent</option>
              <option value="lastResponded">by date responded</option>
              <option value="title">title</option>
              <option value="yesAsc">yes(ascending)</option>
              <option value="yesDesc">yes(descending)</option>
              <option value="noAsc">no (ascending)</option>
              <option value="noDesc">no (descending</option>
            </select>
          </div>
          {/* </form> */}
        </div>
      </div>

      <SurveyList />
    </div>
  );
};

const mapStateToProps = ({ error, sortBy }) => {
  // console.log(sortBy);
  return {
    error,
    sortBy: sortBy.sortBy
  };
};
export default connect(mapStateToProps, { chooseSortBy })(Dashboard);
// npm install redux-form@8.1.0
