// src/components/Navbar.js
import React, { useState } from 'react';
import '../style/Navbar.css';
import NavButton from '../components/Nav-Button';


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNewClick = () => {
    alert('Add New button clicked!');
  };

  return (
    <nav className="navbar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <div className="button-container">
      <NavButton/>
      </div>
    </nav>
  );
};

export default Navbar;