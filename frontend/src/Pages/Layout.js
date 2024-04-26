import {Outlet} from "react-router-dom";
import {useState, useEffect} from 'react';
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
        setHeadercontent(<></>)
        setSidecontent(<></>)
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



