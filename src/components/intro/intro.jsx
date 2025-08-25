import './intro.css';
import personalPic from '../../assets/personal_pic.png';
import { motion } from 'framer-motion';

export function Intro() {

  const introText = "I'm a passionate graduated Computer Science student from Malaysia 🇲🇾";

  return (
    <section className="intro">
      <div className='intro-content'>
        <div className="intro-image">
          <img src={personalPic} alt="Jieh Cheng" />
        </div>

        <div className="intro-desc">
          <div className="intro-text">
            <h1>
               Hello, I'm Jieh Cheng 👋

            </h1>             
            <p className="typing-text">
              {introText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </p>

            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
