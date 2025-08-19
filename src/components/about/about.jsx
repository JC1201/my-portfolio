import './about.css';
import view1 from '../../assets/view_pic1.jpg';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function About() {
  const [showPic, setShowPic] = useState(false);

  return (
    <section className="abouts">
        <h2>About Me</h2>

      <div className="about">

        {/* Clickable photo card */}
        <div className="about-card" onClick={() => setShowPic(!showPic)}>
          {/* Always visible description overlay */}
          <div className="cover">
            <h4>{showPic ? "" : "Click to reveal my favorite picture !"}</h4>
            {/* <p>Click the image to reveal me!</p> */}
          </div>

          {/* Animate picture */}
          <AnimatePresence>
            {showPic && (
              <motion.img
                key="photo"
                src={view1}
                alt="view"
                className="photo"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* About content */}
        <div className="about-content"> 
          <p>
            I am a recent Computer Science graduate with a strong foundation in programming and web technologies, 
            aspiring to grow into a skilled full-stack developer. While I may lack extensive industry experience, 
            I bring enthusiasm, adaptability, and a strong willingness to learn. 
            I am eager to apply my academic knowledge in real-world projects, continuously improve my technical skills, 
            and contribute to a collaborative development team. 
            Currently seeking job opportunities where I can gain hands-on experience, 
            learn from experienced professionals, and make a meaningful impact.
          </p>
          <p>
            I thrive on challenges and enjoy learning new technologies to enhance
            my projects. My goal is to build software that not only meets user
            needs but also provides an exceptional user experience.
          </p>
          <p>
            When I'm not coding, I love exploring new tech trends, contributing to
            open-source projects, and sharing knowledge with the developer
            community.
          </p>
        </div>
      </div>
    </section>
  );
}
