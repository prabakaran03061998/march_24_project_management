import React, { useState } from 'react';
import '../style/Navbar.css';
import { useLocation } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const location = useLocation(); 

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
    // Implement your actual logout logic here
    alert('Logged out successfully!');
    setOpenLogoutDialog(false);
  };

  const isTaskPage = location.pathname === '/task';
  console.log(isTaskPage);

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
