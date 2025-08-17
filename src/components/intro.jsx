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
            I'm a passionate graduated Computer Science student from Malaysia 🇲🇾
          </p>
          <a href="#contact" className="{active === 'contact' ? 'active' : ''}">
            Contact Me
          </a>
        </div>
        
      </div>

    </section>
  );
}