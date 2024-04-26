
import {Link, useNavigate} from "react-router-dom";
import "../StyleComponents/Sidebar.css";
import {useState,useEffect} from 'react';

import { BsFillHouseFill, BsClipboardData,BsPeople, BsChatDots, BsGearFill,BsPower } from 'react-icons/bs';
import { MdLibraryAdd ,MdOutlineLowPriority } from "react-icons/md";
  
const Sidebar2=()=>{
    const myNav=useNavigate();
    const [Headercontent,setHeadercontent]= useState();

    const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("_id",);
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("address");
    localStorage.removeItem("city");
    localStorage.removeItem("gender");
    localStorage.removeItem("role");
    localStorage.removeItem("info");

    myNav("/login");
   }


   useEffect(()=>{
    if(localStorage.getItem("role")==="admin"){
        setHeadercontent(
            <>
          <li><BsFillHouseFill className="icon" /><a href="#"><Link to="admin" className="Nlinks" >Overview</Link></a></li>
          <li><MdLibraryAdd  className="icon" /><a href="#"><Link to="insert" className="Nlinks" >Insert Task</Link></a></li>
          <li><BsClipboardData className="icon" /><a href="#"><Link to="display" className="Nlinks" >Manage Task</Link></a></li> 
          <li><BsChatDots className="icon" /><a href="#"><Link to="messagedisplay" className="Nlinks" >Message</Link></a></li>
          <li><BsPeople className="icon" /><a href="#"><Link to="manageuser"  className="Nlinks" >Team</Link></a></li>

          </>
    )}else if(localStorage.getItem("role")==="user"){
        setHeadercontent(
            <>
          <li><BsFillHouseFill className="icon" /><a href="#"><Link to="user" className="Nlinks" >Overview</Link></a></li>
          <li><BsClipboardData className="icon" /><a href="#"><Link to="display" className="Nlinks" >Manage Task</Link></a></li> 
          <li><MdOutlineLowPriority  className="icon" /><a href="#"><Link to="priority" className="Nlinks" >Priority</Link></a></li>
          <li><BsChatDots className="icon" /><a href="#"><Link to="message" className="Nlinks" >Message</Link></a></li>
          <li><BsGearFill className="icon" /><a href="#">Settings</a></li>

          </>
    )}


})

    return(
        <>
        
    
      <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <img src="./Images/dashboard@2x.png" width="200px" alt="Logo" className="logo" />
        </div>
        <ul className="sidebar-menu">
        {Headercontent}
        </ul>
        <div onClick={handleLogout}  className="logout-container">
          <button  className="logout-button">
            <BsPower className="logout-icon" />
            Logout
          </button>
        </div>
      </div>
      </div>
      
    
        
        
        </>
    )
}


export default Sidebar2;