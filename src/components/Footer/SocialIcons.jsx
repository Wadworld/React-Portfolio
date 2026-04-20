import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function SocialIcons() {
  const socials = [
    { icon: <FaWhatsapp />, link: "#" },
    { icon: <FaGithub />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
    { icon: <HiOutlineMail />, link: "mailto:your@email.com" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 mt-3">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition duration-300 transform hover:scale-110"
        >
          <span className="text-2xl">
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;