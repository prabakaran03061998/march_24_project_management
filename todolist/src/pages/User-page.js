import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  CircularProgress,
  Alert,
  IconButton,
  Collapse,
  Avatar,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import axios from "axios";
import { USER_GET } from "../api-services/API-URL";

const UserCard = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUser, setExpandedUser] = useState(null);

  const getAllUsers = () => {
    axios({
      url: USER_GET,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleExpandClick = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {userData.map((user) => (
        <Card
          key={user.userId}
          sx={{
            maxWidth: 400,
            minWidth: 350,
            margin: 1,
            transition: '0.3s',
            borderRadius: '16px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            '&:hover': {
              boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={user.profilePicture || "/default-avatar.png"} sx={{ width: 56, height: 56, mr: 2 }} />
                <Stack>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.online ? 'Online' : 'Offline'}
                  </Typography>
                </Stack>
              </Box>
              <Typography variant="body1">
                <strong>User ID:</strong> {user.userId}
              </Typography>
              <Typography variant="body1">
                <strong>User Name:</strong> {user.name}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {user.emailId}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <IconButton onClick={() => handleExpandClick(user.userId)}>
                  {expandedUser === user.userId ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              <Collapse in={expandedUser === user.userId}>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1">
                    <strong>Phone Number:</strong> {user.phoneNo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Report:</strong> {user.report}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Designation:</strong> {user.destignation}
                  </Typography>
                </Box>
              </Collapse>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UserCard;
