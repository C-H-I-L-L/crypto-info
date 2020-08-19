import React, { Component } from 'react';
import CryptoCard from './index';

class App extends Component {
  render() {
    return (
      <div className='content'>
        <div className='cards'>
          <CryptoCard name='Bitcoin' symbol='BTC' />

          <CryptoCard name='Litecoin' symbol='LTC' />

          <CryptoCard name='Monero' symbol='XMR' />
        </div>
      </div>
    );
  }
}

export default App;
