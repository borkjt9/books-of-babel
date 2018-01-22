import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandingPage from './landing_page/landing_page';
import SenlinAscendsReview from './reviews/senlin_ascends_review';
import Newsletter from './newsletter/newsletter';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <LandingPage />
        <SenlinAscendsReview />
        <Newsletter />
      </div>
    )
  }
}

export default Homepage;
