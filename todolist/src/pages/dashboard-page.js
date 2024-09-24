import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';
import process from './images/process.png';
import pending from './images/pending.png';
import accept from './images/accept.png';
import all from './images/all.png';
import axios from 'axios';
import { DASHBOARD_GET } from '../api-services/API-URL';

const COLORS = ['navy', '#4E91DD', '#E34A46', '#32C3A4'];

function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);
  const [chartData, setChartData] = useState([]);
  
  const getAllUsers = () => {
    axios({
      url: DASHBOARD_GET,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setDashboardData(res.data);
        formatChartData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  const formatChartData = (data) => {
    // Assuming your API response has the structure:
    
    const formattedData = [
      { name: 'Total', value: data.total },
      { name: 'In Progress', value: data.inProgress },
      { name: 'Open', value: data.open},
      { name: 'Completed', value: data.complete },
    ];
    setChartData(formattedData);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        color="primary"
        fontFamily="inherit"
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          background: 'linear-gradient(50deg, red 5%, blue 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          padding: '10px 0',
        }}
      >
        PROJECT Status Dashboard
      </Typography>

      <Grid container spacing={2}>
        {[
          { img: all, title: 'Total', value: dashboardData.total || 0, color: '#3f51b5' },
          { img: process, title: 'In Progress', value: dashboardData.inProgress || 0, color: '#1976d2' },
          { img: pending, title: 'Open', value: dashboardData.open|| 0, color: '#795548' },
          { img: accept, title: 'Completed', value: dashboardData.complete || 0, color: '#4caf50' },
        ].map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                marginTop: 2,
                borderRadius: 3,
                bgcolor: '#ffffff',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '60px',
                  height: '60px',
                  marginRight: '16px',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                }}
              />
              <div style={{ textAlign: 'left', color: item.color }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: '600' }}>
                  {item.value}
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
        <Box sx={{ textAlign: 'center', flex: 1, marginRight: 0, boxShadow: 5, borderRadius: 3, bgcolor: '#f9f9f9', p: 1, height: '380px' }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>Project Process</Typography>
          <PieChart width={400} height={300}>
            <Pie data={chartData} cx="50%" cy="50%" labelLine={false} outerRadius={110} fill="#8884d8" dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>

        <Box sx={{ textAlign: 'center', flex: 1, marginLeft: 2, boxShadow: 5, borderRadius: 3, bgcolor: '#f9f9f9', p: 2 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}> Project Status </Typography>
          <BarChart width={400} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#2F63A0" />
          </BarChart>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;