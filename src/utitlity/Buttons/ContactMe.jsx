import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div className='flex items-center border rounded-lg border-gray-700 px-6 py-3 w-48 font-bold hover:bg-white hover:text-black cursor-pointer duration-300'>
      <a href="" className='text-lg'>
        Contact Me 
    </a>
    <FaArrowRight className='ml-3 text-xl font-bold'/>
    </div>
  )
}

export default ContactMe
