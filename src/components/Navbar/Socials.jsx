import { TbHomeFilled } from "react-icons/tb";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";

const Socials = () => {
  return (
    <div>
      <div className='flex items-center space-x-5 md:space-x-13 md:px-6 md:py-5 border rounded-2xl border-gray-800 px-4 py-4 font-bold w-full justify-center bg-black/70 backdrop-blur-md hover:scale-110
          transition-transform duration-300 ease-out'>
        <a href="" className='hover:scale-200 duration-500 ease-out'>
            <TbHomeFilled size={20} className=' mr-5'/> 
        </a>
        <a href="" className='hover:scale-200 duration-500 ease-out'>
            <FaGithub size={20} className='mr-5'/> 
        </a>
        <a href="" className='hover:scale-200 duration-500 ease-out'>
            <FaLinkedinIn size={20} className='mr-5'/> 
        </a>
        <a href="" className='hover:scale-200 duration-500 ease-out'>
            <FaXTwitter size={20} className='mr-5'/> 
        </a>
        <a href="" className='hover:scale-200 duration-500 ease-out'>
            <MdOutlineEmail size={20} className='mr-5'/> 
        </a>
        <a href="" className='hover:scale-200 duration-500 ease-out'>
            <CiBrightnessUp size={20} className='mr-2'/> 
        </a>
        </div>
    </div>
  )
}

export default Socials
