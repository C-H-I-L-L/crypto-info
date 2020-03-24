import React, { Component } from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom';

import Logo from '../resources/images/crypto-logo.png';

export default class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <Link to='/'>Home</Link>
        <Link to='about-us'>About us</Link>
        <Link to='histories'>History of Currencies</Link>
        <Link to='chat'>Chat</Link>
      </div>
    );
  }
}
