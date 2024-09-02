import React from "react";
import SideBar from "../components/sidebar";
import BasicTable from "./Status-page";
import "../style/Home-page.css";
import Navbar from "../components/NavBar";

function Home(){
    return(
    <div className="home-container">
        
        <SideBar className="sidebar"/>
        {/* ********* ** Ststus Table ** ********** */}
        <div className="table-container">
            <Navbar/>
            <BasicTable />            
        </div>

    </div>
      
    );
}

export default Home;