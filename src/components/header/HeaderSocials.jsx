import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaFacebookMessenger} from "react-icons/fa";

const HeaderSocials = () => {
  return(
	  <div className="header__socials">
		  <a href="https://www.linkedin.com/in/kevin-corcoran-5068ba218/" target="_blank"><BsLinkedin/></a>
		  <a href="https://github.com/KevinC555" target="_blank"><FaGithub/></a>
		  <a href="https://www.messenger.com/t/100001552817265/" target="_blank"><FaFacebookMessenger/></a>
	  </div>
  )
};

export default HeaderSocials;
