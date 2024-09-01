import React from "react";
import SideBar from "../components/sidebar";
import BasicTable from "./Status-page";
import "../style/Home-page.css";

function Home(){
    return(
    <div className="home-container">
        
        <SideBar className="sidebar"/>

        {/* ********* ** Ststus Table ** ********** */}
        <div className="table-container">
            <BasicTable />
        </div>

    </div>
      
    );
}

export default Home;