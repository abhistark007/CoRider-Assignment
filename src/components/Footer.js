import React from 'react'
import './Footer.css'
import pinIcon from '../assets/pinIcon.png';
import sendIcon from '../assets/sendIcon.png';

function Footer({to}) {
  return (
    <div className='footer'>
        <input type="text" placeholder={`Reply to @${to}`}/>
        <div className="footer__icons">
          <img src={pinIcon} alt='pinIcon'/>
          <img src={sendIcon} alt="sendIcon" />
        </div>
    </div>
  )
}

export default Footer