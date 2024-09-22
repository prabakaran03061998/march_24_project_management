// Importing necessary modules from React and Material-UI
import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// The main component to display total tasks and tasks by status
const TaskStatusPage = () => {
  // Predefined tasks with different statuses
  const [tasks] = useState([
    { text: "Task 1", status: "Open" },
    { text: "Task 2", status: "In Progress" },
    { text: "Task 3", status: "Complete" },
    { text: "Task 4", status: "Open" },
    { text: "Task 5", status: "Complete" }
  ]);

  const [currentPage, setCurrentPage] = useState("Total");

  // Function to filter tasks based on status
  const filterTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  // Function to render tasks and total count based on status
  const renderTasksByStatus = () => {
    let filteredTasks = [];

    if (currentPage === "Open") {
      filteredTasks = filterTasksByStatus("Open");
    } else if (currentPage === "In Progress") {
      filteredTasks = filterTasksByStatus("In Progress");
    } else if (currentPage === "Complete") {
      filteredTasks = filterTasksByStatus("Complete");
    } else if (currentPage === "Total") {
      // Render the total number of tasks in table format
      return (
        <TableContainer component={Paper}>
          <Table aria-label="task count table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight:'bolder'}}>Status</TableCell>
                <TableCell align="center" style={{fontWeight:'bolder'}}>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Open</TableCell>
                <TableCell align="center">{filterTasksByStatus("Open").length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>In Progress</TableCell>
                <TableCell align="center">{filterTasksByStatus("In Progress").length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Complete</TableCell>
                <TableCell align="center">{filterTasksByStatus("Complete").length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{fontWeight:'bolder'}}>Total Tasks</TableCell>
                <TableCell align="center" style={{fontWeight:'bolder'}}>{tasks.length}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

    return (
      <>
        <Typography variant="h6">
          {filteredTasks.length} {filteredTasks.length === 1 ? "task" : "tasks"} found for "{currentPage}"
        </Typography>
        <List>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <ListItem key={index} style={{ border: "1px solid #ddd", marginTop: "10px" }}>
                {/* Fixed the error by properly using string interpolation */}
                <ListItemText primary={task.text} secondary={`Status: ${task.status}`} />
              </ListItem>
            ))
          ) : (
            <Typography>No tasks found for "{currentPage}"</Typography>
          )}
        </List>
      </>
    );
  };

  return (
    <Box style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Task Status Page</Typography>

      {/* Buttons to switch between status pages */}
      <Box style={{ marginBottom: "20px" }}>
        <Button
          variant={currentPage === "Total" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("Total")}
          style={{ marginRight: "10px", background:'navy', color:'white', border:'none'}}
        >
          Total
        </Button>
        <Button
          variant={currentPage === "Open" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("Open")}
          style={{ marginRight: "10px", background:'red', color:'white', border:'none'}}
        >
          Open
        </Button>
        <Button
          variant={currentPage === "In Progress" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("In Progress")}
          style={{ marginRight: "10px", background:'yellow', color:'navy', border:'none'}}
        >
          In Progress
        </Button>
        <Button
          variant={currentPage === "Complete" ? "contained" : "outlined"}
          onClick={() => setCurrentPage("Complete")}
          style={{ marginRight: "10px", background:'green', color:'white', border:'none'}}
        >
          Complete
        </Button>
      </Box>

      {/* Display tasks and total for the selected status */}
      {renderTasksByStatus()}
    </Box>
  );
};

// Exporting the component to use in the app
export default TaskStatusPage;
