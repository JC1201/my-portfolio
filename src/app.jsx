import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Nav } from './components/nav.jsx';
import { Intro } from './components/intro.jsx';

export function App() {

  return (
    <>
      <div>
        <Nav />
      </div>
      
      <div>
        <Intro />
      </div>

    </>
  )
}
