import './about.css';
import view1 from '../../assets/view_pic1.jpg';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PixelReveal } from "./pixelreveal.jsx";
import Animatedcontent from "./Animatedcontent.jsx"; // 👈 your scroll animation wrapper

// function highlightText(text, highlights) {
//   return text.split(" ").map((word, i) => {
//     const cleanWord = word.replace(/[.,!]/g, ""); // remove punctuation for matching
//     if (highlights.includes(cleanWord)) {
//       return <ShinyText key={i}>{word} </ShinyText>;
//     }
//     return word + " ";
//   });
// }

export function About() {
  const [showPic, setShowPic] = useState(false);

  return (
    <section id="about" className="abouts">
      <h2>About Me</h2>

      <div className="about">

        {/* 👈 Left column slides in from LEFT */}
        <Animatedcontent direction="horizontal" reverse distance={100} delay={0.6}>
          <div className="about-card" onClick={() => setShowPic(!showPic)}>
            {/* Cover always exists */}
            <motion.div
              className="cover"
              animate={{ opacity: showPic ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4>Click to reveal my favorite picture!</h4>
            </motion.div>

            {/* Picture animation */}
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
                  <PixelReveal
                    src={view1}
                    width={300}
                    height={400}
                    duration={2000}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Animatedcontent>

        {/* 👈 Right column slides in from RIGHT */}
        <Animatedcontent direction="horizontal" distance={100} delay={0.6}>
          <div className="about-content">
            <p>
              I am a recent Computer Science graduate with a strong foundation in
              programming and web technologies, aspiring to grow into a skilled
              full-stack developer. While I may lack extensive industry
              experience, I bring enthusiasm, adaptability, and a strong
              willingness to learn.
            </p>
            <p>
              I thrive on challenges and enjoy learning new technologies to
              enhance my projects. My goal is to build software that not only
              meets user needs but also provides an exceptional user experience.
            </p>
            <p>
              When I'm not coding, I love exploring new tech trends, contributing
              to open-source projects, and sharing knowledge with the developer
              community.
            </p>
          </div>
        </Animatedcontent>

      </div>
    </section>
  );
}
