import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Nav } from './components/nav.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';
import { Skill } from './components/skill.jsx';
import { Experience } from './components/experience.jsx';
import { Contact } from './components/contact.jsx';


export function App() {

  return (
    <>
      <div className='navbar'>
        <Nav />
      </div>
      
      <div className='intro'>
        <Intro title={useState}/>
      </div>

      <div className='about'>
        <About />
      </div>

      <div className='skill'>
        <Skill />
      </div>

      <div  className='education'>
        <Experience />
      </div>

      <div className='contact'>
        <Contact />
      </div>

    </>
  )
}
