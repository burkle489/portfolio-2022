import React, { useRef } from 'react';
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { handleScrollToComponent } from './helpers';

const App = () => {
  const projectsRef = useRef(null);


  return (
    <div className="Portfolio">
      <Navbar />
      <About toNextSection={handleScrollToComponent(projectsRef)} />
      <Projects innerRef={projectsRef} />
      <Contact />
    </div>
  );
}

export default App;
