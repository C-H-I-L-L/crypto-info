import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <Link className='nav-links' to='/where-to-buy'>
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

      <Link className='nav-links' to='/blog'>
        <FontAwesomeIcon icon='blog' />
        Blog
      </Link>

      {props.loggedInStatus === 'LOGGED_IN' ? (
        <FontAwesomeIcon
          onClick={props.handleSignOut}
          icon='sign-out-alt'
          cursor='pointer'
          className='sign-out'
        />
      ) : null}
    </Menu>
  );
};