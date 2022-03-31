import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Amazon Clone Challenge',
		github: 'https://github.com/KevinC555/Amazon-Clone',
		demo: 'https://kevinc555.github.io/Amazon-Clone/'
	  },
	  {
		id: 2,
		image: IMG2,
		title: 'React Calculator',
		github: 'https://github.com/KevinC555/React-Calculator',
		demo: 'https://kevinc555.github.io/React-Calculator/'
	  },
	  {
		id: 3,
		image: IMG3,
		title: 'Todo List Application',
		github: 'https://github.com/KevinC555/react-todo-app',
		demo: 'https://kevinc555.github.io/react-todo-app/'
	  }
];

const Portfolio = () => {
  return (
	  <section id="portfolio">
		  <h5>Recent Work</h5>
		  <h2>Portfolio</h2>

		  <div className="container portfolio__container">
			  {
				  data.map(({id, image, title, github, demo}) => {
					  return (
						<article key={id} className="portfolio__item">
						<div className="portfolio__item-image">
						<img src={image} alt={title} />
						</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn" target="_blank">GitHub</a>
								<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
							</div>
					  </article>
					  )
				  })
			  }
		  </div>
	  </section>
  )
};

export default Portfolio;
