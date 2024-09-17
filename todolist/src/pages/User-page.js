import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Stack, CircularProgress } from '@mui/material';
import axios from 'axios';

const USER_GET = 'http://localhost:8000/user/user/get/all'; 

const UserCard = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${USER_GET}/${userId}`);
        setUserData(response.data);
      } catch (err) {
        // Handle 404 error specifically
        if (err.response && err.response.status === 404) {
          setError('User not found');
        } else {
          setError('An error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <CircularProgress sx={{ display: 'block', margin: 'auto', mt: 5 }} />;
  }

  if (error) {
    return <Typography color="error" sx={{ textAlign: 'center', mt: 5 }}>{error}</Typography>;
  }

  if (!userData) {
    return <Typography sx={{ textAlign: 'center', mt: 5 }}>No user data found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          User Information
        </Typography>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Typography variant="body1"><strong>User ID:</strong> {userData.userId}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {userData.emailId}</Typography>
          <Typography variant="body1"><strong>Phone Number:</strong> {userData.phoneNo}</Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Report:</strong> {userData.report}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserCard;
