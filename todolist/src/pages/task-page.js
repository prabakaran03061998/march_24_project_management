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
  Grid,
  Slide,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { TASK_SAVE, TASK_GET } from "../api-services/API-URL";
import statusOptions from "../data/status.json";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CopyAllTwoToneIcon from '@mui/icons-material/CopyAllTwoTone';

const columnStyles = {
  id: { width: 60 },
  taskId: { width: 100 },
  name: { width: 150 },
  description: { width: 200 },
  assignee: { width: 150 },
  status: { width: 100 },
  startDate: { width: 120 },
  dueDate: { width: 120 },
  estimation: { width: 100 },
  spend: { width: 100 },
  priority: { width: 100 },
  actions: { width: 100 },
};

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  fontWeight: theme.typography.fontWeightBold,
  border: `1px solid ${theme.palette.divider}`,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    dueDate: "",
    estimation: "",
    spend: "",
    priority: "",
  });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(editingTaskId);
  

  const getAllTasks = () => {
    axios.get(TASK_GET, { headers: { "Content-Type": "application/json" } })
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
  };

  const openAddPopup = () => setOpenAdd(true);
  const closeAddPopup = () => setOpenAdd(false);
  const openEditPopup = (task) => {
    setTaskData(task);
    setEditingTaskId(task.id);
    setOpenEdit(true);
  };
  const closeEditPopup = () => setOpenEdit(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitTask = () => {
    axios.post(TASK_SAVE, taskData)
      .then(() => {
        getAllTasks();
        closeAddPopup();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTask = () => {
    axios.post(TASK_SAVE, taskData)
      .then(() => {
        getAllTasks();
        closeEditPopup();
      })
      .catch((err) => console.log(err));
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  const filteredTasks = tasks.filter(task => {
    return (
      task.taskId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const paginatedTasks = filteredTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const highlightText = (text) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() ? 
      <span key={index} style={{ backgroundColor: '#c480ff' }}>{part}</span> : part
    );
  };

  // const copyToClipboard = (text) => {
  //   navigator.clipboard.writeText(text)
  //     .then(() => {
  //       alert('Copied to clipboard: ' + text);
  //     })
  //     .catch(err => {
  //       console.error('Failed to copy: ', err);
  //     });
  // };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedText(text);
        setOpenSnackbar(true);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          label="Search Tasks"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mr: 2 }}
        />
        <Stack spacing={3} direction="row">
          <Button onClick={openAddPopup} variant="contained">
            Add Task
          </Button>
        </Stack>
      </Box>

      {/* Add Task Dialog */}
      <Dialog open={openAdd} onClose={closeAddPopup} TransitionComponent={Transition} fullWidth maxWidth="sm">
        <DialogTitle>Add To-Do Item</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Task ID"
                name="taskId"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Name"
                name="name"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Description"
                name="description"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Assignee"
                name="assignee"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  name="status"
                  onChange={handleChange}
                  value={taskData.status}
                >
                  {statusOptions.map((option) => (
                    <MenuItem key={option.code} value={option.code}>{option.status}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Start Date"
                type="date"
                name="startDate"
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Due Date"
                type="date"
                name="dueDate"
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Estimation (hours)"
                name="estimation"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Spend"
                name="spend"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Priority"
                name="priority"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAddPopup} color="primary">Cancel</Button>
          <Button onClick={handleSubmitTask} variant="contained" color="primary">Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Task Dialog */}
      <Dialog open={openEdit} onClose={closeEditPopup} TransitionComponent={Transition} fullWidth maxWidth="sm">
        <DialogTitle>Edit To-Do Item</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Task ID"
                name="taskId"
                value={taskData.taskId}
                onChange={handleChange}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Name"
                name="name"
                value={taskData.name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Description"
                name="description"
                value={taskData.description}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Assignee"
                name="assignee"
                value={taskData.assignee}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  name="status"
                  value={taskData.status}
                  onChange={handleChange}
                >
                  {statusOptions.map((option) => (
                    <MenuItem key={option.code} value={option.code}>{option.status}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Start Date"
                type="date"
                name="startDate"
                value={taskData.startDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Due Date"
                type="date"
                name="dueDate"
                value={taskData.dueDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Estimation (hours)"
                name="estimation"
                value={taskData.estimation}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="dense"
                label="Spend"
                name="spend"
                value={taskData.spend}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Priority"
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditPopup} color="primary">Cancel</Button>
          <Button onClick={handleUpdateTask} variant="contained" color="primary">Update</Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeadCell style={columnStyles.id}>S.No</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.taskId}>Task ID</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.name}>Name
           
              </StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.description}>Description</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.assignee}>Assign</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.status}>Status</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.startDate}>Start Date</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.dueDate}>Due Date</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.estimation}>Estimation</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.spend}>Spend</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.priority}>Priority</StyledTableHeadCell>
              <StyledTableHeadCell style={columnStyles.actions}>Actions</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTasks.map((task, index) => (
              <TableRow key={task.id}>
                <TableCell style={columnStyles.id}>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell style={columnStyles.taskId}>{highlightText(task.taskId)}</TableCell>

  
                <TableCell style={columnStyles.name}>{highlightText(task.name)}
                <IconButton onClick={() => copyToClipboard(task.name)}  style={{
                      color: copiedText === task.name ? '#D6393A' : 'inherit', // Change the copied color here
                      transition: 'color 0.3s ease',
                    }}>
                      {copiedText === task.name ?  <CopyAllTwoToneIcon /> : <ContentCopyIcon />}
                </IconButton>
                </TableCell>

                <TableCell style={columnStyles.description}>{highlightText(task.description)}</TableCell>
                <TableCell style={columnStyles.assignee}>{highlightText(task.assignee)}</TableCell>
                <TableCell style={columnStyles.status}>
                  <Chip label={task.status} variant="outlined" />
                </TableCell>
                <TableCell style={columnStyles.startDate}>{task.startDate}</TableCell>
                <TableCell style={columnStyles.dueDate}>{task.dueDate}</TableCell>
                <TableCell style={columnStyles.estimation}>{task.estimation}</TableCell>
                <TableCell style={columnStyles.spend}>{task.spend}</TableCell>
                <TableCell style={columnStyles.priority}>{task.priority}</TableCell>
                <TableCell style={columnStyles.actions}>
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <EditNoteIcon color="action" sx={{ marginRight: 1, fontSize: 20 }} onClick={() => openEditPopup(task)} />
                    <DeleteSweepIcon color="error" onClick={() => handleDelete(task.id)} sx={{ fontSize: 20 }} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Copied to clipboard: {copiedText}
        </Alert>
      </Snackbar>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredTasks.length} // Update count to filtered tasks
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
