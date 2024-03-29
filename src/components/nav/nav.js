import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Media from 'react-media';

import AuthenticationButton from '../auth/authenticationbutton';

import '../styles/nav.scss';

import BurgerMenu from '../burger-menu/burger-menu';
import Logo from '../../resources/images/crypto-logo.png';

const Nav = (props) => {
    
  const navStuff = 
    <div className='navbar'>
    <div className='logo'>
      <img src={Logo} alt='' />
    </div>
    <Link className='nav-links' to='/'>
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

    <AuthenticationButton />
    
    
    {/* {loginOperator()} */}

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
        <img src={Logo} alt='' />
      </div>
      <BurgerMenu />
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
