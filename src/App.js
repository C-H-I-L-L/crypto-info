import React, { Component } from 'react';
import CryptoCard from './components/crypto-card/index';

class App extends Component {
  constructor() {
    super();

    this.state = {
      BTCChecked: false,
      LTCChecked: false,
      XMRChecked: false,
      ETHChecked: false
    };
  }

  handleBTCChange = () => {
    this.setState(prevState => ({
      BTCChecked: !prevState.BTCChecked
    }));

    console.log(this.state.BTCChecked);
  };

  handleLTCChange = () => {
    this.setState(prevState => ({
      LTCChecked: !prevState.LTCChecked
    }));

    console.log('LTC', this.state.LTCChecked);
  };

  handleXMRChange = () => {
    this.setState(prevState => ({
      XMRChecked: !prevState.XMRChecked
    }));

    console.log('XMR', this.state.XMRChecked);
  };

  handleETHChange = () => {
    this.setState(prevState => ({
      ETHChecked: !prevState.ETHChecked
    }));

    console.log('ETH', this.state.ETHChecked);
  };

  render() {
    return (
      <div>
        <div className='checkboxes'>
          <input type='checkbox' onChange={this.handleBTCChange} name='(BTC)' />
          <input
            type='checkbox'
            label='Litecoin(LTC)'
            onChange={this.handleLTCChange}
          />
          <input
            type='checkbox'
            label='Monero(XMR)'
            onChange={this.handleXMRChange}
          />
          <input
            type='checkbox'
            label='Ethereum(ETH)'
            onChange={this.handleETHChange}
          />
        </div>
        <div className='cards'>
          {this.state.BTCChecked === true ? (
            <CryptoCard name='Bitcoin' symbol='BTC' />
          ) : null}

          {this.state.LTCChecked ? (
            <CryptoCard name='Litecoin' symbol='LTC' />
          ) : null}

          {this.state.XMRChecked ? (
            <CryptoCard name='Monero' symbol='XMR' />
          ) : null}

          {this.state.ETHChecked ? (
            <CryptoCard name='Ethereum' symbol='ETH' />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
