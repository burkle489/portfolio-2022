import React from 'react';
import './App.css';
import { About } from './components/About/About';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="Portfolio">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
