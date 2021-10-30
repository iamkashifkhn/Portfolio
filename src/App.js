import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Route, Switch } from 'react-router';
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Work/Skills'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About'
import './app.scss'

const App =()=>{
  return(
    <div className="app">
      <Navbar/>
      <div className="section">
          <Hero/>
          <About/>
          <Skills/> 
          <Portfolio/>
          <Contact/>
      </div>
    </div>
  )
}
export default App;