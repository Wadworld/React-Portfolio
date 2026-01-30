import React from 'react'
import ContactMe from '../../utitlity/Buttons/ContactMe'
import Socials from './Socials'


const Navbar = () => {
  return (
    <main className='fixed top-2 left-0 w-full z-50 px-4 py-4 '>
    <div className='flex items-center xl:justify-between md:justify-between sm:items-center justify-center mx-0 px-0 '>
        <div className='hidden md:block'>
            <h1 className='text-3xl font-bold'>WADWRLD</h1>
        </div>
        <div className='items-center'> 
            <Socials />
        </div>
        <div className='hidden md:block'>
            <ContactMe />
        </div>
    </div>
    </main>
  )
}

export default Navbar
