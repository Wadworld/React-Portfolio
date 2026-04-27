import { TbHomeFilled } from "react-icons/tb";
import { FaGithub, FaLinkedinIn, FaWhatsapp, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div>
      <div className='flex items-center space-x-5 md:space-x-13 md:px-6 md:py-5 border rounded-2xl border-gray-800 px-4 py-4 font-bold w-full justify-center bg-black/70 backdrop-blur-md hover:scale-110
          transition-transform duration-300 ease-out'>
        <Link to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='hover:scale-200 duration-500 ease-out'>
            <TbHomeFilled size={20} className=' mr-5 ml-1'/> 
        </Link>
        <a 
        href="https://github.com/Wadworld" 
        target="_blank"        rel="noopener noreferrer"
        className='hover:scale-200 duration-500 ease-out'>
            <FaGithub size={20} className='mr-5'/> 
        </a>
        <a href="https://www.linkedin.com/in/wadood-senior/" target="_blank" rel="noopener noreferrer" className='hover:scale-200 duration-500 ease-out'>
            <FaLinkedinIn size={20} className='mr-5'/> 
        </a>
        <a href="https://x.com/Wadwrld" target="_blank" rel="noopener noreferrer" className='hover:scale-200 duration-500 ease-out'>
            <FaXTwitter size={20} className='mr-5'/> 
        </a>
        <a href="mailto:wadoodsenioradedimeji@email.com?subject=Project%20Inquiry&body=Hi,%20I’d%20like%20to%20work%20with%20you%20on..." title="Send me an email" className='hover:scale-200 duration-500 ease-out'>
            <MdOutlineEmail size={20} className='mr-5'/> 
        </a>
        <a href="https://wa.me/2348107095871?text=Hi%20I%20want%20to%20work%20with%20you" className='hover:scale-200 duration-500 ease-out'>
            <FaWhatsapp size={20} className='mr-1'/> 
        </a>
        </div>
    </div>
  )
}

export default Socials
