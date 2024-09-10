import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const generateRandomId = () => {
  const randomId = Math.floor(1000 + Math.random() * 9000);
  return `T-${randomId}`;
};

const BasicButtons = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const statusOptions = ['Pending', 'In Progress', 'Completed'];

  const openpopup = () => {
    setOpen(true);
  };

  const closepopup = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    closepopup();
    navigate('/task'); // Navigate to the table page
  };

  return (
    <>
      <Stack spacing={3} direction="row">
        <Button onClick={openpopup} variant="contained">Add Task</Button>
      </Stack>
      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
        <DialogTitle>Add To-Do Item</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Task ID"
            type="text"
            fullWidth
            variant="outlined"
            disabled
          />
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <TextField
            margin="dense"
            label="To-Do"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <TextField
            margin="dense"
            label="Assign"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
            >
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closepopup} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BasicButtons;
