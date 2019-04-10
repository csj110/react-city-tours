import React, { Component } from 'react';
import './NavBar.scss';
import logo from '../../logo.png';

class NavBar extends Component {
  render() {
    return (
			<nav className='navbar'>
        <img
          src={logo} alt='city tour logo'
        />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">home</a>
          </li>
          <li>
            <a href="/" className="nav-link">about</a>
          </li>
          <li>
            <a href="/" className="nav-link active">tours</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
