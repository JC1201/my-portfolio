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
          {/* <p>
            with a love for building clean,
            modern web applications. Skilled in Python, Java, and front-end
            development 
          </p> */}
          {/* <p>
            I’m currently exploring opportunities to create impactful
            software solutions.
          </p> */}
          <a href="#contact" className="intro-button">
            Contact Me
          </a>
        </div>
        
      </div>

    </section>
  );
}