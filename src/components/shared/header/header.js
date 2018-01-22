import React, { Component } from 'react';
import './header.scss';
import { NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
    <nav className="navbar">
      <ul>
        <NavLink className="header-link" activeClassName="activeHeader" to="/home" >Home</NavLink>
        <NavLink className="header-link" activeClassName="activeHeader" to="/the-books" >The Books</NavLink>
        <NavLink className="header-link" activeClassName="activeHeader" to="/the-author" >The Author</NavLink>
        <NavLink className="header-link" activeClassName="activeHeader" to="/the-blog" >The Blog</NavLink>
        <NavLink className="header-link" activeClassName="activeHeader" to="/the-art" >The Art</NavLink>
        <a className="header-link" href="https://www.amazon.com/dp/B074M62D7Y/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" >Buy The Book</a>
      </ul>
    </nav>
    </div>
    )
  }
}
export default Header
