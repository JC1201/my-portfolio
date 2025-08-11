import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Nav } from './components/nav.jsx';
import { Intro } from './components/intro.jsx';
import { Skill } from './components/skill.jsx';


export function App() {

  return (
    <>
      <div className='navbar'>
        <Nav />
      </div>
      
      <div>
      <div className='intro'>
        <Intro title={useState}/>
      </div>

      <div className='skill'>
        <Skill />
      </div>
      </div> 

    </>
  )
}
