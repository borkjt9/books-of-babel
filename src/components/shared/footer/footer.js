import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="mediaLinks">
          <a className="mediaLink" target="_blank" href="http://www.facebook.com/243663062703471">
            <img src={require("../../../assets/img/facebook-logo.png")}/>
          </a>
          <a className="mediaLink" target="_blank" href="https://twitter.com/TheBooksOfBabel">
            <img src={require("../../../assets/img/twitter-logo.png")}/>
          </a>
        </div>
        <p className="footer-text">All Rights Reserved. Josiah Bancroft 2017</p>
      </div>
    )
  }
}

export default Footer
