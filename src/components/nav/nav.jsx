import { useState } from 'react';
import './nav.css';

export function Nav() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false); // 👈 closes menu when clicking a link
  };

  return (
    <nav className="nav">
      {/* Logo hides when menu open */}
      {!menuOpen && (
        <div className="logo">
          <a href="#home">My Portfolio</a>
        </div>
      )}

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className={active === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleClick('home')}>Home</a>
        </li>
        <li className={active === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleClick('about')}>About</a>
        </li>
        <li className={active === 'experience' ? 'active' : ''}>
          <a href="#experience" onClick={() => handleClick('experience')}>Experience</a>
        </li>
        <li className={active === 'project' ? 'active' : ''}>
          <a href="#project" onClick={() => handleClick('project')}>Project</a>
        </li>
        <li className={active === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleClick('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
