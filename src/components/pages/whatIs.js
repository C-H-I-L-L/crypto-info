import React from 'react';

import '../styles/whatis.css';

import Hero from '../../resources/images/bitcoinwallpaper.jpg';

export default function whatIs() {
  return (
    <div className='what-is-container'>
      <img className='img' src={Hero} />
      <div className='what-is'>
        <p>
          Cryptocurrency is an internet-based medium of exchange which uses
          cryptographical functions to conduct financial transactions.
          Cryptocurrencies leverage blockchain technology to gain
          decentralization, transparency, and immutability. The most important
          feature of a cryptocurrency is that it is not controlled by any
          central authority: the decentralized nature of the blockchain makes
          cryptocurrencies theoretically immune to the old ways of government
          control and interference. Cryptocurrencies can be sent directly
          between two parties via the use of private and public keys. These
          transfers can be done with minimal processing fees, allowing users to
          avoid the steep fees charged by traditional financial institutions.
          <br />
          <a href='https://blockgeeks.com/guides/what-is-cryptocurrency/'>
            SOURCE
          </a>
        </p>
      </div>
    </div>
  );
}
