
import React,{Component} from 'react';
import DashboardPage from '../pages/dashboard-page';
import BoardPage from '../pages/Status-page';
import ReleasePage from '../pages/Release-page';

const Task= React.lazy(()=>import('../pages/task-page'))

const routes=[
    {path:"/", exact:true, name:'dashboard', element:<DashboardPage/>},
    {path:"/task", name:'Home', element:<Task/>},
    {path:"/status", name:'Board', element:<BoardPage/>},
    {path:"/release", name:'Board', element:<ReleasePage/>},

]
 
export default routes;