import { motion } from "framer-motion";
import "./experience.css";

export function Experience() {
  const experiences = [
    { year: "2016 - 2020", title: "Chong Hwa Independent High School", desc: "High School Diploma" },
    { year: "2018 - 2020", title: "Foundation in Science", desc: "" },
    { year: "2020 - 2023", title: "Bachelor's Degree in Computer Science", desc: "" },
    { year: "2023 - Present", title: "Master's Degree in AI", desc: "" },
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
          <h3>{item.year}</h3>
          <p>{item.title}</p>
          {item.desc && <p>{item.desc}</p>}
        </motion.div>
      ))}
    </section>
  );
}
