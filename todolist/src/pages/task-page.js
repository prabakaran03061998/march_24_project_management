import * as React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  DialogActions,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Box,
  styled,
} from "@mui/material";
import axios from "axios";
import { TASK_SAVE,TASK_GET } from "../api-services/API-URL";
import statusOptions from "../data/status.json";

const columnStyles = {
  id: { width: 60 },
  name: { width: 150 },
  todo: { width: 200 },
  assign: { width: 150 },
  status: { width: 100 },
  startDate: { width: 120 },
  actions: { width: 100 },
};

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    id: 0,
    taskId: "",
    name: "",
    description: "",
    assignee: "",
    status: "OPEN",
    startDate: "",
  });

  const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    fontWeight: theme.typography.fontWeightBold,
    border: `1px solid ${theme.palette.divider}`,
  }));

  const getAllTasks = () => {
    axios({
      url: TASK_GET,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  const openpopup = () => {
    setOpen(true);
  };

  const closepopup = () => {
    setOpen(false);
  };

  const handleChange= (event) =>{
    const {name,value}=event.target;
    setTaskData((prevState) => ({ 
      ...prevState,
      [name]:value
   }))
  }

  const handleSubmitTask = () => {
    console.log(taskData);
     axios({
      url: TASK_SAVE,
      method: "post",
      data:taskData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        getAllTasks()
        closepopup();
      })
      .catch((err) => console.log(err));

  };

  return (
    <div>
      <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Stack spacing={3} direction="row">
          <Button onClick={openpopup} variant="contained">
            Add Task
          </Button>
        </Stack>  
      </Box>   
        <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
          <DialogTitle>Add To-Do Item</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Task ID"
              name="taskId"
              type="text"
              value={taskData.taskId}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Name"
              type="text"
              name="name"
              value={taskData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              onChange={handleChange}
              name="description"
              fullWidth
              value={taskData.description}
              variant="outlined"
              sx={{ mt: 2 }}
            />
            <TextField
              margin="dense"
              label="Assignee"
              onChange={handleChange}
              name="assignee"
              type="text"
              value={taskData.assignee}
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
            />
            <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status"
              name="status"
              onChange={handleChange}
              value={taskData.status}
              >
                {statusOptions.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Start Date"
              type="date"
              name="startDate"
              onChange={handleChange}
              value={taskData.startDate}
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
            <Button
              onClick={handleSubmitTask}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <StyledTableHeadCell style={columnStyles.id}>S.No</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.name}>Task ID</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.name}>Name</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.todo}>Description</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.assign}>Assignee</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.status}>Status</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.startDate}>Start Date</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.actions}>Actions</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={task.id}>
                <TableCell style={columnStyles.id}>{index + 1}</TableCell>
                <TableCell style={columnStyles.name}>{task.taskId}</TableCell>
                <TableCell style={columnStyles.name}>{task.name}</TableCell>
                <TableCell style={columnStyles.todo}>
                  {task.description}
                </TableCell>
                <TableCell style={columnStyles.assign}>
                  {task.assignee}
                </TableCell>
                <TableCell style={columnStyles.status}>{task.status}</TableCell>
                <TableCell style={columnStyles.startDate}>
                  {task.startDate}
                </TableCell>
                <TableCell style={columnStyles.actions}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(task.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TaskTable;
