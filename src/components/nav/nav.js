import React, { Component } from 'react';
import '../styles/nav.scss';
import { Link } from 'react-router-dom';

import Logo from '../../resources/images/crypto-logo.png';

export default class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <Link to='/'>Home</Link>
        <Link to='/news'>News</Link>
        <Link to='/where-to-buy'>Buy Crypto</Link>
      </div>
    );
  }
}
