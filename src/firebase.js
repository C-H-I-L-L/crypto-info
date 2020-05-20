import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'PROCESS.ENV.API_KEY',
  authDomain: 'crypto-blog-6bb10.firebaseapp.com',
  databaseURL: 'https://crypto-blog-6bb10.firebaseio.com',
  projectId: 'crypto-blog-6bb10',
  storageBucket: 'crypto-blog-6bb10.appspot.com',
  messagingSenderId: '773127909495',
  appId: '1:773127909495:web:9b98537da256647fe89672',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('/posts');
