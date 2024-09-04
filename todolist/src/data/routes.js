
import React,{Component} from 'react';
import DashboardPage from '../pages/dashboard-page';

const Task= React.lazy(()=>import('../pages/task-page'))

const routes=[
    {path:"/", exact:true, name:'dashboard', element:<DashboardPage/>},
    {path:"/task", name:'Home', element:<Task/>},

]

export default routes;