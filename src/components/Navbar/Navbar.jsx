import React from 'react'
import ContactMe from '../../utitlity/Buttons/ContactMe'
import Socials from './Socials'
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  return (
    <motion.main 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed top-2 left-0 w-full z-50 px-4 py-4 '>
    <div className='flex items-center xl:justify-between  sm:items-center justify-center mx-0 px-0 '>
        <div className='hidden md:hidden lg:block'>
            <h1 className='text-3xl font-bold'>WADWRLD</h1>
        </div>
        <div className='items-center'> 
            <Socials />
        </div>
        <div className='hidden md:hidden lg:block'>
            <ContactMe />
        </div>
    </div>
    </motion.main>
  )
}

export default Navbar
