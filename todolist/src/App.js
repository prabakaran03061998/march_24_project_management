import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import HomePage from './pages/home-page';
import BasicTable from './pages/Status-page';



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<HomePage/>}/>
        <Route path="/Board" element={<BasicTable />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
