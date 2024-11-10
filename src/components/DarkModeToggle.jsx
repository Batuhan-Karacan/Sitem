import React, { useState, useEffect } from 'react';


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
    
      <button className='darkmodeButton' onClick={toggleDarkMode}>
        DARKMODE
      </button>
    </div>
  );
};

export default DarkModeToggle;