
import React from 'react';
import DashboardPage from '../pages/dashboard-page';
import BoardPage from '../pages/Status-page';
import ReleasePage from '../pages/Release-page';
import SettingsPage from '../pages/Setting-page';
import Userpage from '../pages/User-page';

const Task= React.lazy(()=>import('../pages/task-page'))

const routes=[
    {path:"/", exact:true, name:'dashboard', element:<DashboardPage/>},
    {path:"/task", name:'Home', element:<Task/>},
    {path:"/status", name:'Board', element:<BoardPage/>},
    {path:"/release", name:'Release', element:<ReleasePage/>},
    {path:"/Settings", name:'Settings', element:<SettingsPage/>},
    {path:"/User", name:'User', element:<Userpage/>},

]
 
export default routes;