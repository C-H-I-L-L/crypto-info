import React, { Component } from 'react';
import Cards from './components/crypto-card/cards';
import Nav from './components/nav/nav';

import Blog from './components/blog/blog';
import BlogDetail from './components/pages/blog-detail';
import WhereToBuy from './components/pages/wheretobuy';
import News from './components/pages/news';
import Auth from './components/auth/login';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.scss';

library.add(faCircleNotch, faFeatherAlt);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
    });
  }

  checkLoginStatus() {
    return axios
      .get('https://api.devcamp.space/logged_in', {
        withCredentials: true,
      })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === 'LOGGED_IN') {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN') {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
          });
        } else if (!loggedIn && loggedInStatus === 'LOGGED_IN') {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
          });
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedRoutes() {
    return [<Route path='/where-to-buy' component={WhereToBuy} />];
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Nav loggedInStatus={this.state.loggedInStatus} />

            <h2>{this.state.loggedInStatus}</h2>

            <Cards />

            <Switch>
              <Route
                path='/login'
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

              <Route path='/' component={Blog} />
              <Route exact path='/b/:slug' component={BlogDetail} />
              <Route path='/news' component={News} />
              {this.state.loggedInStatus === 'LOGGED_IN'
                ? this.authorizedRoutes()
                : null}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
