import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/shared/header/header';
import About from './about/about';
import Interviews from './interviews/interviews';
import TourSchedule from './tour_schedule/tour_schedule';
import Newsletter from '../../components/homepage/newsletter/newsletter';
import './author.scss';

class Author extends Component {

  aboutActive = true;
  interviewsActive = false;
  newsletterActive = false;
  tourScheduleActive = false;
  constructor(props) {
      super(props);
      this.state = {
        activeContainer: "About",
      };
      this.renderContainer = this.renderContainer.bind(this);
      this.changeActiveContainer = this.changeActiveContainer.bind(this);

    }

  changeActiveContainer(activeC) {
    this.setState({
    activeContainer: activeC
    })
    this.aboutActive = false;
    this.interviewsActive = false;
    this.newsletterActive = false;
    this.tourScheduleActive = false;
    switch(activeC) {
      case "About":
        this.aboutActive = true
        break
      case "Interviews":
        this.interviewsActive = true
        break
      case "Newsletter":
        this.newsletterActive = true
        break
      case "TourSchedule":
        this.tourScheduleActive = true
        break
    }
  }

  renderContainer() {
    const activeContainer = this.state.activeContainer
    const bookInfo = this.props.books[activeContainer]
    const descriptionStyle = {marginRight: "40px"}
    switch(this.state.activeContainer) {
      case "About":
        return (
          <About />
        )
        break
      case "Interviews":
        return (
          <Interviews />
        )
        break
      case "Newsletter":
        const newspaperStyle = {padding: "5px 40px 40px 100px", backgroundColor: "#FFFFFF"}
        return(
          <div style={newspaperStyle}>
            <Newsletter style={newspaperStyle}/>
            </div>
        )
        break
      case "TourSchedule":
        return (
          <TourSchedule></TourSchedule>
        )
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
      <div className="author">
        <Header></Header>
        <div className="wrapper">
          <div className="container-wrapper">
            <div className="container-interior">
              <div>
                <ul className="section-tabs">
                  <li><a className={this.aboutActive? "active":""} onClick={this.changeActiveContainer.bind(this, "About")}>ABOUT</a></li>
                  <li><a className={this.tourScheduleActive? "active":""} onClick={this.changeActiveContainer.bind(this, "TourSchedule")}>TOUR SCHEDULE</a></li>
                  <li><a className={this.newsletterActive? "active":""} onClick={this.changeActiveContainer.bind(this, "Newsletter")}>NEWSLETTER</a></li>
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
    activeController: "About",
    books: state.books
  }
}

export default connect(mapStateToProps)(Author)
