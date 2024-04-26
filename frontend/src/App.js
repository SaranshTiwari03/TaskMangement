import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Insert from "./Components/Insert";
import Home from "./Components/Home";
import Display from "./Components/Display";
import Edit from "./Components/Edit";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AdminHome from "./Components/AdminHome"
import UserHome from "./Components/UserHome"
import Description from "./Components/Description";
import Manageusers from "./Components/ManageUsers";
import Prioritylist from "./Components/priorList";
import Message from "./Components/Message";


const App=()=>{
  return(
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>} />
          <Route path="home" element={<Home/>} />
          <Route path="insert" element={<Insert/>} />
          <Route path="display" element={<Display/>} />
          <Route path="edit/:id" element={<Edit/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />  
          <Route path="manageuser" element={<Manageusers/>} />
          <Route path="priority" element={<Prioritylist/>} />
          <Route path="admin" element={<AdminHome/>} >
            <Route index element={<AdminHome/>}/>
          </Route>
          <Route path="user" element={<UserHome/>} > 
               <Route index element={<UserHome/>}/>
          </Route>
          <Route path="message" element={<Message/>} /> 
          <Route path="/Des/:description/:date/:descriptiondetail" element={<Description />} />
          </Route>
          

        </Routes>
      </BrowserRouter>
      
     
    </>
  )
}

export default App