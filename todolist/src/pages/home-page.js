import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from "../components/sidebar";

function Home(){
    return(
        <BrowserRouter>
        <div>
        <SideBar/>
        </div>
        </BrowserRouter>
      
    );
}

export default Home;