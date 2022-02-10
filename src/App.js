
import React from "react";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { Element } from 'react-scroll';
import './App.css';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar/>
      <Element  id='example-about' name='example-about'>
        <About/>
      </Element>
      <Element  id='example-projects' name='example-projects'>
        <Projects/>
      </Element>

      <Element  id='example-projects' name='example-skills'>
        <Skills/>
      </Element>
      <Element  id='example-contact' name='example-contact'>
        <Contact/>
      </Element>       
    </main>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
