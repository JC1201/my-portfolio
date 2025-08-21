import { motion } from "framer-motion";
import "./project.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, Vite, and Framer Motion.",
    image: "/assets/project1.png",
    link: "https://github.com/yourname/portfolio"
  },
  {
    title: "Todo App",
    description: "A simple and elegant todo list with local storage and animations.",
    image: "/assets/project2.png",
    link: "https://github.com/yourname/todo-app"
  },
  {
    title: "Weather App",
    description: "Fetches live weather data using OpenWeather API.",
    image: "/assets/project3.png",
    link: "https://github.com/yourname/weather-app"
  }
];



export function Project() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ 
                x: -500, 
                opacity: 0, 
                scale: 0.8,
                rotate: -2,  
            }}   // start offscreen left
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{ once: true }}

            transition={{
              duration: 0.5,
              ease: "backIn",
              delay: i * 0.08, // staggered
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              transition: { duration: 0.1, ease: "easeOut" } // 👈 quick & snappy
            }}
            animate={{ x: -500, opacity: 1 }}      
          >
            <img src={p.image} alt={p.title} className="project-img" />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
