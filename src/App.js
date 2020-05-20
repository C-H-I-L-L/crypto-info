import React, { Component } from 'react';
import Cards from './components/crypto-card/cards';
import Nav from './components/nav/nav';

import Blog from './components/blog/blog';
import BlogDetail from './components/pages/blog-detail';
import WhereToBuy from './components/pages/wheretobuy';
import News from './components/pages/news';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.scss';

library.add(faCircleNotch, faSpinner);

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <Cards />
        <Switch>
          <Route exact path='/' component={Blog} />
          <Route exact path='/b/:slug' component={BlogDetail} />
          <Route exact path='/news' component={News} />
          <Route exact path='/where-to-buy' component={WhereToBuy} />
        </Switch>
      </div>
    );
  }
}

export default App;
