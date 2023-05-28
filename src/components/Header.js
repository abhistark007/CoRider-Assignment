import React from 'react'
import './Header.css'
import editIcon from '../assets/editIcon.png';
import backIcon from '../assets/backIcon.png';
import dotIcon from '../assets/dotIcon.png';
import Avatar from '@mui/material/Avatar';


function Header({to,from,title}) {
  return (
    <div className='header'>
        <div className="header__top">
            <div className="header__top__left">
                <img src={backIcon} alt='backicon'/>
                <p>{title}</p>
            </div>

            <img src={editIcon} alt='editIcon'/>
        </div>


        <div className="header__bottom">
            <div className="header__bottom__left">
                <Avatar />
                <div className="header__bottom__info">
                    <p>From <span>{from}</span></p>
                    <p>To <span>{to}</span></p>
                </div>
            </div>


            <div className="header__bottom__right">
                <img src={dotIcon} alt='dotIcon'/>
            </div>
        </div>
    </div>
  )
}

export default Header