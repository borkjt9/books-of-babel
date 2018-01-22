import React, { Component } from 'react';
import './senlin_ascends_review.scss';

class SenlinAscendsReview extends Component {
  render() {
    return (
      <div className="container-wrapper reviews-section">
      <h2 className="title-praise text-center">PRAISE FOR THE BOOKS</h2>
      <div className="margin-top-40">
        <span className="col-6 text-center vert-middle">
          <img className="book-cover" src= {require("../../../assets/img/senlin_ascends_cover.png")}/>
        </span>
        <span className="col-6 vert-middle ">
          <div>
            <p className="review-quote right-hand-review">
              “Senlin Ascends is one of the best reads I’ve had in ages . . . I was dragged in and didn’t escape until I’d finished two or three days later.”
              <span> </span>
              <strong>
                 - Mark Lawrence
              </strong>
            </p>
            <p className="review-quote right-hand-review">
              “Bancroft’s brilliant debut fantasy goes off like a firework and suggests even greater things in the author’s future.”
              <span> </span>
              <strong>
                - Publishers Weekly
              </strong>
            </p>
            <a
              className="btn btn-left right-hand-review"
              href="https://www.amazon.com/dp/B074M62D7Y/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">
              BUY THE BOOK
            </a>
          </div>
        </span>
      </div>

      <div className="margin-top-40">
        <span className="col-6 vert-middle">
          <div>
            <p className="review-quote left-hand-review">
              “dammit ... these two books are genius. I just love them.”
              <span> </span>
              <strong>
                 - Mark Lawrence
              </strong>
            </p>
            <p className="review-quote left-hand-review">
              “Arm of the Sphinx … is a natural progression building on the foundations created by its predecessor and full of promise for the rest of the tale.”
              <span> </span>
              <strong>
                - Allie’s Desk
              </strong>
            </p>
            <a
              className="btn btn-left left-hand-review"
              href="https://www.amazon.com/gp/product/B074M5TKYJ/ref=series_rw_dp_sw">
              BUY THE BOOK
            </a>
          </div>
        </span>
        <span className="col-6 text-center vert-middle">
          <img className="book-cover" src= {require("../../../assets/img/arm_of_the_sphinx_cover.png")}/>
        </span>
      </div>
      </div>
    )
  }
}

export default SenlinAscendsReview
