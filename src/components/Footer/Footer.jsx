import React from 'react'
import FooterBrand from "../Footer/FooterBrand";
import FooterLinks from "../Footer/FooterLinks";
import SocialIcons from "../Footer/SocialIcons";
import Copyright from "../Footer/Copyright";
import  Connect  from '../Footer/Connect';

function Footer() {
  return (
    <div className=" border-t border-white/30 mt-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10 justify-center">
        
        <div>
          <FooterBrand />
          
        </div>

        <FooterLinks />
        <Connect />
        <SocialIcons />
      </div>

      <Copyright />
    </div>
  );
}

export default Footer;