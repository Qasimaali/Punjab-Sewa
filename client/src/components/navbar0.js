import React, { useState } from 'react';

const Navbar = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="language-select">Menu</button>
        <div className="dropdown-content">
          <a href="#sewakendra">Sewa Kendra</a>
          <a href="#downloadcertificate">Download Certificate</a>
          <a href="#verifycertificate">Verify Certificate</a>
          <a href="#trackstatus">Track Status</a>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/24/ffffff/youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" />
        </a>
      </div>

      <select className="language-select" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="pa">Punjabi</option>
      </select>
    </div>
  );
};

export default Navbar;
