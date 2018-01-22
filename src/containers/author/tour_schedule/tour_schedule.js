import React, { Component } from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'
import './tour_schedule.scss'

class TourSchedule extends Component {

  renderToursTable() {
    return _.map(this.props.tours, tour => {
      console.log('tour', tour)
      return (
        <div className="tour-schedule">
          <div className="data-table">
            <li className="list-group-item" key={tour.location}>
              <h4 >
                {tour.location}
              </h4>
              <h4>
                {tour.date}
              </h4>
              {tour.address}
              <a href={tour.facebookLink} className="link">
                Facebook Event
              </a>
            </li>
            <hr/>
          </div>
        </div>
      )
    })
  }
  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div>
        <ul className="list-group">
          {this.renderToursTable()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {tours: state.tours };
}
export default connect(mapStateToProps)(TourSchedule);
