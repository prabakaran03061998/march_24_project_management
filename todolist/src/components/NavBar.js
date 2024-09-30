import React, { useState } from 'react';
import '../style/Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

const Navbar = () => {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); // Initialize navigate

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
    <nav className="navbar" >
      <div className="search-container">
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        
        </Typography>

      </div>
      <div className="button-container">
      <Button
          color="inherit"
          startIcon={<LogoutOutlinedIcon />}
          onClick={handleLogoutClick}
        >
          Logout
        </Button>
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
