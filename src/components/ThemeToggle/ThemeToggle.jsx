import React from 'react';
import './ThemeToggle.css'
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button 
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        background: isDarkMode ? '#61dafb' : '#2667cc',
        color: isDarkMode ? '#0b1a2b' : 'white'
      }}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

export default ThemeToggle;