import { motion } from "framer-motion";
import "./experience.css";
import lancsunilogo from '../../assets/lancsunilogo.svg';
import lancomelogo from '../../assets/lancomelogo.jpg';
import powerhouselogo from '../../assets/powerhouselogo.png';



export function Experience() {
  const experiences = [
    { 
      year: "Jan 2023  -  Feb 2023", 
      title: "Lancome", 
      desc: "Event Crew", 
      icon: lancomelogo
    },
    { 
      year: "Oct 2023 - Jul 2025", 
      title: "Lancaster University", 
      desc: "Bachelor's Degree in Computer Science", 
      icon: lancsunilogo
    },
    { 
      year: "June 2024 - Aug 2024", 
      title: "Power House Marketing ", 
      desc: "Junior Database Administrator", 
      icon: powerhouselogo
    },
    { 
      year: "June 2025 - Oct 2025", 
      title: "Lancaster University", 
      desc: "Conference Assistant", 
      icon: lancsunilogo
    },
  ];

  return (
    <section className="timeline">
      <h2>Experience</h2>
      {experiences.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <div className="timeline-header">
            {item.icon && (
              <img src={item.icon} alt={item.title} className="timeline-icon" />
            )}
          </div>

          <h3>{item.year}</h3>
          <p>{item.title}</p>
          {item.desc && <p>{item.desc}</p>}
        </motion.div>
      ))}
    </section>
  );
}
