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
import { motion } from "framer-motion";

function SocialIcons() {
  const socials = [
    { icon: <FaWhatsapp />, link: "https://wa.me/2348107095871?text=Hi%20Wadood%20Senior,%20I%20am%20interested%20in%20working%20with%20you" },
    { icon: <FaXTwitter />, link: "https://x.com/Wadwrld" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/wadood-senior/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com//profile.php?id=100076966755835" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/millennium.studios?igsh=MThldjJubm5lcmxtYw==" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com/@millenniumagency.shopify?_r=1&_d=f1kk9k0631876f&sec_uid=MS4wLjABAAAAk7c5gcDexcxaEygEBH3fO4fryTrGqzA9GutYsrAlf6fgRbPvlumU-gSuq-PtB_Fn&share_author_id=7301367602541659142&sharer_language=en&source=h5_m&u_code=eb3mfafi3884md&timestamp=1777221564&user_id=7301367602541659142&sec_user_id=MS4wLjABAAAAk7c5gcDexcxaEygEBH3fO4fryTrGqzA9GutYsrAlf6fgRbPvlumU-gSuq-PtB_Fn&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7602364292054189840&share_link_id=558fbd02-26ad-48cd-a075-bf6b87e6bdf0&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" },
  ];

  return (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-6 mt-3">
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
    </motion.div>
  );
}

export default SocialIcons;