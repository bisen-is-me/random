import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CardSlider from './components/Slider';
import img1 from './components/imgs/img1.jpg';
import img2 from './components/imgs/img2.jpg';
import img3 from './components/imgs/img3.jpg';
import img4 from './components/imgs/img4.jpg';
import img5 from './components/imgs/img5.jpg';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const images = [img1, img2, img3, img4, img5];
  const items = [
    'HOME',
    'ELECTRONICS',
    'BOOKS',
    'MUSIC',
    'MOVIES',
    'CLOTHING',
    'GAMES',
    'FURNITURE',
    'ELECTRONICS',
    'TRAVEL',
    'BOTANICAL',
    'CATEGORY_NAME'
  ];

  const rootStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#333333' : '#ffffff',
  };

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#6c5ce7' : '#ff6b6b',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div className="App" style={rootStyle}>
      <Navbar items={items} />
      <button style={buttonStyle} onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <CardSlider images={images}></CardSlider>
    </div>
  );
}

export default App;
