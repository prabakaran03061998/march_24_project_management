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
  Fade,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { Task_OPEN, Task_INP, Task_COMP } from "../api-services/API-URL";

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
              <TableRow hover>
                <TableCell style={{ color: '#c9184a', fontWeight: 'bold' }}>Open</TableCell>
                <TableCell align="center">{filterTasksByStatus("open").length}</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell style={{ color: '#ffd000', fontWeight: 'bold' }}>In Progress</TableCell>
                <TableCell align="center">{filterTasksByStatus("inp").length}</TableCell>
              </TableRow>
              <TableRow hover>
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

  const buttonStyles = (page) => ({
    marginRight: "10px",
    background: currentPage === page ? '#1e90ff' : 'white',
    color: currentPage === page ? 'white' : 'black',
    border: currentPage === page ? 'none' : '1px solid #1e90ff',
    transition: 'background 0.3s, color 0.3s',
  });

  return (
    <Box style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Task Status Page</Typography>

      <Box style={{ marginBottom: "20px" }}>
        <Button
          variant="outlined"
          onClick={() => setCurrentPage("Total")}
          style={buttonStyles("Total")}
        >
          Total
        </Button>
        <Button
          variant="outlined"
          onClick={() => setCurrentPage("Open")}
          style={buttonStyles("Open")}
        >
          Open
        </Button>
        <Button
          variant="outlined"
          onClick={() => setCurrentPage("In Progress")}
          style={buttonStyles("In Progress")}
        >
          In Progress
        </Button>
        <Button
          variant="outlined"
          onClick={() => setCurrentPage("Complete")}
          style={buttonStyles("Complete")}
        >
          Complete
        </Button>
      </Box>

      {renderTasksByStatus()}

      {/* Modal for Task Details with Fade Animation */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <Fade in={openModal}>
          <Box style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          }}>
            <DialogTitle>
              Task Details
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseModal}
                aria-label="close"
                style={{ position: 'absolute', right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {selectedTask && (
                <Box>
                  <Typography variant="h6" gutterBottom>{selectedTask.name}</Typography>
                  <Typography variant="body1"><strong>Description:</strong> {selectedTask.description}</Typography>
                  <Typography variant="body1"><strong>Assignee:</strong> {selectedTask.assignee}</Typography>
                  <Typography variant="body1"><strong>Status:</strong> {selectedTask.status}</Typography>
                  <Typography variant="body1"><strong>Start Date:</strong> {new Date(selectedTask.startDate).toLocaleDateString()}</Typography>
                  <Typography variant="body1"><strong>Estimation:</strong> {selectedTask.estimation}</Typography>
                  <Typography variant="body1"><strong>Spend:</strong> {selectedTask.spend}</Typography>
                  <Typography variant="body1"><strong>Due Date:</strong> {new Date(selectedTask.dueDate).toLocaleDateString()}</Typography>
                  <Typography variant="body1"><strong>Priority:</strong> {selectedTask.priority}</Typography>
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">Close</Button>
            </DialogActions>
          </Box>
        </Fade>
      </Dialog>
    </Box>
  );
};

export default TaskStatusPage;
