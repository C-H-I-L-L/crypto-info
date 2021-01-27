import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './components/styles/mainindex.scss';


ReactDOM.render(
  <Auth0Provider
    domain="dev-hxmbrjdl.us.auth0.com"
    clientId="Ur3Hz7u50urUEs74yH2KlwbTOmMVyHfg"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
