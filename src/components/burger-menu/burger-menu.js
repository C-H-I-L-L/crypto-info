import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationButton from '../auth/authenticationbutton';


const BurgerMenu = (props) => {
        return (
            <div className='burger-menu-container'>
            <Menu width={'40%'} right>
      <Link className='burger-link' to='/where-to-buy'>
        <FontAwesomeIcon className= "burger-menu-icon" icon='home' />
        Home
      </Link>
      <Link className='burger-link' to='/news'>
        <FontAwesomeIcon className= "burger-menu-icon" icon='newspaper' />
        News
      </Link>

      <Link className='burger-link' to='/blog'>
        <FontAwesomeIcon className= "burger-menu-icon" icon='blog' />
        Blog
      </Link>

      <AuthenticationButton />
    </Menu>
    </div>
    )}
   

export default withRouter(BurgerMenu);
