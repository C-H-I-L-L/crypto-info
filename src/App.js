import React, { Component } from 'react';
import Cards from './components/crypto-card/cards';
import Nav from './components/nav';

import WhatIs from './components/pages/whatIs';
import AboutUs from './components/pages/about';
import CryptoHistories from './components/pages/cryptoHistories';
import Chat from './components/pages/chat';

import LoginComponent from './chat/login/login';
import SignupComponent from './signup';
import DashboardComponent from './chat/dashboard/dashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <Cards />
        <Switch>
          <Route exact path='/' component={WhatIs} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/histories' component={CryptoHistories} />

          <Route exact path='/chat' component={Chat} />
          <Route path='/chat/login' component={LoginComponent} />
          <Route path='/chat/signup' component={SignupComponent} />
          <Route path='/chat/dashboard' component={DashboardComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
