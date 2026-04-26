import React from 'react'
import Left from './Left'
import  profile  from '../../assets/img/Profile.png'

const Hero = () => {
  return (
    <section className='mt-high md:mt-xl lg:text-left md:text-left text-center'>
        <div className='grid grid-cols-1 md:grid-cols-3  md:flex-row justify-between items-center gap-10'>
            <div className='col-span-2'>
                <Left />
            </div>
            <div className='flex justify-center col-span-1'>
                <img src={profile} alt="Wadood Senior" className='mt-10 rounded-full w-72 h-72 md:w-96 md:h-96  object-[50% 50%]' />
            </div>
        </div>
    </section>
    
  )
}

export default Hero
