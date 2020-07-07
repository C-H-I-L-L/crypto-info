import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BTC from '../../resources/images/bitcoinwallpaper.jpg';
import article1 from '../../resources/images/article1.png';

export default function whereToBuy() {
  return (
    <div className='buying-container'>
      <div className='buying-content'>
        <div className='heading'>
          <h1>How and Where To Buy Cryptocurrency?</h1>
          <p>
            Overview An overview of different ways to buy cryptocurrency these
            days.
          </p>
          <img className='article-main' src={BTC} />
        </div>
        {/* BTC picture goes here */}
        <p>
          This article does not contain investment advice or recommendations.
          Every investment and trading move involves risk, you should conduct
          your own research when making a decision.
        </p>
        <p>
          Despite banks closing their doors on credit card purchases of crypto;
          one after the other, there are still available options you can use to
          buy crypto. Let’s see what they are. The easiest way is to buy
          cryptocurrency with a debit card on a centralized exchange. It really
          is as easy as buying clothes on Amazon. Coinbase, for example, is a
          popular interface to buy crypto with fiat (fiat = paper currency like
          dollars or euro). On <a className='links'>Coinbase</a>, users need to
          create an account and verify identity. After that, they can buy with
          their debit card.
        </p>
        <div className='quote'>
          <FontAwesomeIcon icon='quote-left' />
          <h3>
            Rules for verifying identity differ for each exchange/country;
            generally, users need to at least provide an ID/Passport and enable
            2-factor authentication.
          </h3>
          <FontAwesomeIcon icon='quote-right' />
        </div>
        <p>
          Coinbase also has a sister company named GDAX - this type of platform
          gives users a better idea of how crypto exchanges really work. It
          features an intuitive interface with many charting tools, trade
          history, and real-time order books. These are all tools that traders
          use to make sure that they are getting the most out of their trade.
          This exchange follows US regulations, bringing it to compliance in
          USA, Canada, Europe, the UK, Australia, and Singapore.
        </p>
        <img
          src={article1}
          alt='Image: Buybitcoinworldwide'
          className='article-image'
        />
        <p>
          <strong>Bitfinex</strong> is another very popular exchange that has
          been around as early as 2012. Its website boasts being the “most
          advanced cryptocurrency trading platform” in the world, with many
          advanced charting tools to equip while trading. The website even has
          an app that is available for both Android and the iPhone. The core of
          the exchange is made up of three features: Exchange trading, Margin
          trading, and Margin funding. The P2P financing market integrated into
          Bitfinex matches borrowers with lenders to bring the advanced tools of
          margin trading. A beginner’s guide is offered in their support section
          so that even a first timer can buy on the site.
        </p>
        {/* 2nd image */}
        While there are many more places to buy cryptocurrency with fiat,
        <strong>Robinhood</strong> is unique in its zero-fee approach and their
        goals to be an even easier platform to buy cryptocurrency. This
        exchange/trading app hybrid lets users buy Bitcoin and Ethereum right
        from their phone with no trading fee. Compare this to Coinbase’s
        1.49%-3.99% fees added to every purchase.
        {/* find robinhood picture */}
        <h2>Not all cryptocurrencies can be bought with fiat</h2>
        <p>
          As of now, it’s mostly Bitcoin, Bitcoin Cash, Ethereum, Litecoin and
          Ripple that have fiat/crypto pairs. To obtain the ~1,546
          cryptocurrencies, commonly referred to as “altcoins”, that are listed
          right now on Coinmarketcap, users need to trade BTC or ETH. Every
          altcoin has a BTC/crypto pair, and most have ETH pairs as well.
          Coinbase offers Bitcoin, Ethereum, Litecoin, and Bitcoin Cash that
          users can buy with fiat debit cards. To get involved with other
          altcoins, users will need to send their BTC, ETH, LTC or BCH over to
          an exchange that has all of these pairs. The two most popular
          fluctuate between Binance and OKex, both of which are well trusted
          global exchange networks.
        </p>
        <h2>How to buy with Cash - P2P Buying</h2>
        <p>
          Bitcoin with cash can be as simple as giving money to your friend in
          exchange for BTC. For those who don’t know anyone with BTC (or anyone
          that wants to sell), there are decentralized, p2p sites to meet with
          people. LocalBitcoins works worldwide as an advertising community
          board for users to agree on a price beforehand, and then meet in
          person to trade. It might take a lot of time to process the exchange
          process, and it might not seem trustworthy enough, as it involves
          strangers, but it is still popular and has great reviews from users.
          It is technically a decentralized platform because it involves p2p
          trading. No middlemen are used to mediate the deal - which means no
          fees are paid at all.
        </p>
        <h2>How To Simply Buy Bitcoin (no exchanges involved)</h2>
        <p>
          <strong>Bitcoin ATM</strong> - Bitcoin ATMs are becoming very popular-
          March tolls about 2,393 Bitcoin ATM machines worldwide, with a steady
          trend upwards. With these machines, the user shows up to a physical
          location and either a) buys Bitcoin using fiat currency and has it
          sent to a Bitcoin wallet or b) sells Bitcoin from the atm to withdraw
          fiat money. These devices are extremely convenient and allow traders
          to not have to deal at all with the “trading” part of crypto.
        </p>
        {/*bitcoin atm picture */}
        <p>
          <strong>Buy.Cointelegraph</strong> - Cointelegraph has recently
          partnered up with Simplex to offer a convenient way to buy Bitcoin,
          Bitcoin Cash, and/or Ethereum. Simplex accepts most credit cards
          (including Visa and Mastercard) and also accepts some debit and
          prepaid cards.
        </p>{' '}
        buy.cointelegraph.com buy.cointelegraph.com Coming Soon: Decentralized
        Exchanges While not very popular yet, mostly because the technology is
        still being worked on, decentralized exchanges (DEXs) are set to become
        more popular in 2018. DEXs use a trustless AI system to connect traders
        online. In a centralized exchange, the money goes from the user’s wallet
        to an escrow, and then to the other user in the trade. Funds stored on
        centralized exchanges are stored in wallets owned by the company, making
        funds more susceptible to hacks. In a DEX, user funds are stored in
        hardware wallets on each user’s computer, and value is never lost; when
        a trade commences, and instant swap, i.e., atomic swap, occurs so that
        the money never passes through a middleman. A smart contract is used to
        keep trust between the two users trading the money. Altcoin.io is
        working hard to make the first ever decentralized exchanges for traders,
        by traders. While many DEXs have bulky, complicated interfaces;
        Altcoin.io is working to make both a simple interface to quickly
        exchange crypto, as well as an in-depth, customizable exchange. The team
        was made famous back in October for successfully completing the first
        ever BTC-ETH atomic swap - a complicated feat because these two coins
        run completely different blockchains. Altcoin.io Preview Interface
        Altcoin.io Preview Interface Bitshares already has a working platform,
        which works best as a client downloaded straight to the computer.
        Decentralized exchanges that are already working tend to be for the
        crypto-savvy; there are many advanced features, and the interfaces are
        not as easy on the eyes. While the number one exchange, currently OKex,
        is trading $1.75 billion million daily, Bitshares is only trading at
        approximately $2 million. Crypto is easier than ever to buy now, and
        this year should see some huge improvements for both centralized and
        decentralized exchanges. Centralized exchanges will focus on scaling,
        usability and adding of new tokens, while decentralized exchanges will
        be focusing on getting their product out on the web and involving the
        existing crypto community. But for now, and forever, it’s a good time to
        buy crypto.
      </div>
    </div>
  );
}
