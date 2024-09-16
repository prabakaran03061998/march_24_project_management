import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { useNavigate } from 'react-router-dom';

const mainListItems = [
  {id:0, text: 'Dashboard', icon: <SpaceDashboardIcon />, path: '/' },
  {id:1, text: 'Task', icon: <AssignmentRoundedIcon />, path: '/task' },
  {id:2, text: 'Board', icon: <AssessmentRoundedIcon />, path: '/status' },
  {id:3, text: 'Release', icon: <NewReleasesRoundedIcon />, path: '/release' },
];

const secondaryListItems = [
  {id:0, text: 'Settings', icon: <SettingsRoundedIcon />, path: '/Settings' },
  {id:1, text: 'About', icon: <InfoRoundedIcon />, path: '/About' },
  {id:2, text: 'Feedback', icon: <HelpRoundedIcon />, path: '/Feedback' },
];

const   MenuContent =  () =>{
  const navigate=useNavigate();
  const [selectedPath,setSelectedPath]=React.useState(0);
  const [selectedPaths,setSelectedPaths]=React.useState(0);  
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem  key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={()=>{navigate(item.path);setSelectedPath(item.id)}} selected ={index === selectedPath}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={()=>{navigate(item.path);setSelectedPaths(item.id)}} selected ={index === selectedPaths}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default MenuContent;