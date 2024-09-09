import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const BasicButtons = () => {
    const [open,setOpen] = useState(false);
    const openpopup = ()=>{
      setOpen(true);
    }
    const closepopup = () =>{
      setOpen(false);
    }
  
  return (
    <>
    <Stack spacing={3} direction="row">
      <Button onClick={openpopup} variant="contained">Add Task</Button>
    </Stack>
    <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm" >
      <DialogTitle>Todo</DialogTitle>
      <DialogContent>Any</DialogContent>
      <DialogActions>
      <Stack spacing={6} direction="row">
      <Button onClick={closepopup} variant="contained">Close</Button>
      </Stack>
      </DialogActions>
    </Dialog>
    </>
  );
}
export default BasicButtons;