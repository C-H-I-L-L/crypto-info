import React, {Component} from "react";
import auth0 from "auth0-js";

import {CONFIG} from "./components/auth/auth0-variables";
import {AuthProvider} from "../authContext";

const auth = new auth0.WebAuth({
  domain: CONFIG.domain,
  clientID: CONFIG.clientId,
  redirectUri: CONFIG.callbackUrl,
  audience: `https://${CONFIG.domain}/userinfo`,
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
  };

  logout = () => {
  };

  handleAuthentication = () => {
  };

  setSession(authResult) {
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