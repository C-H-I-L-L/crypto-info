import React, { Component } from 'react';
import '../styles/nav.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../resources/images/crypto-logo.png';
import WhereToBuy from '../pages/wheretobuy';

const Nav = (props) => {
  const dynamicLink = (route, linkText) => {
    return <Link to='/where-to-buy'>Buy Crypto</Link>;
  };

  const handleSignOut = () => {
    axios
      .delete('https://api.devcamp.space/logout', { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push('/');
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log('error signing out', error);
      });
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} />
      </div>
      <Link className='nav-links' to='/'>
        <FontAwesomeIcon icon='home' />
        Home
      </Link>
      <Link className='nav-links' to='/news'>
        <FontAwesomeIcon icon='newspaper' />
        News
      </Link>
      {/* {props.loggedInStatus === 'LOGGED_IN'
        ? dynamicLink('/where-to-buy', 'wheretobuy')
        : null} */}
      <Link className='nav-links' to='/where-to-buy'>
        <FontAwesomeIcon icon='money-bill-wave' />
        Buy
      </Link>
      {props.loggedInStatus === 'LOGGED_IN' ? (
        <FontAwesomeIcon
          onClick={handleSignOut}
          icon='sign-out-alt'
          cursor='pointer'
          className='sign-out'
        />
      ) : null}
    </div>
  );
};

export default withRouter(Nav);
