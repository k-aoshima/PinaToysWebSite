/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import instaLogo from '../images/instaLogo.png';
import twitterLogo from '../images/twitterLogo.png';
import mailLogo from '../images/mailLogo.png'

const Footer = () => {
  return <footer>
    <div className='footerImage'>
        <a href=""><img src={ instaLogo } alt=''/></a>
        <a href=""><img src={ twitterLogo } alt=''/></a>
        <a href=""><img src={ mailLogo } alt=''/></a>
    </div>
    <p>
        Copyright(C) PinaToy’s Series All Rights Reserved.
    </p>
  </footer>
}

export default Footer