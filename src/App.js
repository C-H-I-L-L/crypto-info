import React, { Component } from 'react';
import Cards from './components/crypto-card/cards';
import Nav from './components/nav/nav';
import Blog from './components/blog/blog';
import BlogDetail from './components/pages/blog-detail';
import WhereToBuy from './components/pages/wheretobuy';
import ContactUs from './components/pages/contactus';
import News from './components/pages/news';
import Auth from './components/auth/login';
import Icons from './components/helpers/icons';

import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './components/styles/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
    };
  }

  handleSuccessfulAuth = () => {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
    });
  };

  handleUnsuccessfulAuth = () => {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
    });
  };

  handleSuccessfulLogout = () => {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
    });
  };

  checkLoginStatus() {
    return axios
      .get('https://api.devcamp.space/logged_in', {
        withCredentials: true,
      })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

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
      <Router>
        <Nav
          loggedInStatus={this.state.loggedInStatus}
          handleSuccessfulLogout={this.handleSuccessfulLogout}
        />

        <div className='container'>
          <Cards />

          <Switch>
            <Route
              path='/login'
              render={(props) => (
                <Auth
                  {...props}
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                  handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                />
              )}
            />

            <Route
              exact
              path='/blogPost/:slug'
              render={(props) => (
                <BlogDetail
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />

            <Route path='/news' component={News} />

            {/* {this.state.loggedInStatus === 'LOGGED_IN'
              ? this.authorizedRoutes()
              : null} */}
            <Route path='/contact' component={ContactUs} />
            <Route
              path='/blog'
              render={(props) => (
                <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Route path='/' component={WhereToBuy} />
            
          </Switch>
          
        </div>
      </Router>
    );
  }
}
