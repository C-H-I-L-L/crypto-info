import React, { Component } from 'react';
import '../styles/nav.scss';
import { Link } from 'react-router-dom';

import Logo from '../../resources/images/crypto-logo.png';
import whereToBuy from '../pages/wheretobuy';

const Nav = (props) => {
  const dynamicLink = (route, linkText) => {
    return <Link to='/where-to-buy'>Buy Crypto</Link>;
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} />
      </div>
      <Link to='/'>Home</Link>
      <Link to='/news'>News</Link>
      {props.loggedInStatus === 'LOGGED_IN'
        ? dynamicLink('/where-to-buy', 'wheretobuy')
        : null}
    </div>
  );
};

export default Nav;
