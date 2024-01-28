import React from 'react';
import { NavBar } from './components/NavBar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
