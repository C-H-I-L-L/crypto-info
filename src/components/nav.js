import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='about-us'>About us</Link>
        <Link to='histories'>History of Currencies</Link>
      </div>
    );
  }
}
