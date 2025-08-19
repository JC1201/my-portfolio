import './skill.css';
import pythonIcon from '../../assets/icons8-python.svg';
import htmlIcon from '../../assets/icons8-html.svg';
import cssIcon from '../../assets/icons8-css.svg';
import javascriptIcon from '../../assets/icons8-javascript.svg';   
import javaIcon from '../../assets/icons8-java.svg';
import reactIcon from '../../assets/icons8-react.svg';
import tensorflowIcon from '../../assets/icons8-tensorflow.svg';    



export function Skill() {

  return (

    <section className="skills">
        <h2>
            Tech Stack
            <span class="info-icon" title="Hover over skills to see my level">ℹ️</span>

        </h2>
        <div className="skill-list">
        <div className="skill">
            <img src={pythonIcon} alt="python"/>
            {/* <span>Python</span> */}
            <span className="level">Advanced</span>
        </div>
        <div className="skill">
            <img src={javaIcon} alt="java" />
            {/* <span>Java</span> */}
            <span className="level">Advanced</span>
        </div>
        <div className="skill">
            <img src={htmlIcon} alt="html" />
            {/* <span>HTML</span> */}
            <span className="level">Intermediate</span>
        </div>  
        <div className="skill">
            <img src={cssIcon} alt="css" />
            {/* <span>CSS</span> */}
            <span className="level">Intermediate</span>
        </div>
        <div className="skill">
            <img src={javascriptIcon} alt="javascript" />
            {/* <span>JavaScript</span> */}
            <span className="level">Intermediate</span>
        </div>
        <div className="skill">
            <img src={tensorflowIcon} alt="tensorflow" />
            {/* <span>TensorFlow</span> */}
            <span className="level">Intermediate</span>
        </div>
        <div className="skill">
            <img src={reactIcon} alt="react" />
            {/* <span>React</span> */}
            <span className="level">Beginner</span>
        </div>
        </div>
    </section>


  );

}