import styled from 'styled-components';
import {Link,Outlet, useNavigate} from "react-router-dom";
import "../StyleComponents/Sidebar.css";
import {useState,useEffect} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsFillHouseFill, BsClipboardData, BsCalendar, BsPeople, BsChatDots, BsGearFill,BsPower } from 'react-icons/bs';

const SidebarWrapper = styled.div`
    
    left: ${props => (props.isOpen ? '0' : '-280px')};
    
  `;
  
  const ToggleButton = styled.button`
    left: ${props => (props.isOpen ? '240px' : '0px')};
  `;
  
const Sidebar=()=>{
    const myNav=useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const [Headercontent,setHeadercontent]= useState();
    const toggleSidebar = () => {
    setIsOpen(!isOpen);
    };

    

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
    if(localStorage.getItem("role")=="admin"){
        setHeadercontent(
            <>
          <li><BsFillHouseFill className="icon" /><a href="#"><Link to="admin" className="Nlinks" >Dashboard</Link></a></li>
          <li><BsClipboardData className="icon" /><a href="#"><Link to="insert" className="Nlinks" >Insert Task</Link></a></li>
          <li><BsClipboardData className="icon" /><a href="#"><Link to="display" className="Nlinks" >Display Task</Link></a></li> 
          <li><BsCalendar className="icon" /><a href="#">Calendar</a></li>
          <li><BsPeople className="icon" /><a href="#"><Link to="manageuser"  className="Nlinks" >Team</Link></a></li>
          <li><BsChatDots className="icon" /><a href="#">Messages</a></li>
          <li><BsGearFill className="icon" /><a href="#">Settings</a></li>

          </>
)}else if(localStorage.getItem("role")=="user"){
    setHeadercontent(
        <>
      <li><BsFillHouseFill className="icon" /><a href="#"><Link to="user" className="Nlinks" >Dashboard</Link></a></li>
      <li><BsClipboardData className="icon" /><a href="#"><Link to="display" className="Nlinks" >Display Task</Link></a></li> 
      <li><BsCalendar className="icon" /><a href="#"><Link to="priority" className="Nlinks" >Calender</Link></a></li>
      <li><BsChatDots className="icon" /><a href="#">Messages</a></li>
      <li><BsGearFill className="icon" /><a href="#">Settings</a></li>

      </>
)}


})


    return(
        <>
        <ToggleButton className="arrow" onClick={toggleSidebar}>
        {isOpen ? <IoIosArrowBack size={24} /> : <IoIosArrowForward size={24} />}
    </ToggleButton>
    <SidebarWrapper className='sidebar' isOpen={isOpen}>
    
      
      <div className="sidebar-content">
        <div className="sidebar-header">
          <img src="logo.png" alt="Logo" className="logo" />
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
      
    </SidebarWrapper>
        
        
        </>
    )
}


export default Sidebar;