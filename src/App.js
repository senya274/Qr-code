
import { Route, NavLink, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import QRCode from 'react-qr-code';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Generate from './components/Generate/Generate';



function App() {

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (boolean) => {
    setDarkMode(!isDarkMode);
  };



  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='nav'>
        <Navbar />
        <DarkModeSwitch
          className="mode_switcher"
          style={{ marginBottom: '2rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={120}
        />
      </div>
      <Routes>
        <Route exact path="/" Component={About} />
        <Route path="/information" Component={Info} />
        <Route path="/GenerateQR" Component={Generate} />
      </Routes>
 
    </div>
  );
}

export default App;
