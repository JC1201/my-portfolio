import './skill.css';
import pythonIcon from '../assets/icons8-python.svg';
import htmlIcon from '../assets/icons8-html.svg';
import cssIcon from '../assets/icons8-css.svg';
import javascriptIcon from '../assets/icons8-javascript.svg';   
import javaIcon from '../assets/icons8-java.svg';
import reactIcon from '../assets/icons8-react.svg';
import tensorflowIcon from '../assets/icons8-tensorflow.svg';    



export function Skill() {

  return (

    <section class="skills">
        <h2>Skills</h2>
        <div className="skill-list">
        <div class="skill">
            <img src={pythonIcon} alt="python"/>
            <span>Python</span>
            <span class="level">Advanced</span>
        </div>
        <div class="skill">
            <img src={javaIcon} alt="java" />
            <span>Java</span>
            <span class="level">Advacned</span>
        </div>
        <div class="skill">
            <img src={htmlIcon} alt="html" />
            <span>HTML</span>
            <span class="level">Intermediate</span>
        </div>  
        <div class="skill">
            <img src={cssIcon} alt="css" />
            <span>CSS</span>
            <span class="level">Intermediate</span>
        </div>
        <div class="skill">
            <img src={javascriptIcon} alt="javascript" />
            <span>JavaScript</span>
            <span class="level">Intermediate</span>
        </div>
        <div class="skill">
            <img src={tensorflowIcon} alt="tensorflow" />
            <span>TensorFlow</span>
            <span class="level">Intermediate</span>
        </div>
        <div class="skill">
            <img src={reactIcon} alt="react" />
            <span>React</span>
            <span class="level">Beginner</span>
        </div>
        </div>
    </section>


  );

}