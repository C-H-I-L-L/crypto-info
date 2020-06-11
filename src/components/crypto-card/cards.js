import React, { Component } from 'react';
import CryptoCard from './index';

class App extends Component {
  constructor() {
    super();

    this.state = {
      BTCChecked: true,
      LTCChecked: true,
      XMRChecked: true,
      ETHChecked: true,
    };
  }

  handleBTCChange = () => {
    this.setState((prevState) => ({
      BTCChecked: !prevState.BTCChecked,
    }));
  };

  handleLTCChange = () => {
    this.setState((prevState) => ({
      LTCChecked: !prevState.LTCChecked,
    }));
  };

  handleXMRChange = () => {
    this.setState((prevState) => ({
      XMRChecked: !prevState.XMRChecked,
    }));
  };

  handleETHChange = () => {
    this.setState((prevState) => ({
      ETHChecked: !prevState.ETHChecked,
    }));
  };

  render() {
    return (
      <div className='content'>
        {/* <div className='checkboxes'>
          <input
            type='checkbox'
            checked={this.state.BTCChecked}
            onChange={this.handleBTCChange}
            name='(BTC)'
          />
          <span>BTC</span>
          <input
            type='checkbox'
            label='Litecoin(LTC)'
            onChange={this.handleLTCChange}
          />
          <span>LTC</span>
          <input
            type='checkbox'
            label='Monero(XMR)'
            onChange={this.handleXMRChange}
          />
          <span>XMR</span>
          <input
            type='checkbox'
            label='Ethereum(ETH)'
            onChange={this.handleETHChange}
          />
          <span>ETH</span>
        </div> */}
        <div className='cards'>
          {this.state.BTCChecked ? (
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
