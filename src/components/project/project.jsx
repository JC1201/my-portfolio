import { useState } from "react";
import { motion } from "framer-motion";
import "./project.css";
import bombsweeper from '../../assets/bombsweeper.png';
import TYP from '../../assets/TYP-Intelligent-Edge-Caching-Using-Federated-Learning-to-Predict-Content-Popularity.png';

const projects = [
  {
    title: "Bomb Sweeper",
    description: "Bomb Sweeper game built with Java, Jframe, and JSwing.",
    image: bombsweeper,
    link: "https://github.com/JC1201/Bomb-Sweeper"
  },
  {
    title: "Intelligent Edge Caching Using Federated Learning to Predict Content Popularity",
    description: "Implemented a Transposed Convolutional Neural Network to predict content popularity and integrated with Intelligent Edge Caching to improve user experiece and cache hit",
    image: TYP,
    link: "https://github.com/JC1201/Intelligent-Edge-Caching-Using-Federated-Learning-to-Predict-Content-Popularity"
  },
  {
    title: "Todo App",
    description: "A simple and elegant todo list with local storage and animations.",
    image: bombsweeper,
    link: "https://github.com/yourname/todo-app"
  },
  {
    title: "Weather App",
    description: "Fetches live weather data using OpenWeather API.",
    image: bombsweeper,
    link: "https://github.com/yourname/weather-app"
  }
];

const isMobile = window.innerWidth <= 600;


export function Project() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 100;

  const shortText =
    project.description.length > MAX_LENGTH
      ? project.description.slice(0, MAX_LENGTH) + "..."
      : project.description;

  return (
    <motion.div
      className="project-card"
      initial={{ x: isMobile ? -10 : -50, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "backIn",
        delay: index * 0.1
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
        transition: { duration: 0.1, ease: "easeOut" }
      }}
    >
      {project.image && (
        <img src={project.image} alt={project.title} className="project-img" />
      )}
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>
          {expanded ? project.description : shortText}
          {project.description.length > MAX_LENGTH && (
            <>
              &nbsp;&nbsp;
              <button
                className="read-more-btn"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            </>
          )}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
}
