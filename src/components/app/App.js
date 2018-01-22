import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.scss';
import '../../styles/fonts.scss';
import '../../styles/styles.scss';
import '../../styles/tags.scss';
import '../../styles/buttons.scss';
import '../../styles/margins.scss';
import '../../styles/paddings.scss';
import '../../styles/columns.scss';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import promise from 'redux-promise';

import Homepage from '../homepage/homepage'
import Books from '../../containers/books/books'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {

  getBackgroundColor() {
    switch(this.props.page) {
      case "home":
      return {
        "background-color": "#FFFFFF"
      }
      case "books":
      return {
        "background-color": "#F2F2F2"
      }
      default:
      return {
        "background-color": "#222222"
      }
    }
  }

  renderPage() {
    console.log("render page", this.props.page)
    switch(this.props.page) {
      case "home":
      return (
        <Homepage />
      )
      break;
      case "books":
      return (
        <Books />
      )
      default:
      return (
        <Homepage />

      )
      break

    }
  }
  render() {
    console.log(this.props)
    const bgColor = this.getBackgroundColor();
    return (
      <div className="App">
        <Header></Header>
        {this.renderPage()}
        <Footer></Footer>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
