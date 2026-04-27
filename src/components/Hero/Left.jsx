
import Button from '../../utitlity/Buttons/Button'
import BtnArrow from '../../utitlity/Buttons/BtnArrow'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Left = () => {
  
  return (
    <section>
      <div className='flex flex-col justify-center items-center md:items-start'>
        <p className="inline-flex items-center gap-2 mb-5">
            <span className="bg-green-500 rounded-full  w-3 h-3 animate-pulse"></span>
            <span className='text-xl text-green-500'>Available for new projects</span>
        </p>
        <h2 className='text-3xl md:text-3xl font-semibold mt-4'>I'm Wadood Senior <br /> I design <span className='font-bold hover:underline '>eCommerce</span> websites, Shopify stores and email systems that drive sales.
        </h2>
        <motion.p 
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className='mt-10 text-gray-300 text-lg md:text-lg'>I help eCommerce brands grow by building clean, conversion-focused websites and automated email systems that increase sales and customer retention.</motion.p>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}  
          className="inline-flex items-center gap-3 mt-15">
            <Link to="/#projects">
            <Button size="sm">View My Work</Button>
            </Link>
            <Link to="/#contact">
            <BtnArrow size="sm">
                Start a Project
                <FaArrowRight className='ml-1 text-xl font-bold'/>
            </BtnArrow>
            </Link>
            
        </motion.div>
      </div>
    </section>
  )
}

export default Left
