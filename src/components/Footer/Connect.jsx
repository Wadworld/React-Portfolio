import React from 'react'
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <div className='flex justify-center py-3'>
      <motion.h2 
        className='text-3xl font-bold'
        animate={{ y: [0, -10, 0] }}
        transition={{
        duration: 2.0,
        ease: "easeInOut",
        repeat: Infinity,
        }}
        >
            Connect With Me
        </motion.h2>
    </div>
  )
}

export default Connect
