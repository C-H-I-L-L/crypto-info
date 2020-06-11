import React, { Component } from 'react';
import Login from '../auth/login';
import auth from '../../resources/images/Login.jpg';

export default class Auth extends Component {
  constructor(props) {
    super(props);
  }

  handleSuccessfulAuth = () => {
    this.props.history.push('/');
  };

  handleUnsuccessfulAuth = () => {
    this.props.handleUnsuccessfulLogin();
  };

  render() {
    return (
      <div className='auth-page-wrapper'>
        <div
          className='left-column'
          style={{
            backgroundImage: { auth },
          }}
        />

        <div className='right-column'>
          <Login
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
          />
        </div>
      </div>
    );
  }
}
