import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import FlashMessage from "react-flash-message";
import { connect } from "react-redux";
import { chooseSortBy, findByTitle } from "../actions";

const Dashboard = ({
  error,
  sortByCriteria,
  titleToFind,
  chooseSortBy,
  findByTitle
}) => {
  // console.log(titleToFind);
  // console.log(chooseSortBy)
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
          <div className="row">
            <div className="">
              Find by title:
              <div className="input-field inline">
                <input
                  placeholder="Enter Title"
                  type="text"
                  className="validate"
                  id="findByTitle"
                  name="findByTitle"
                  value={titleToFind}
                  onChange={e => {
                    console.log(e.target.value);
                    findByTitle(e.target.value);
                  }}
                />
                {/* <label htmlFor="findByTitle">Enter Title</label> */}
              </div>
            </div>
          </div>

          <div className="select-wrapper">
            <label>Sort your surveys</label>
            <select
              className="browser-default"
              value={sortByCriteria}
              onChange={e => {
                chooseSortBy(e.target.value);
              }}
            >
              <option value="" disabled>
                Sort By
              </option>
              <option value="title">title</option>
              <option value="dateSentAsc">by date sent (ascending)</option>
              <option value="dateSentDesc">by date sent (descending)</option>
              <option value="lastRespondedAsc">
                by date responded (ascending)
              </option>
              <option value="lastRespondedDesc">
                by date responded (descending)
              </option>

              <option value="yesAsc">yes(ascending)</option>
              <option value="yesDesc">yes(descending)</option>
              <option value="noAsc">no (ascending)</option>
              <option value="noDesc">no (descending)</option>
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
  // console.log(sortBy.titleToFind);
  return {
    error,
    sortByCriteria: sortBy.sortByCriteria,
    titleToFind: sortBy.titleToFind
  };
};
export default connect(mapStateToProps, { chooseSortBy, findByTitle })(
  Dashboard
);
// npm install redux-form@8.1.0
