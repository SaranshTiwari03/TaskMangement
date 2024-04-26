import {Outlet} from "react-router-dom";
import {useState, useEffect} from 'react';
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Sidebar2 from "../Components/Sidebar2";


const Layout=()=>{
  const [Headercontent,setHeadercontent]= useState();
  const [Sidecontent,setSidecontent]= useState();

  useEffect(()=>{  
    
    if(localStorage.getItem("role")==="admin"){
    setHeadercontent(
        <>
      <Topbar/>
      
      </>
    )
    setSidecontent(
      <>
        <Sidebar2/>
      </>
    )
    }else if(localStorage.getItem("role")==="user"){
    setHeadercontent(
    <>
      <Topbar/>
      
    </>
    )
    setSidecontent(
      <>
        <Sidebar2/>
      </>
    )
    }else{
    setHeadercontent(<>
    

    {/* <nav class="navbar">
        <h1>TMS</h1>
        <ul class="nav-links">
            <li><a href="#"><Link className="Nlinks" to="Home">Home</Link></a></li>
            <li ><a href="#"><Link to="register" className="Nlinks" >Register</Link></a></li>
            <li ><a href="#"><Link to="login" className="Nlinks" >Login</Link></a></li>
        </ul>
    </nav> */}

</>
    )
    setSidecontent(
      <>
        
      </>
    )
}


})



return(
    <>
    

      {Headercontent}
        
        <div className="displayscreen">
           <div classname="sidecontent">{Sidecontent}</div> 
            <Outlet className="outlet"/>
        </div>

    </>
)

}

export default Layout;



