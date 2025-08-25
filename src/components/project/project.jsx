import { useState } from "react";
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
    image: bombsweeper,  // 👈 don't leave this as "" for now
    link: "https://github.com/yourname/weather-app"
  }
];

export function Project() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 100;

  const shortText =
    project.description.length > MAX_LENGTH
      ? project.description.slice(0, MAX_LENGTH) + "..."
      : project.description;

  return (
    <div className="project-card">
      {project.image && (
        <img src={project.image} alt={project.title} className="project-img" />
      )}
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>
          {expanded ? project.description : shortText}
          

          {project.description.length > MAX_LENGTH && (
            <>
            &nbsp;
            &nbsp;

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
    </div>
  );
}
