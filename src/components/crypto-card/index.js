import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import '../styles/card-styles.scss';

class CryptoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      symbol: props.symbol,
      price: null,
      lastPrice: null
    };

    this.pollPrice = this.pollPrice.bind(this);
    this.whichArrow = this.whichArrow.bind(this);
  }

  componentDidMount() {
    this.pollPrice();
    setInterval(this.pollPrice, 2500);
  }

  pollPrice() {
    const { symbol } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=${symbol},USD`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState(prevState => ({
          price: json.USD,
          lastPrice:
            prevState.price !== json.USD ? prevState.price : prevState.lastPrice
        }));
      });
  }

  priceChange(lastPrice, price) {
    const diff = lastPrice - price;
    const change = diff / lastPrice;
    return lastPrice === null ? (
      <div>Loading change...</div>
    ) : (
      (change * -100).toFixed(3) + '%'
    );
  }

  whichArrow() {
    return this.state.lastPrice > this.state.price ? (
      <FontAwesomeIcon className='arrow' icon={faArrowDown} />
    ) : (
      <FontAwesomeIcon className='arrow' icon={faArrowUp} />
    );
  }

  render() {
    const { name, symbol, price, lastPrice } = this.state;
    const gainloss = lastPrice > price ? 'loss' : 'gain';

    return (
      <div className='cards'>
        <div className={`card ${gainloss}`}>
          <div className='name'>
            {name}
            <span>({symbol})</span>
          </div>

          <div className={`percentage ${gainloss}`}>
            {lastPrice === null ? null : this.whichArrow()}
            {this.priceChange(lastPrice, price)}
          </div>

          <div className='logo'></div>

          <div className={`price ${gainloss}`}>{price}</div>
        </div>
      </div>
    );
  }
}

export default CryptoCard;
