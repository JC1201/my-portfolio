import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
// import { Nav } from './components/nav.jsx';
import { Navbar } from './components/nav.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';
import { Skill } from './components/skill.jsx';
import { Experience } from './components/experience.jsx';
import { Contact } from './components/contact.jsx';


export function App() {

  return (
    <>
      <Navbar />

      <Intro title="Welcome" />

      <Skill />

      <About />

      <Contact/>
    </>
  )
}
