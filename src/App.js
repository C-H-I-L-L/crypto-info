import React, { Component } from 'react';
import Cards from './components/crypto-card/cards';
import Nav from './components/nav';

import WhatIs from './components/pages/whatIs';
import AboutUs from './components/pages/about';
import CryptoHistories from './components/pages/cryptoHistories';

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
      <div classname='App'>
        <Nav />
        <Cards />
        <Switch>
          <Route exact path='/' component={WhatIs} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/histories' component={CryptoHistories} />
        </Switch>
      </div>
    );
  }
}

export default App;
