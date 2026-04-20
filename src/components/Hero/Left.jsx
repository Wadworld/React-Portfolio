
import Button from '../../utitlity/Buttons/Button'
import BtnArrow from '../../utitlity/Buttons/BtnArrow'
import { FaArrowRight } from "react-icons/fa6";

const Left = () => {
  return (
    <section>
      <div>
        <p className="inline-flex items-center gap-2 mb-5">
            <span className="bg-green-500 rounded-full  w-3 h-3 animate-pulse"></span>
            <span className='text-xl text-green-500'>Available for work</span>
        </p>
        <h2 className='text-3xl md:text-6xl font-semibold mt-4'>I'm Wadood Senior <br /> I design <span className='font-bold hover:underline '>eCommerce</span> websites, Shopify stores and email systems that drive sales.
        </h2>
        <p className='mt-10 text-gray-300 text-lg'>Frontend Web Developer who builds mobile responsive websites, design high converting Shopify stores, and create Email and SMS marketing strategies that help brands grow and their customers.</p>
        <div className="inline-flex items-center gap-3 mt-15">
            <Button size="sm">View Projects</Button>
            <BtnArrow size="sm">
                Contact Me
                <FaArrowRight className='ml-1 text-xl font-bold'/>
            </BtnArrow>
            
        </div>
      </div>
    </section>
  )
}

export default Left
