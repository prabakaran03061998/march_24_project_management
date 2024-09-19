import React from 'react';
import { Container, Grid, Paper, Typography, Box,} from '@mui/material';

import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';
import process from './images/process.png'
import pending from'./images/pending.png';
import accept from './images/accept.png';
import all from './images/all.png';



///// set an arry for paper
const data = [
  { name: 'Total', value: 400 },
  { name: 'Inprogress', value: 300 },
  { name: 'pending', value: 300 },
  { name: 'completed', value: 300 },
];

///////

///////// passing colors for chart //////

const COLORS = ['navy', '#4E91DD', '#E34A46', '#32C3A4'];



function Dashboard() {

    
      
  
  return (
    <Container>
    
      <Typography variant="h4" gutterBottom align="center" color='black' fontFamily={'inherit'}>
        Status Dashboard
      </Typography>
      <Grid container spacing={3}>
      
        <Grid item  xs={12} md={3}>
          <Paper elevation={3}   sx={{ padding: 2, textAlign: 'center',color:'blue',display:'flex',  boxShadow: 5,borderColor: 'blue',marginTop: 5  }}>
          <img src={all} alt="In Progress" style={{ width: '60px', height: 'px', marginRight: '16px' }} />
          <div style={{ textAlign: 'center', color: 'blue' }}>
            
            <Typography variant="h5" sx={{fontSize:'24px' }}>Total</Typography>
            <Typography variant="h4">400</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
  <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center', boxShadow: 5 ,marginTop: 5}}>
    <img src={process} alt="In Progress" style={{ width: '60px', height: 'px', marginRight: '16px' }} />
    <div style={{ textAlign: 'center', color: 'navy' }}>
      <Typography variant="h5">In Progress</Typography>
      <Typography variant="h4">300</Typography>
    </div>
  </Paper>
</Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2, display:'flex', textAlign: 'center',boxShadow: 5 ,marginTop: 5}}>
          <img src={pending} alt="In Progress" style={{ width: '60px', height: 'px', marginRight: '16px' }} />
          <div style={{ textAlign: 'center', color: 'brown' }}>
            <Typography variant="h5">Pending</Typography>
            <Typography variant="h4">300</Typography>
            </div>
          </Paper>
          
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2, display:'flex', textAlign: 'center',color:'orange', boxShadow: 5,marginTop: 5 }}>
          <img src={accept} alt="In Progress" style={{ width: '60px', height: '', marginRight: '16px',}} />
          <div style={{ textAlign: 'center', color: 'green' }}>
            <Typography variant="h5">Completed</Typography>
            <Typography variant="h4">300</Typography>
            </div>
          </Paper>
        </Grid>

      </Grid>
      

{/************ char desingn   *********** */ }


        <Box sx={{display:'flex',justifyContent:'space-between',boxShadow: '0 4px 8px rgba(0, 2, 3, )'}}  >

      <Box sx={{ marginTop: 7, textAlign: 'center',color:'black',boxShadow: 5}}>
      
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
       <Box sx={{ marginTop: 7, textAlign: 'center', justifyContent:"flex-end",boxShadow: 5,marginleft:3}}> 
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
      </Box>
    </Container>
  );
}

export default Dashboard;
