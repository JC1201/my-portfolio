import './about.css';
import view1 from '../assets/view_pic1.jpg';


export function About() {

  
  return (

    <section className="intro">
        <div className="about">
            <h2>About Me</h2>

            <div className="about-cards">

            <div className="about-card">
                <img src={view1} alt="view" />
            </div>
            
            {/* <div className="about-card">
                <span className="icon">🏆</span>
                <h3>Experience</h3>
                <p>N/A</p>
                <small>Fullstack Development</small>
            </div> */}

            
            {/* <div className="about-card">
                <span className="icon">🎓</span>
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree</p>
            </div> */}
            
            </div>

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