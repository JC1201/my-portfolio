import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Nav } from './components/nav.jsx';
import { Intro } from './components/intro.jsx';
import { About } from './components/about.jsx';


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

    </>
  )
}
