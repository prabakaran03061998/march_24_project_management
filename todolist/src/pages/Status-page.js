import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios"; // Import axios for making HTTP requests
import { Task_OPEN, Task_INP, Task_COMP } from "../api-services/API-URL"; // Adjust the import path as needed

const TaskStatusPage = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState("Total");
  const [selectedTask, setSelectedTask] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const [openTasks, inProgressTasks, completeTasks] = await Promise.all([
          axios.get(Task_OPEN),
          axios.get(Task_INP),
          axios.get(Task_COMP),
        ]);

        setTasks([...openTasks.data, ...inProgressTasks.data, ...completeTasks.data]);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const filterTasksByStatus = (status) => {
    return tasks.filter((task) => task.status.toLowerCase() === status.toLowerCase());
  };

  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTask(null);
  };

  const renderTasksByStatus = () => {
    let filteredTasks = [];

    if (currentPage === "Open") {
      filteredTasks = filterTasksByStatus("open");
    } else if (currentPage === "In Progress") {
      filteredTasks = filterTasksByStatus("inp");
    } else if (currentPage === "Complete") {
      filteredTasks = filterTasksByStatus("comp");
    } else if (currentPage === "Total") {
      return (
        <TableContainer component={Paper} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Table aria-label="task count table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#1e90ff', color: 'white' }}>
                <TableCell style={{ fontWeight: 'bolder' }}>Status</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bolder' }}>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover style={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                <TableCell style={{ color: '#c9184a', fontWeight: 'bold' }}>Open</TableCell>
                <TableCell align="center">{filterTasksByStatus("open").length}</TableCell>
              </TableRow>
              <TableRow hover style={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                <TableCell style={{ color: '#ffd000', fontWeight: 'bold' }}>In Progress</TableCell>
                <TableCell align="center">{filterTasksByStatus("inp").length}</TableCell>
              </TableRow>
              <TableRow hover style={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                <TableCell style={{ color: '#09bc8a', fontWeight: 'bold' }}>Complete</TableCell>
                <TableCell align="center">{filterTasksByStatus("comp").length}</TableCell>
              </TableRow>
              <TableRow style={{ fontWeight: 'bolder', backgroundColor: '#e0e0e0' }}>
                <TableCell style={{ fontWeight: 'bolder' }}>Total Tasks</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bolder' }}>{tasks.length}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

    // Render tasks for Open, In Progress, and Complete
    return (
      <Grid container spacing={2}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined" style={{ borderColor: getStatusColor(task.status) }}>
                <CardContent>
                  <Typography variant="h6">{task.name}</Typography>
                  <Typography color="textSecondary">Status: {task.status}</Typography>
                  <Typography variant="body2">Task ID: {task.taskId}</Typography>
                  <Typography variant="body2">Start Date: {new Date(task.startDate).toLocaleDateString()}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleOpenModal(task)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No tasks found for "{currentPage}"</Typography>
        )}
      </Grid>
    );
  };


  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "blue";
      case "in progress":
        return "orange";
      case "complete":
        return "green";
      default:
        return "grey";
    }
  };

  return (
    <Box style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Task Status Page</Typography>

      <Box style={{ marginBottom: "20px" }}>
        <Button
          variant={currentPage === "Total" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("Total")}
          style={{ marginRight: "10px", background: 'navy', color: 'white' }}
        >
          Total
        </Button>
        <Button
          variant={currentPage === "Open" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("Open")}
          style={{ marginRight: "10px", background: '#c9184a', color: 'black' }}
        >
          Open
        </Button>
        <Button
          variant={currentPage === "In Progress" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("In Progress")}
          style={{ marginRight: "10px", background: '#ffd000', color: 'black' }}
        >
          In Progress
        </Button>
        <Button
          variant={currentPage === "Complete" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("Complete")}
          style={{ marginRight: "10px", background: '#09bc8a', color: 'black' }}
        >
          Complete
        </Button>
      </Box>

      {renderTasksByStatus()}

      {/* Modal for Task Details */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
          {selectedTask && (
            <Box>
              <Typography variant="h6">{selectedTask.name}</Typography>
              <Typography variant="body1">Description: {selectedTask.description}</Typography>
              <Typography variant="body1">Assignee: {selectedTask.assignee}</Typography>
              <Typography variant="body1">Status: {selectedTask.status}</Typography>
              <Typography variant="body1">Start Date: {new Date(selectedTask.startDate).toLocaleDateString()}</Typography>
              <Typography variant="body1">Estimation: {selectedTask.estimation}</Typography>
              <Typography variant="body1">Spend: {selectedTask.spend}</Typography>
              <Typography variant="body1">Due Date: {new Date(selectedTask.dueDate).toLocaleDateString()}</Typography>
              <Typography variant="body1">Priority: {selectedTask.priority}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskStatusPage;
