import React, { Component } from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'
import './reviews.scss'

class Reviews extends Component {

  renderReviewsTable() {
    return _.map(this.props.reviews, review => {
      console.log('review', review)
      return (
        <div className="reviews">
          <div className="data-table">
            <li className="list-group-item" key={review.reviewer}>
              <h4>
                {review.reviewer}
              </h4>
              <p>
                {review.summary}
              </p>
              <a href={review.link} className="link">
                See Full Review
              </a>
            </li>
            <hr/>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderReviewsTable()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {reviews: state.reviews };
}
export default connect(mapStateToProps)(Reviews);
