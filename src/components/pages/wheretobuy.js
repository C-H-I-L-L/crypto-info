import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BTC from '../../resources/images/bitcoinwallpaper.jpg';
import article1 from '../../resources/images/article1.png';
import article2 from '../../resources/images/atm.jpg';
import moneh from '../../resources/images/article3.jpg';
import doot from '../../resources/images/article4.jpeg';

export default function whereToBuy() {
  var containerStyles = {
    // backgroundImage: `url(${BGImage})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100%',
    // backgroundHeight: '100%'
  }

  var dootStyles = {
    width: '500px',
    border: '3px solid $off-white',
    borderRadius: '5px'
  }
  return (
    <div className='buying-container' style={containerStyles}>
      <div className='buying-content'>
        <div className='heading'>
          <h1 className='header-title'>How and Where To Buy Cryptocurrency?</h1>
          <hr className='horizontal-line' />
          <p>An overview of different ways to buy cryptocurrency these days.</p>
          <hr className='horizontal-line' />
          <div className='main-image-container'>
            <img className='main-image' src={BTC} alt='' />
          </div>
        </div>
        {/* BTC picture goes here */}
        <div className='outline-container'>
          <div className='article-body'>
            <p className='disclaimer'>
              This article does not contain investment advice or
              recommendations. Every investment and trading move involves risk,
              you should conduct your own research when making a decision.
            </p>
            <p>Many people associate some kind of darkness to cryptocurrencies because
               of dark-web activity and main-stream media hysteria. However, any cryptocurrency
               is just a tool. How you use it determines if it's use is right or wrong/dark or not/etc.
            </p>
            <p>
              Despite banks closing their doors on credit card purchases of
              crypto; one after the other, there are still available options you
              can use to buy crypto. Let’s see what they are. The easiest way is
              to buy cryptocurrency with a debit card on a centralized exchange.
              It really is as easy as buying clothes on Amazon. Coinbase, for
              example, is a popular interface to buy crypto with fiat (fiat =
              paper currency like dollars or euro). On{' '}
              <a href='' className='links'>
                Coinbase
              </a>
              , users need to create an account and verify identity. After that,
              they can buy with their debit card.
            </p>
            <div className='quote'>
              <FontAwesomeIcon icon='quote-left' />
              <h3>
                Rules for verifying identity differ for each exchange/country;
                generally, users need to at least provide an ID/Passport and
                enable 2-factor authentication.
              </h3>
              <FontAwesomeIcon icon='quote-right' />
            </div>
            <p>
              Coinbase also has a sister company named <a href='https://www.gdaxed.com/'>GDAX</a> -
              this type of platform gives users a better idea of how crypto
              exchanges really work. It features an intuitive interface with
              many charting tools, trade history, and real-time order books.
              These are all tools that traders use to make sure that they are
              getting the most out of their trade. This exchange follows US
              regulations, bringing it to compliance in USA, Canada, Europe, the
              UK, Australia, and Singapore.
            </p>
            <img src={article1} alt='' className='article-image' />
            <p>
              <a href='https://www.bitfinex.com/'>Bitfinex</a> is another very popular exchange that
              has been around as early as 2012. Its website boasts being the
              “most advanced cryptocurrency trading platform” in the world, with
              many advanced charting tools to equip while trading. The website
              even has an app that is available for both Android and the iPhone.
              The core of the exchange is made up of three features: Exchange
              trading, Margin trading, and Margin funding. The P2P financing
              market integrated into Bitfinex matches borrowers with lenders to
              bring the advanced tools of margin trading. A beginner’s guide is
              offered in their support section so that even a first timer can
              buy on the site.
            </p>
            
            <p>
              While there are many more places to buy cryptocurrency with fiat, &nbsp;
              <a href='https://robinhood.com/'>Robinhood</a> is unique in its zero-fee approach and
              their goals to be an even easier platform to buy cryptocurrency.
              This exchange/trading app hybrid lets users buy Bitcoin and
              Ethereum right from their phone with no trading fee. Compare this
              to Coinbase’s 1.49%-3.99% fees added to every purchase.
            </p>
            <h2>Not all cryptocurrencies can be bought with fiat</h2>
            <p>
              As of now, it’s mostly Bitcoin, Bitcoin Cash, Ethereum, Litecoin
              and Ripple that have fiat/crypto pairs. To obtain the ~1,546
              cryptocurrencies, commonly referred to as “altcoins”, that are
              listed right now on Coinmarketcap, users need to trade BTC or ETH.
              Every altcoin has a BTC/crypto pair, and most have ETH pairs as
              well. Coinbase offers Bitcoin, Ethereum, Litecoin, and Bitcoin
              Cash that users can buy with fiat debit cards. To get involved
              with other altcoins, users will need to send their BTC, ETH, LTC
              or BCH over to an exchange that has all of these pairs. The two
              most popular fluctuate between Binance and OKex, both of which are
              well trusted global exchange networks.
            </p>
            <img style={dootStyles} src={doot} alt='' />
            <h2>How to buy with Cash anonymously - P2P Buying</h2>
            <strong>AS WITH ALL MEETUPS FROM THE INTERNET:
              <ul>
                <li>meet in a public place</li>
                <li>bring someone with you if you can</li>
                <li>use your best judgement</li>
              </ul>
            </strong>
            {/* <img className='article-image' src={moneh} alt='' /> */}
            <p>
              Bitcoin with cash can be as simple as giving money to your friend
              in exchange for BTC. For those who don’t know anyone with BTC (or
              anyone that wants to sell), there are decentralized, p2p sites to
              meet with people. <a href='https://localbitcoins.com/'>LocalBitcoins</a> works worldwide as an advertising
              community board for users to agree on a price beforehand, and then
              meet in person to trade. It might take a lot of time to process
              the exchange process, and it might not seem trustworthy enough, as
              it involves strangers, but it is still popular and has great
              reviews from users. It is technically a decentralized platform
              because it involves p2p trading. No middlemen are used to mediate
              the deal - which means no fees are paid at all.
            </p>
            <h2>How To Simply Buy Bitcoin (no exchanges involved)</h2>
            <p>
              <strong>Bitcoin ATM</strong> - Bitcoin ATMs are becoming very
              popular- March tolls about 2,393 Bitcoin ATM machines worldwide,
              with a steady trend upwards. With these machines, the user shows
              up to a physical location and either a) buys Bitcoin using fiat
              currency and has it sent to a Bitcoin wallet or b) sells Bitcoin
              from the atm to withdraw fiat money. These devices are extremely
              convenient and allow traders to not have to deal at all with the
              “trading” part of crypto.
            </p>
            <img className='article-image' src={article2} alt='' />
            <h2>Decentralized Exchanges</h2>
            <p>
               A decentralized exchange (DEX) is a cryptocurrency exchange which operates in a decentralized way, without a central authority. <br/>
               Check out a list of decentralized exchanges <a href='https://defiprime.com/exchanges'>here</a>.
            </p>
            <h1>Happy and safe travels to you all</h1>
            <p>This article is paraphrased from: <a href='https://cointelegraph.com/news/how-and-where-to-buy-cryptocurrency-overview'>Cointelegraph</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
