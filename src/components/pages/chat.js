import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Chat extends Component {
  render() {
    return (
      <>
        <p>Hello from chat</p>

        <Link to='chat/login'>Login</Link>
        <Link to='chat/signup'>Signup</Link>
        <Link to='chat/dashboard'>Dashboard</Link>
      </>
    );
  }
}
