import React from 'react'
import Avatar from '@mui/material/Avatar';
import './ChatCart.css'
import { motion } from "framer-motion"

function ChatCart({message,pic,self}) {


  if(self===true){
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className='chartcart__right'>
            <p>{message}</p>
            <Avatar src={pic} />
        </motion.div>
      )
  }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  viewport={{ once: true }}
    className='chartcart'>
        <Avatar src={pic} />
        <p>{message}</p>
    </motion.div>
  )
}

export default ChatCart