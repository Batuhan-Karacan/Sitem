import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode durumunu localStorage'da saklayalım
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
    
      <button onClick={toggleDarkMode}>
        
      </button>
    </div>
  );
};

export default DarkModeToggle;