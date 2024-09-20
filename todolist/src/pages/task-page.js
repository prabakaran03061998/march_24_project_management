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
  TablePagination,
  Chip,
} from "@mui/material";
import axios from "axios";
import { TASK_SAVE, TASK_GET } from "../api-services/API-URL";
import statusOptions from "../data/status.json";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const columnStyles = {
  id: { width: 60 },
  name: { width: 150 },
  todo: { width: 200 },
  assign: { width: 150 },
  status: { width: 100 },
  startDate: { width: 120 },
  actions: { width: 100 },
};

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  fontWeight: theme.typography.fontWeightBold,
  border: `1px solid ${theme.palette.divider}`,
}));

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [taskData, setTaskData] = useState({
    id: 0,
    taskId: "",
    name: "",
    description: "",
    assignee: "",
    status: "OPEN",
    startDate: "",
  });

  const [editingTaskId, setEditingTaskId] = useState(null); // Track which task is being edited

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getAllTasks = () => {
    axios({
      url: TASK_GET,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
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

  const openAddPopup = () => {
    setOpenAdd(true);
  };

  const closeAddPopup = () => {
    setOpenAdd(false);
  };

  const openEditPopup = (task) => {
    setTaskData(task);
    setEditingTaskId(task.id);
    setOpenEdit(true);
  };

  const closeEditPopup = () => {
    setOpenEdit(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitTask = () => {
    axios({
      url: TASK_SAVE,
      method: "post",
      data: taskData,

    })
      .then((res) => {
        getAllTasks();
        closeAddPopup();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTask = () => {
    axios({
      url: TASK_SAVE ,
      method: "post",
      data: taskData,
    })
      .then((res) => {
        getAllTasks();
        closeEditPopup();
      })
      .catch((err) => console.log(err));
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedTasks = tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Stack spacing={3} direction="row">
          <Button onClick={openAddPopup} variant="contained">
            Add Task
          </Button>
        </Stack>
      </Box>

      {/* Add Task Dialog */}
      <Dialog open={openAdd} onClose={closeAddPopup} fullWidth maxWidth="sm">
        <DialogTitle>Add To-Do Item</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Task ID"
            name="taskId"
            type="text"
            // value={taskData.taskId}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Name"
            type="text"
            name="name"
            // value={taskData.name}
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
            // value={taskData.description}
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <TextField
            margin="dense"
            label="Assignee"
            onChange={handleChange}
            name="assignee"
            type="text"
            // value={taskData.assignee}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              name="status"
              onChange={handleChange}
              value="OPEN"
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
            // value={taskData.startDate}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAddPopup} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitTask} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Task Dialog */}
      <Dialog open={openEdit} onClose={closeEditPopup} fullWidth maxWidth="sm">
        <DialogTitle>Edit To-Do Item</DialogTitle>
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
            disabled
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
            <Select
              label="Status"
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
          <Button onClick={closeEditPopup} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdateTask} variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeadCell style={columnStyles.id}>S.No</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.name}>Task ID</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.name}>Name</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.todo}>Description</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.assign}>Assign</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.status}>Status</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.startDate}>Start Date</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.actions}>Actions</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTasks.map((task, index) => (
              <TableRow key={task.id}>
                <TableCell style={columnStyles.id}>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell style={columnStyles.name}>{task.taskId}</TableCell>
                <TableCell style={columnStyles.name}>{task.name}</TableCell>
                <TableCell style={columnStyles.todo}>{task.description}</TableCell>
                <TableCell style={columnStyles.assign}>{task.assignee}</TableCell>
                <TableCell style={columnStyles.status}>
                  <Chip
                    label={task.status}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell style={columnStyles.startDate}>{task.startDate}</TableCell>
                <TableCell style={columnStyles.actions}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <EditNoteIcon
                      color="action"
                      sx={{ marginRight: 1, fontSize: 20 }}
                      onClick={() => openEditPopup(task)}
                    />
                    <DeleteSweepIcon
                      color="error"
                      onClick={() => handleDelete(task.id)}
                      sx={{ fontSize: 20 }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tasks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default TaskTable;
