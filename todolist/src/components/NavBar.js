// src/components/Navbar.js
import React, { useState } from 'react';
import '../style/Navbar.css';
import NavButton from '../components/Nav-Button';
import { useLocation } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation(); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);

  };
  const isTaskPage = location.pathname === '/task';
  console.log(isTaskPage);

  // const handleAddNewClick = () => {
  //   alert('Add New button clicked!');
  // };

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
      {isTaskPage ? (
          <NavButton />
        ) : (
          <LogoutOutlinedIcon color='action' />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
