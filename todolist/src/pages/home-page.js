import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from "../components/sidebar";

function Home(){
    return(
      
        <div>
        <SideBar/>
        </div>
  
      
    );
}

export default Home;