import instagram from '../../assets/icons8-instagram.svg';    
import linkedin from '../../assets/icons8-linkedin.svg';   
import email from '../../assets/icons8-email.png';   
import "./sidebar.css"


export function Sidebar() {
  return (
    <div className="sidebar">
      <a
        href="https://www.instagram.com/jc_liew_/"
        target="_blank"
        rel="instagram"
        className="instagram"
      >
        <img src={instagram} alt="instagram" />
      </a>

      <a
        href="https://www.linkedin.com/in/liew-jieh-cheng-/"
        target="_blank"
        rel="linkedin"
        className="linkedin"
      >
        <img src={linkedin} alt="linkedin" />
      </a>

      <a
        href="mailto:jiehchengliew@gmail.com"
        // className="email"
      >
        
        <img className="email" src={email} alt="email"  />

      </a>
    </div>
  );
}
