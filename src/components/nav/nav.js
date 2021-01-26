import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Media from 'react-media';

// auth stuff
import { AuthConsumer } from "../../authContext";
import Login from "../auth/login";

import '../styles/nav.scss';

import BurgerMenu from '../burger-menu/burger-menu';
import Logo from '../../resources/images/crypto-logo.png';

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

  // const changeButton = () =>
  // {({ authenticated }) => (
  //   authenticated ? (
  //     <FontAwesomeIcon
  //     onClick={handleSignOut}
  //     icon='sign-out-alt'
  //     cursor='pointer'
  //     className='sign-out'
  //     />
  //     ) : (
  //         <Login />
  //     )
  //   )
  // }
    
    
  const navStuff =
    <div className='navbar'>
    <div className='logo'>
      <img src={Logo} />
    </div>
    <Link className='nav-links' to='/where-to-buy'>
      <FontAwesomeIcon icon='home' />
      Home
    </Link>
    <Link className='nav-links' to='/news'>
      <FontAwesomeIcon icon='newspaper' />
      News
    </Link>

    <Link className='nav-links' to='/blog'>
      <FontAwesomeIcon icon='blog' />
      Blog
    </Link>

    <Link className='nav-links' to='/contact'>
      <FontAwesomeIcon icon='address-card' />
      Contact
    </Link>

    {/* {this.props.loggedInStatus === "LOGGED_IN" ? <Logout /> : null}
    {this.props.loggedinStatus === "NOT_LOGGED_IN" ? <Login /> : null} */}
  
  </div>;
  

  return ( 
  
  <Media
    queries={{
      small: '(max-width: 599px)',
      medium: '(min-width: 600px) and (max-width: 1199px)',
      large: '(min-width: 1200px)',
    }}
  >
   {(matches) => (
          <>
            {matches.small && (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} />
      </div>
      <BurgerMenu loggedInStatus={props.loggedInStatus} handleSignOut={props.handleSignOut} />
    </div>
    )}

{matches.medium && (
  navStuff
)}

{matches.large && (
  navStuff
)}
</>
)}

</Media>
  )}
export default withRouter(Nav);
