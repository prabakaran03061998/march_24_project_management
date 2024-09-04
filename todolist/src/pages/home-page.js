import React from "react";
import SideBar from "../components/sidebar";
import "../style/Home-page.css";
import Navbar from "../components/NavBar";
import PageContent from "../components/PageContent";

function Home(){
    return(
    <div className="home-container">
        
        <SideBar className="sidebar"/>
        <div className="table-container">
            <Navbar/>
            <PageContent/>
        </div>

    </div>
      
    );
}

export default Home;