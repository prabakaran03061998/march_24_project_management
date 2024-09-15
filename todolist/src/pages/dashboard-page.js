import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';


///// set an arry for paper
const data = [
  { name: 'Processing', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Completed', value: 300 },
];
///////

///////// passing colors for chart //////
const COLORS = ['#4E91DD', '#E34A46', '#32C3A4'];

function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" color='black' fontFamily={'inherit'}>
        Status Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center',color:'#E34A46',  boxShadow: 5,borderColor: 'blue'  }}>
            <Typography variant="h6">Processing</Typography>
            <Typography variant="h4">400</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center',color:'#4E91DD', boxShadow: 5 }}>
            <Typography variant="h6">Pending</Typography>
            <Typography variant="h4">300</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center',color:'#32C3A4', boxShadow: 5 }}>
            <Typography variant="h6">Completed</Typography>
            <Typography variant="h4">300</Typography>
          </Paper>
        </Grid>
      </Grid>
      

{/************ char desingn   *********** */ }

      <Box sx={{ marginTop: 2, textAlign: 'center',color:'black' }}>
        <Typography variant="h4" gutterBottom>
          Status Distribution
        </Typography> 
         <PieChart width={500} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />



        </PieChart>

        
      </Box>

      {/* {/* Bar Chart  */}
       <Box sx={{ marginTop: 8, textAlign: 'center'}}> 
         {/* <Typography variant="h4" gutterBottom color='black'>
          Status Distribution
        </Typography> */}
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#2F63A0" />
        </BarChart> 
      </Box> 

    </Container>
  );
}

export default Dashboard;
