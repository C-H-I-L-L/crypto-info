import React from 'react';
import ReactDOM from 'react-dom';
import Auth0ProviderWithHistory from './components/auth/auth0-provider-with-history';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './components/styles/mainindex.scss';

ReactDOM.render(
  <BrowserRouter >
  <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
