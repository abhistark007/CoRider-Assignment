import React, { useState } from 'react'
import './Footer.css'
import pinIcon from '../assets/pinIcon.png';
import sendIcon from '../assets/sendIcon.png';
import camIcon from '../assets/camIcon.png';
import videoIcon from '../assets/videoIcon.png';
import docIcon from '../assets/docIcon.png';

function Footer({to}) {
  const [popup,setPopup]=useState(true);
  return (
    <div className='footer'>
        <input type="text" placeholder={`Reply to @${to}`}/>
        <div className="footer__icons">
          {
            popup?<></>:
            (<div className="footer__popup">
              <img src={camIcon} alt="camIcon" />
              <img src={videoIcon} alt="videoIcon" />
              <img src={docIcon} alt="docIcon" />
            </div>)
          }
          <img onClick={()=>setPopup(!popup)} src={pinIcon} alt='pinIcon'/> 
          <img src={sendIcon} alt="sendIcon" />
        </div>
    </div>
  )
}

export default Footer