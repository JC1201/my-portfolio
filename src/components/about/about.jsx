import './about.css';
import view1 from '../../assets/view_pic1.jpg';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PixelReveal } from "./pixelreveal.jsx";


export function About() {
  const [showPic, setShowPic] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="abouts">
      <h2>About Me</h2>

      <div className="about">
        <div className="about-card" onClick={() => setShowPic(!showPic)}>
          
          {/* ✅ Cover always exists, just fades */}
          <motion.div
            className="cover"
            animate={{ opacity: showPic ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4>Click to reveal my favorite picture !</h4>
          </motion.div>

          {/* ✅ Picture with enter/exit animation */}
          <AnimatePresence mode="wait">
            {showPic && (
              <motion.div
                key="pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="photo"
              >
                <PixelReveal src={view1} width={300} height={400} duration={2000}/>
              </motion.div>
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
