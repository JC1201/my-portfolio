import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './components/nav/nav.jsx';
import {Intro} from  './components/intro/intro.jsx';
import {Skill} from  './components/skill/skill.jsx';
import {About} from  './components/about/about.jsx';
import {Experience} from  './components/experience/experience.jsx';
import { Project } from './components/project/project.jsx';
import {Contact} from  './components/contact/contact.jsx';
import {Backtotop} from  './components/backtotop/backtotop.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <section id="home">
      <Intro />
    </section>

    <section>
      <About />
    </section>

    <section id="skill">
      <Skill />
    </section>

    <section id="experience">
      <Experience />
    </section>

    <section id="project">
      <Project />
    </section>

    <section id="contact">
      <Contact />
    </section>

    <Backtotop/>
    
    
    </>

  )
}

export default App;
