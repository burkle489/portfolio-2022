import React, { useRef } from 'react';
import './App.css';
import { About } from './components/About/About';
import { ChangeMe } from './components/Navbar/models';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleNextSection = (sectionRef: ChangeMe) => () => {
    sectionRef.current.scrollIntoView();
  }
  return (
    <div className="Portfolio">
      <Navbar />
      <About innerRef={aboutRef} toNextSection={handleNextSection(projectsRef)} />
      <Projects innerRef={projectsRef} />
    </div>
  );
}

export default App;
