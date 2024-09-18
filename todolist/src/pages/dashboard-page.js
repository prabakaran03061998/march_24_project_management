import React from 'react';
import { Container, Grid, Paper, Typography, Box,} from '@mui/material';

import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';


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
// const newColorFind = () => {
//   for (let x = 0; x < 6; x++) {
//     let index = Math.floor(Math.random() * 16);
//     let value = arrayOfColorFunctions[index];

//     randomColorString += value;
//   }
//   console.log(randomColorString);
// };

function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" color='black' fontFamily={'inherit'}>
        Status Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item  xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center',color:'blue',  boxShadow: 5,borderColor: 'blue'  }}>

          


            <Typography variant="h6">Total</Typography>
            <Typography variant="h4">400</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center',color:'red', boxShadow: 5 }}>
            
            <Typography variant="h6">Inprogess</Typography>
            <Typography variant="h4">300</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center',color:'green', boxShadow: 5 }}>
            <Typography variant="h6">Pending</Typography>
            <Typography variant="h4">300</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center',color:'orange', boxShadow: 5 }}>
            <Typography variant="h6">Completed</Typography>
            <Typography variant="h4">300</Typography>
          </Paper>
        </Grid>

      </Grid>
      

{/************ char desingn   *********** */ }


        <Box sx={{display:'flex'}}  >

      <Box sx={{ marginTop: 2, textAlign: 'center',color:'black'}}>
      
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
       <Box sx={{ marginTop: 8, textAlign: 'center', justifyContent:"flex-end"}}> 
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
