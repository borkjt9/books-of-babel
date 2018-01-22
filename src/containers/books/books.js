import React, { Component } from 'react';
import Header from '../../components/shared/header/header';
import './book.scss'
import {NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Reviews from './reviews/reviews'

class Books extends Component {

  senlinActive = true;
  armActive = false;
  reviewsActive = false;
  excerptsActive = false;
  constructor(props) {
      super(props);
      this.state = {
        activeContainer: "Senlin",
      };
      this.renderContainer = this.renderContainer.bind(this);
      this.changeActiveContainer = this.changeActiveContainer.bind(this);

    }

  changeActiveContainer(activeC) {

    this.setState({
    activeContainer: activeC
    })
    this.senlinActive = false;
    this.armActive = false;
    this.reviewsActive = false;
    this.excerptsActive = false;
    switch(activeC) {
      case "Senlin":
        this.senlinActive = true
        break
      case "Arm":
        this.armActive = true
        break
      case "Reviews":
        this.reviewsActive = true
        break
      case "Excerpts":
        this.excerptsActive = true
        break
    }
  }

  renderContainer() {
    const activeContainer = this.state.activeContainer
    const bookInfo = this.props.books[activeContainer]
    const descriptionStyle = {marginRight: "40px"}
    switch(this.state.activeContainer) {
      case "Senlin": case "Arm":
      console.log('getting here')
        return (
          <div className="book-container">
            <div className="col-5 vert-middle">
              <div className="photo-container">
              <img className="cover-photo" src= {require(`../../assets/img/${bookInfo.cover}`)}/>

              </div>
            </div>
            <div className="col-7 vert-middle">
              <span style={descriptionStyle}>
                {bookInfo.description}
                <div className="left margin-10">
                  <a
                    className="btn"
                    href={bookInfo.link}>
                    BUY THE BOOK
                  </a>
                </div>
              </span>

            </div>

          </div>
        )
        break
      case "Reviews":
        return <Reviews></Reviews>
        break
      default:
        return (
          <div>
            Boom
          </div>
        )

    }

  }

  render() {
    return (

      <div className="books">
        <Header></Header>
        <div>
          <div className="container-wrapper">
            <div className="container-interior">
              <div>
                <ul className="section-tabs">
                  <li><a className={this.senlinActive? "active":""} onClick={this.changeActiveContainer.bind(this, "Senlin")}>SENLIN ASCENDS</a></li>
                  <li><a className={this.armActive? "active":""} onClick={this.changeActiveContainer.bind(this, "Arm")}>ARM OF THE SPHINX</a></li>
                  <li><a className={this.reviewsActive? "active":""} onClick={this.changeActiveContainer.bind(this, "Reviews")}>REVIEWS</a></li>
                  <li><a className={this.excerptsActive? "active":""} onClick={this.changeActiveContainer.bind(this, "Excerpts")}>EXCERPTS</a></li>
                </ul>
              </div>

              <div className="content">
                {this.renderContainer()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeController: "Senlin",
    books: state.books
  }
}

export default connect(mapStateToProps)(Books)
