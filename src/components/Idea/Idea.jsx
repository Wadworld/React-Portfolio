import React from 'react'
import Button from '../../utitlity/Buttons/Button'
import BtnArrow from '../../utitlity/Buttons/BtnArrow'
import { FaArrowRight } from "react-icons/fa6";
import Bg from '../../assets/img/Idea.jpg'


const Idea = () => {
  return (
    <section className='bg-cover bg-center py-10 px-5 lg:px-20 rounded-2xl text-white my-20' style={{ backgroundImage: `url(${Bg})` }}>
      <div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold py-4'>Ready to Bring Your Ideas to Life?</h2>
        <p className='text-lg font-medium my-3 lg:px-60 md:text-center'>Let's collaborate and create something amazing together. Whether it's a web application, mobile app, or Shopify Store project. I'm here to help turn your vision into reality.</p>
        <div className='flex flex-col md:flex-row md:justify-center items-center md:gap-1 gap-3 m-4'>
            <a href="#contact" className='inline-flex items-center bg-white hover:scale-105 text-black md:text-2xl py-3 px-5 rounded-lg mr-4 transition'>
                Get In Touch
                <FaArrowRight className='ml-1 text-xl '/>
            </a>
            <a href="#projects" className='inline-flex items-center bg-transparent hover:bg-gray-800 hover:scale-105 text-lg font-semibold text-white py-2.5 px-5 rounded-lg border border-[2px] border-amber-50 md:text-2xl transition'>
                View My Work
            </a>
        </div>
      </div>
    </section>
  )
}

export default Idea
