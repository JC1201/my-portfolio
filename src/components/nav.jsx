import { useState } from 'react';
import './nav.css';

export function Nav() {

  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <nav className="nav">

       {!menuOpen && (
        <div className="logo">
          <a href="#name">My Portfolio</a>
        </div>
      )}
      
      {!menuOpen && (
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      )}
      
      {/* <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div> */}


      <ul className={menuOpen ? 'active' : ''}>
        {menuOpen && (
          <li className="close-btn" onClick={() => setMenuOpen(false)}>✖</li>
        )}
        <li className={active === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => setActive('home')}>Home</a>
        </li>
        <li className={active === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => setActive('about')}>About</a>
        </li>
        <li className={active === 'experience' ? 'active' : ''}>
          <a href="#experience" onClick={() => setActive('experience')}>Experience</a>
        </li>
        <li className={active === 'project' ? 'active' : ''}>
          <a href="#project" onClick={() => setActive('project')}>Project</a>
        </li>
        <li className={active === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => setActive('contact')}>Contact</a>
        </li>
      </ul>
    

    </nav>
  );
}