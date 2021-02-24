import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Cards from './components/crypto-card/cards';
import Nav from './components/nav/nav';
import Blog from './components/blog/blog';
import BlogDetail from './components/pages/blog-detail';
import WhereToBuy from './components/pages/wheretobuy';
import ContactUs from './components/pages/contactus';
import News from './components/pages/news';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth0 } from "@auth0/auth0-react";

import Icons from './components/helpers/icons';

import './components/styles/main.scss';

const App = () => {
  Icons();
  const { isLoading, user, isAuthenticated } = useAuth0();


  if (isLoading) {
    return (
    <div className="content-loader">
      <FontAwesomeIcon icon='circle-notch' spin />
    </div>);
  }

  // changeEmail = (email) => {
  //   const adminEmail = "cryptoinfo724@gmail.com";
  //   if (email === adminEmail && this.state.email === adminEmail) {
  //     return null
  //   } 
  //   if (email === adminEmail && this.state.email !== adminEmail) {
  //       return this.setState({ email: {email} })
  //     } else {
  //     return null
  //   }
  // }

  // const authorizedRoutes() {
  //   return [<Route path='/where-to-buy' component={WhereToBuy} />];
  // }
  if (!isLoading) { 
    const currentUserEmail = isAuthenticated ? user.email : "";
    
    return (

      <div className='container'>
      <Router>
        <Nav />

        <Cards />

          <Switch>

            <Route
              exact
              path='/blogPost/:slug'
              render={(props) => (
                <BlogDetail
                  {...props}
                  adminEmail={currentUserEmail}
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
                <Blog {...props} adminEmail={currentUserEmail} />
              )}
            />
            <Route path='/' component={WhereToBuy} />
            
          </Switch>
      </Router>
      </div>
      
    );
  }
}

export default App;
