import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './components/styles/mainindex.css';

import { BrowserRouter } from 'react-router-dom';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyDILOJpMVVlnEdmj86axiu7P8GnSgTGwyU',
  authDomain: 'crypto-info-fafb8.firebaseapp.com',
  databaseURL: 'https://crypto-info-fafb8.firebaseio.com',
  projectId: 'crypto-info-fafb8',
  storageBucket: 'crypto-info-fafb8.appspot.com',
  messagingSenderId: '184555560179',
  appId: '1:184555560179:web:624d15dbcc5a38478dab86'
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
