

import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';
import process from './images/process.png';
import pending from './images/pending.png';
import accept from './images/accept.png';
import all from './images/all.png';

const data = [
  { name: 'Total', value: 413 },
  { name: 'In Progress', value: 300 },
  { name: 'Pending', value: 300 },
  { name: 'Completed', value: 300 },
];

const COLORS = ['navy', '#4E91DD', '#E34A46', '#32C3A4'];

function Dashboard() {
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
    { img: all, title: 'Total', value: 400, color: '#3f51b5' },
    { img: process, title: 'In Progress', value: 300, color: '#1976d2' },
    { img: pending, title: 'Pending', value: 300, color: '#795548' },
    { img: accept, title: 'Completed', value: 300, color: '#4caf50' },
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
          transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effects
          '&:hover': {
            transform: 'scale(1.05)', // Slightly enlarge on hover
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', // Deeper shadow on hover
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

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5  }}>
        <Box sx={{ textAlign: 'center', flex: 1, marginRight: 0, boxShadow: 5, borderRadius: 3, bgcolor: '#f9f9f9', p: 1,height:'380px', }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>Project Process</Typography>
          <PieChart width={400} height={300}>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={110} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>

        <Box sx={{ textAlign: 'center', flex: 1, marginLeft: 2, boxShadow: 5, borderRadius: 3, bgcolor: '#f9f9f9', p: 2 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}> Project Status </Typography>
          <BarChart width={400} height={300} data={data}>
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

// import React, { useState } from 'react';
// import { Container, Grid, Paper, Typography, Box } from '@mui/material';
// import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';
// import Calendar from 'react-calendar'; // Import the calendar
// import 'react-calendar/dist/Calendar.css'; // Import the calendar styles
// import process from './images/process.png';
// import pending from './images/pending.png';
// import accept from './images/accept.png';
// import all from './images/all.png';

// const data = [
//   { name: 'Total', value: 413 },
//   { name: 'In Progress', value: 300 },
//   { name: 'Pending', value: 300 },
//   { name: 'Completed', value: 300 },
// ];

// const COLORS = ['navy', '#4E91DD', '#E34A46', '#32C3A4'];

// function Dashboard() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <Container>
//       <Typography
//         variant="h4"
//         gutterBottom
//         align="center"
//         color="primary"
//         fontFamily="inherit"
//         sx={{
//           fontWeight: 'bold',
//           textTransform: 'uppercase',
//           letterSpacing: 1.5,
//           background: 'linear-gradient(50deg, red 5%, blue 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           padding: '10px 0',
//         }}
//       >
//         PROJECT Status Dashboard
//       </Typography>

//       {/* Calendar in the top right corner */}
//       <Box sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}>
//         <Calendar
//           onChange={setDate}
//           value={date}
//           calendarType="US"
//           style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
//         />
//       </Box>

//       <Grid container spacing={2}>
//         {[
//           { img: all, title: 'Total', value: 400, color: '#3f51b5' },
//           { img: process, title: 'In Progress', value: 300, color: '#1976d2' },
//           { img: pending, title: 'Pending', value: 300, color: '#795548' },
//           { img: accept, title: 'Completed', value: 300, color: '#4caf50' },
//         ].map((item, index) => (
//           <Grid item xs={12} md={3} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 padding: 2,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'flex-start',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 marginTop: 2,
//                 borderRadius: 3,
//                 bgcolor: '#ffffff',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
//                 },
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 style={{
//                   width: '60px',
//                   height: '60px',
//                   marginRight: '16px',
//                   filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
//                 }}
//               />
//               <div style={{ textAlign: 'left', color: item.color }}>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                   {item.title}
//                 </Typography>
//                 <Typography variant="h5" sx={{ fontWeight: '600' }}>
//                   {item.value}
//                 </Typography>
//               </div>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
//         <Box sx={{ textAlign: 'center', flex: 1, marginRight: 1, boxShadow: 5, borderRadius: 3, bgcolor: '#f9f9f9', p: 2, height: '380px' }}>
//           <Typography variant="h5" sx={{ marginBottom: 2 }}>Project Process</Typography>
//           <PieChart width={400} height={300}>
//             <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={110} fill="#8884d8" dataKey="value">
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </Box>

//         <Box sx={{ textAlign: 'center', flex: 1, marginLeft: 1, boxShadow: 5, borderRadius: 3, bgcolor: '#f9f9f9', p: 2 }}>
//           <Typography variant="h5" sx={{ marginBottom: 2 }}>Project Status</Typography>
//           <BarChart width={400} height={300} data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#2F63A0" />
//           </BarChart>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Dashboard;
