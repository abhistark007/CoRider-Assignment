import React from 'react'
import Avatar from '@mui/material/Avatar';
import './ChatCart.css'
import { motion } from "framer-motion"
import kycIcon from '../assets/kycLogo.png';

function ChatCart({message,pic,self,isKycVerified}) {


  if(self===true){
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className='c1'
        >
           <div className='chartcart__right font-link'>
            <p>{message}</p>
           </div>
            <div className="avatar">
            <Avatar src={pic} />
            {isKycVerified && <img src={kycIcon} alt="kycIcon"/>}
            </div>
        </motion.div>
      )
  }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  viewport={{ once: true }}
    className='c2'
    >
        <div className="avatar">
        <Avatar src={pic} />
        {isKycVerified && <img src={kycIcon} alt="kycIcon"/>}
        </div>
        <div className='chartcart font-link'>
            <p>{message}</p>
        </div>
    </motion.div>
  )
}

export default ChatCart