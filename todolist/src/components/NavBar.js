import React, { useState } from 'react';
import '../style/Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); // Initialize navigate

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLogoutClick = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleConfirmLogout = () => {
    // alert('Logged out successfully!');
    
    // Redirect to login page
    navigate('/login');
    
    setOpenLogoutDialog(false);
  };

  const isTaskPage = location.pathname === '/task';
  console.log(isTaskPage);

  return (
    <nav className="navbar">
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <SearchOutlinedIcon className="search-icon" color='action'/>
        </div>
      </div>
      <div className="button-container">
        <LogoutOutlinedIcon 
          color='action' 
          onClick={handleLogoutClick} 
          style={{ cursor: 'pointer' }} 
        />
      </div>

      {/* Logout Dialog */}
      <Dialog
        open={openLogoutDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to log out?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;
