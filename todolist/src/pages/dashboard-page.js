// // import React, { useEffect, useState } from 'react';
// // import { Container, Grid, Paper, Typography, Box,} from '@mui/material';
// // import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';
// // import process from './images/process.png'
// // import pending from'./images/pending.png';
// // import accept from './images/accept.png';
// // import all from './images/all.png';
// // import { DASHBOARD_GET } from '../api-services/API-URL';
// // import axios from 'axios';



// // ///// set an arry for paper
// // const data = [
// //   { name: 'Total', value: 400 },
// //   { name: 'Inprogress', value: 300 },
// //   { name: 'pending', value: 300 },
// //   { name: 'completed', value: 300 },
// // ];

// // ///////

// // ///////// passing colors for chart //////

// // const COLORS = ['navy', '#4E91DD', '#E34A46', '#32C3A4'];



// // function Dashboard() {
// //   const [userData, setUserData] = useState([]);
// //   const getAllUsers = () => {
// //     axios({
// //       url: DASHBOARD_GET,
// //       method: "get",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     })
// //       .then((res) => {
// //         setUserData(res.data);
// //       })
// //       .catch((err) => {
  
// //       });
// //   };

// //   useEffect(() => {
// //     getAllUsers();
// //   }, []);
// //     console.log(userData);
    
      
  
// //   return (
// //     <Container>
    
// //       <Typography variant="h4" gutterBottom align="center" color='black' fontFamily={'inherit'}>
// //         Status Dashboard
// //       </Typography>
// //       <Grid container spacing={3}>
      
// //         <Grid item  xs={12} md={3}>
// //           <Paper elevation={3}   sx={{ padding: 2, textAlign: 'center',color:'blue',display:'flex',  boxShadow: 5,borderColor: 'blue',marginTop: 5  }}>
// //           <img src={all} alt="In Progress" style={{ width: '60px', height: 'px', marginRight: '16px' }} />
// //           <div style={{ textAlign: 'center', color: 'blue' }}>
            
// //             <Typography variant="h5" sx={{fontSize:'24px',textAlign:'center' }}>Total</Typography>
// //             <Typography variant="h4">400</Typography>
// //             </div>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={12} md={3}>
// //   <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center', boxShadow: 5 ,marginTop: 5}}>
// //     <img src={process} alt="In Progress" style={{ width: '60px', height: 'px', marginRight: '16px' }} />
// //     <div style={{ textAlign: 'center', color: 'navy' }}>
// //       <Typography variant="h5">In Progress</Typography>
// //       <Typography variant="h4">300</Typography>
// //     </div>
// //   </Paper>
// // </Grid>
// //         <Grid item xs={12} md={3}>
// //           <Paper elevation={3} sx={{ padding: 2, display:'flex', textAlign: 'center',boxShadow: 5 ,marginTop: 5}}>
// //           <img src={pending} alt="In Progress" style={{ width: '60px', height: 'px', marginRight: '16px' }} />
// //           <div style={{ textAlign: 'center', color: 'brown' }}>
// //             <Typography variant="h5">Pending</Typography>
// //             <Typography variant="h4">300</Typography>
// //             </div>
// //           </Paper>
          
// //         </Grid>

// //         <Grid item xs={12} md={3}>
// //           <Paper elevation={3} sx={{ padding: 2, display:'flex', textAlign: 'center',color:'orange', boxShadow: 5,marginTop: 5 }}>
// //           <img src={accept} alt="In Progress" style={{ width: '60px', height: '', marginRight: '16px',}} />
// //           <div style={{ textAlign: 'center', color: 'green' }}>
// //             <Typography variant="h5">Completed</Typography>
// //             <Typography variant="h4">300</Typography>
// //             </div>
// //           </Paper>
// //         </Grid>

// //       </Grid>
      

// // {/************ char desingn   *********** */ }


// //         <Box sx={{display:'flex',justifyContent:'space-between',boxShadow: '0 4px 8px rgba(0, 2, 3, )'}}  >

// //       <Box sx={{ marginTop: 7, textAlign: 'center',color:'black',boxShadow: 5}}>
      
// //          <PieChart width={500} height={400}>
// //           <Pie
// //             data={data}
// //             cx="50%"
// //             cy="50%"
// //             labelLine={false}
// //             outerRadius={150}
// //             fill="#8884d8"
// //             dataKey="value"
// //           >
// //             {data.map((entry, index) => (
// //               <Cell key={`cell-${index}`} fill={COLORS[index]} />
// //             ))}
// //           </Pie>
// //           <Tooltip />
// //           <Legend />
// //         </PieChart>        
// //       </Box>

