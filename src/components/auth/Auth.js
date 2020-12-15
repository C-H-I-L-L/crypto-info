// >>>>>>>>>>>>>>>>>>>>>>>>>
// old authentication method
// >>>>>>>>>>>>>>>>>>>>>>>>>
// import React, { Component } from 'react';
// import Login from '../auth/login';
// import auth from '../../resources/images/Login.jpg';

// export default class Auth extends Component {
//   constructor(props) {
//     super(props);
//   }

//
//   handleUnsuccessfulAuth = () => {
//     this.props.handleUnsuccessfulLogin();
//   };

//   render() {
//     return (
//       <div className='auth-page-wrapper'>
//         <div
//           className='left-column'
//           style={{
//             backgroundImage: { auth },
//           }}
//         />

//         <div className='right-column'>
//           <Login
//             handleSuccessfulAuth={this.handleSuccessfulAuth}
//             handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
//           />
//         </div>
//       </div>
//     );
//   }
// }
import React, {Component} from "react";
import auth0 from "auth0-js";

import {AUTH_CONFIG} from "./auth0-variables";
import {AuthProvider} from "../../authContext";

const auth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: "token id_token"
});

class Auth extends Component {
  state = {
    authenticated: false,
    user: {
      role: "visitor"
    },
    accessToken: ""
  };

  initiateLogin = () => {
    auth.authorize();
  };

  logout = () => {
    this.setState({
      authenticated: false,
      user: {
        role: "visitor"
      },
      accessToken: ""
    });
  };

  handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error);
        console.log(`Error ${error.error} occured`);
        return;
      }
  
      this.setSession(authResult.idTokenPayload);
    });
  };

  setSession(data) {
    const user = {
      id: data.sub,
      email: data.email,
      role: data[AUTH_CONFIG.roleUrl]
    };
    this.setState({
      authenticated: true,
      accessToken: data.accessToken,
      user
    });
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;