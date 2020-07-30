import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'coinmarketcap-cryptocurrency-icons';
import Media from 'react-media';

import '../styles/card-styles.scss';
import { truncate } from 'lodash';

class CryptoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      symbol: props.symbol,
      price: null,
      lastPrice: null,
      priceLoading: true,
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
      .then((resp) => resp.json())
      .then((json) => {
        this.setState((prevState) => ({
          priceLoading: false,
          price: json.USD,
          lastPrice:
            prevState.price !== json.USD
              ? prevState.price
              : prevState.lastPrice,
        }));
      });
  }

  priceChange(lastPrice, price) {
    const diff = lastPrice - price;
    const change = diff / lastPrice;
    return lastPrice === null ? (
      <div>
        <FontAwesomeIcon icon='circle-notch' spin />
        &nbsp;&nbsp; last 10s-change...
      </div>
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
      <Media
        queries={{
          small: '(max-width: 599px)',
          medium: '(min-width: 600px) and (max-width: 1199px)',
          large: '(min-width: 1200px)',
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <div className='card'>
                <div className={`card ${gainloss}`}>
                  <div className='coin-name'>
                    <Icon
                      className='symbol'
                      i={symbol.toLowerCase()}
                      size={20}
                    />
                    <span>({symbol})</span>
                  </div>

                  {/* <div className={`percentage ${gainloss}`}>
                    {lastPrice === null ? null : this.whichArrow()}
                    {this.priceChange(lastPrice, price)}
                  </div> */}

                  <div className={`price ${gainloss}`}>
                    <strong>
                      {this.state.priceLoading === true ? (
                        <FontAwesomeIcon icon='circle-notch' spin />
                      ) : (
                        '$'.concat(price)
                      )}
                    </strong>
                  </div>
                </div>
                {/* <div ClassName='coin-label'>{symbol}</div> */}
              </div>
            )}

            {matches.medium && (
              <div className='card'>
                <div className={`card ${gainloss}`}>
                  <div className='coin-name'>
                    <Icon
                      className='symbol'
                      i={symbol.toLowerCase()}
                      size={20}
                    />
                    <span>({symbol})</span>
                  </div>

                  {/* <div className={`percentage ${gainloss}`}>
            {lastPrice === null ? null : this.whichArrow()}
            {this.priceChange(lastPrice, price)}
          </div> */}

                  <div className={`price ${gainloss}`}>
                    <strong>${price}</strong>
                  </div>
                </div>
                {/* <div ClassName='coin-label'>{symbol}</div> */}
              </div>
            )}

            {matches.large && (
              <div className='card'>
                <div className={`card ${gainloss}`}>
                  <div className='coin-name'>
                    <Icon
                      className='symbol'
                      i={symbol.toLowerCase()}
                      size={20}
                    />
                    <span>({symbol})</span>
                  </div>

                  <div className={`percentage ${gainloss}`}>
                    {lastPrice === null ? null : this.whichArrow()}
                    {this.priceChange(lastPrice, price)}
                  </div>

                  <div className={`price ${gainloss}`}>
                    <strong>${price}</strong>
                  </div>
                </div>
                {/* <div ClassName='coin-label'>{symbol}</div> */}
              </div>
            )}
          </>
        )}
      </Media>
    );
  }
}

export default CryptoCard;