// //       {/* {/* Bar Chart  */}
// //        <Box sx={{ marginTop: 7, textAlign: 'center', justifyContent:"flex-end",boxShadow: 5,marginleft:3}}> 
// //          {/* <Typography variant="h4" gutterBottom color='black'>
// //           Status Distribution
// //         </Typography> */}
// //         <BarChart width={600} height={400} data={data}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="name" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Bar dataKey="value" fill="#2F63A0" />
// //         </BarChart> 
// //       </Box> 
// //       </Box>
// //     </Container>
// //   );
// // }

// // export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import { Container, Grid, Paper, Typography, Box } from '@mui/material';
// import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';
// import process from './images/process.png';
// import pending from './images/pending.png';
// import accept from './images/accept.png';
// import all from './images/all.png';
// import { DASHBOARD_GET } from '../api-services/API-URL';
// import axios from 'axios';

// // Define colors for the charts
// const COLORS = ['navy', '#4E91DD', '#E34A46', '#32C3A4'];

// function Dashboard() {
//   const [userData, setUserData] = useState([]);

// //   const getAllUsers = () => {
// //     axios.get(DASHBOARD_GET, {
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //       .then((res) => {
// //         setUserData(res.data);
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   };

// //   useEffect(() => {
// //     getAllUsers();
// //   }, []);

// //   // Prepare data for the charts
// //   const chartData = userData.map(item => ({
// //     name: item.status, // Adjust according to your data structure
// //     value: item.count   // Adjust according to your data structure
// //   }));
// // console.log(chartData);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom align="center" color='black' fontFamily={'inherit'}>
//         Status Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {/* Card for Total */}
//         <Grid item xs={12} md={3}>
//           <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', color: 'blue', display: 'flex', boxShadow: 5, borderColor: 'blue', marginTop: 5 }}>
//             <img src={all} alt="Total" style={{ width: '60px', marginRight: '16px' }} />
//             <div style={{ textAlign: 'center', color: 'blue' }}>
//               <Typography variant="h5" sx={{ fontSize: '24px', textAlign: 'center' }}>Total</Typography>
//               <Typography variant="h4">{userData.find(item => item.status === 'Total')?.count || 0}</Typography>
//             </div>
//           </Paper>
//         </Grid>
//         {/* Other status cards (In Progress, Pending, Completed) */}
//         <Grid item xs={12} md={3}>
//           <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center', boxShadow: 5, marginTop: 5 }}>
//             <img src={process} alt="In Progress" style={{ width: '60px', marginRight: '16px' }} />
//             <div style={{ textAlign: 'center', color: 'navy' }}>
//               <Typography variant="h5">In Progress</Typography>
//               <Typography variant="h4">{userData.find(item => item.status === 'In Progress')?.count || 0}</Typography>
//             </div>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Paper elevation={3} sx={{ padding: 2, display: 'flex', textAlign: 'center', boxShadow: 5, marginTop: 5 }}>
//             <img src={pending} alt="Pending" style={{ width: '60px', marginRight: '16px' }} />
//             <div style={{ textAlign: 'center', color: 'brown' }}>
//               <Typography variant="h5">Pending</Typography>
//               <Typography variant="h4">{userData.find(item => item.status === 'Pending')?.count || 0}</Typography>
//             </div>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Paper elevation={3} sx={{ padding: 2, display: 'flex', textAlign: 'center', color: 'orange', boxShadow: 5, marginTop: 5 }}>
//             <img src={accept} alt="Completed" style={{ width: '60px', marginRight: '16px' }} />
//             <div style={{ textAlign: 'center', color: 'green' }}>
//               <Typography variant="h5">Completed</Typography>
//               <Typography variant="h4">{userData.find(item => item.status === 'Completed')?.count || 0}</Typography>
//             </div>
//           </Paper>
//         </Grid>
//       </Grid>

//       {/* Charts Section */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0 4px 8px rgba(0, 2, 3, )' }}>
//         <Box sx={{ marginTop: 7, textAlign: 'center', color: 'black', boxShadow: 5 }}>
//           <PieChart width={500} height={400}>
//             <Pie
//               data={chartData}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               outerRadius={150}
//               fill="#8884d8"
//               dataKey="value"
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </Box>

//         <Box sx={{ marginTop: 7, textAlign: 'center', justifyContent: "flex-end", boxShadow: 5, marginLeft: 3 }}>
//           <BarChart width={600} height={400} data={chartData}>
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



