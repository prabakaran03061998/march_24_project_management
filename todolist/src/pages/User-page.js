import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { USER_GET } from "../api-services/API-URL";

const UserCard = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllUsers = () => {
    axios({
      url: USER_GET,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return  userData.map((user, index) => (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>User ID:</strong> {user.userId}
          </Typography>
          <Typography variant="body1">
            <strong>User Name:</strong> {user.name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {user.emailId}
          </Typography>
          <Typography variant="body1">
            <strong>Phone Number:</strong> {user.phoneNo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Report:</strong> {user.report}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  ));
};

export default UserCard;
