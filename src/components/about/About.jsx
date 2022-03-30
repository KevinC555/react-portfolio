import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
	  <section id="about">
		  <h5>Get To Know</h5>
		  <h2>About Me</h2>

		  <div className="container about__container">
			  <div className="about__me">
				<div className="about__me-image">
					<img src={ME} alt="About Me" />
				</div>
			  </div>

			  <div className="about__content">
				<div className="about__cards">
					<article className="about__card">
						<FaAward className="about__icon"/>
						<h5>Experience</h5>
						<small>2+ Years</small>
					</article>

					<article className="about__card">
						<FiUsers className="about__icon"/>
						<h5>Clients</h5>
						<small>2+</small>
					</article>

					<article className="about__card">
						<VscFolderLibrary className="about__icon"/>
						<h5>Projects</h5>
						<small>10+</small>
					</article>
					</div>

					<p>Throughout my time as a front-end Web Developer, I have been working on personal projects and a couple client-based websites. I am continuing projects based on react interfaces and expanding my work to more clients.</p>

					<a href="#contact" className="btn btn-primary">Let's Chat</a>
				</div>
			  </div>
	  </section>
  )
};

export default About;
