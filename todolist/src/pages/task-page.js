import * as React from 'react';
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const columnStyles = {
  id: { width: 60 },
  name: { width: 150 },
  todo: { width: 200 },
  assign: { width: 150 },
  status: { width: 100 },
  startDate: { width: 120 },
  actions: { width: 100 }
};

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={columnStyles.id}>ID</TableCell>
              <TableCell style={columnStyles.name}>Name</TableCell>
              <TableCell style={columnStyles.todo}>To-Do</TableCell>
              <TableCell style={columnStyles.assign}>Assign</TableCell>
              <TableCell style={columnStyles.status}>Status</TableCell>
              <TableCell style={columnStyles.startDate}>Start Date</TableCell>
              <TableCell style={columnStyles.actions}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell style={columnStyles.id}>{task.id}</TableCell>
                <TableCell style={columnStyles.name}>{task.name}</TableCell>
                <TableCell style={columnStyles.todo}>{task.todo}</TableCell>
                <TableCell style={columnStyles.assign}>{task.assign}</TableCell>
                <TableCell style={columnStyles.status}>{task.status}</TableCell>
                <TableCell style={columnStyles.startDate}>{task.startDate}</TableCell>
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
