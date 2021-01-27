import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Cards from './components/crypto-card/cards';
import Nav from './components/nav/nav';
import Blog from './components/blog/blog';
import BlogDetail from './components/pages/blog-detail';
import WhereToBuy from './components/pages/wheretobuy';
import ContactUs from './components/pages/contactus';
import News from './components/pages/news';
import Icons from './components/helpers/icons';


import './components/styles/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      role: "visitor"
    }

    Icons();
  }

  initiateLogin = () => {
  }

  handleAuthentication = () => {
  }

  logout = () => {
  }



  authorizedRoutes() {
    return [<Route path='/where-to-buy' component={WhereToBuy} />];
  }

  render() {
    return (
      <div className='container'>
      <Router>
        <Nav loggedInStatus={this.state.loggedInStatus}/>

        <Cards />

          <Switch>

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
          
      </Router>
      </div>
      
    );
  }
}
