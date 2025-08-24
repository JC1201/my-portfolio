import { useState } from 'react'
import './App.css'
import { Nav } from './components/nav/nav.jsx';
import {Intro} from  './components/intro/intro.jsx';
import {Skill} from  './components/skill/skill.jsx';
import {About} from  './components/about/about.jsx';
import {Experience} from  './components/experience/experience.jsx';
import { Project } from './components/project/project.jsx';
import {Contact} from  './components/contact/contact.jsx';
import {Backtotop} from  './components/backtotop/backtotop.jsx';
import {Sidebar} from  './components/sidebar/sidebar.jsx';



function App() {

  return (
    <>

    <Nav/>

    <section id="home">
      <Intro />
    </section>
    
    <section id="skill">
      <Skill />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="experience">
      <Experience />
    </section>

    <section id="project">
      <Project />

    </section>

    <Sidebar/>

    <section id="contact">
      <Contact/>
    </section>

    <Backtotop/>

    
    </>

  )
}

export default App;
