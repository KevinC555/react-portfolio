import React from "react";
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {FaFacebookMessenger} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_65wkmft', 'template_9z6vo03', form.current, 'oJ_Sldn2UtaYyjqZu')
    
	e.target.reset();
  };

  return (
	  <section id="contact">
		  <h5>Get In Touch</h5>
		  <h2>Contact Me</h2>

		  <div className="container contact__container">
			  <div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon"/>
						<h4>Email</h4>
						<h5>kaseycorcoran95@gmail.com</h5>
						<a href="mailto:kaseycorcoran95@gmail.com">Send a message</a>
					</article>
					<article className="contact__option">
						<h4>Messenger</h4>
						<h5>Kevin Corcoran</h5>
						<a href="https://www.messenger.com/t/100001552817265/" target="_blank"><FaFacebookMessenger className="contact__option-icon"/></a>
					</article>
					<article className="contact__option">
						<h4>LinkedIn</h4>
						<h5>Come check me out on LinekdIn</h5>
						<a href="https://www.linkedin.com/in/kevin-corcoran-5068ba218/" target="_blank"><BsLinkedin className="contact__option-icon"/></a>
					</article>
			  </div>
			  <form ref={form} onSubmit={sendEmail}>
				  <input type="text" name="name" placeholder="Your Full Name" required/>
				  <input type="email" name="email" placeholder="Your Email" required/>
				  <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
				  <button type="submit" className="btn btn-primary">Send Message</button>
			  </form>
		  </div>
	  </section>
  )
};

export default Contact;
