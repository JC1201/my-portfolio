import './intro.css';
import personalPic from '../assets/personal_pic.png';


export function Intro({title}) {

  

  return (
    
    <section className="intro">
      <div className="intro-image">
        <img src={personalPic} alt="Jieh Cheng" />
      </div>

      <div className = "intro-desc">
          
        <div className="intro-text">
          <h1>
            Hello, I'm <span>Jieh Cheng</span> 👋
          </h1>
          <p>
            I'm a passionate full-stack developer 
          </p>
          <a href="#contact" className="{active === 'contact' ? 'active' : ''}">
            Contact Me
          </a>
        </div>
        
      </div>

      <div className="about">
        <h2>About Me</h2>


        <div className="about-cards">
          <div className="about-card">
            <span className="icon">🏆</span>
            <h3>Experience</h3>
            <p>N/A</p>
            <small>Fullstack Development</small>
          </div>

        
          <div className="about-card">
            <span className="icon">🎓</span>
            <h3>Education</h3>
            <p>B.Sc. Bachelors Degree</p>
            <small>M.Sc. Masters Degree</small>
          </div>
        </div>

        <div className="about-content"> 
          <p>
            I am a full-stack developer with a passion for creating dynamic and
            responsive web applications. My journey in software development has
            equipped me with a diverse skill set, including expertise in Python,
            Java, and front-end technologies.
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