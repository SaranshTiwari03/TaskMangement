import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import Layout from "./Pages/Layout"; // Importing Layout component
import Insert from "./Components/Insert"; // Importing Insert component
import Display from "./Components/Display"; // Importing Display component
import Edit from "./Components/Edit"; // Importing Edit component
import Register from "./Components/Register"; // Importing Register component
import Login from "./Components/Login"; // Importing Login component
import AdminHome from "./Components/AdminHome"; // Importing AdminHome component
import UserHome from "./Components/UserHome"; // Importing UserHome component
import Manageusers from "./Components/ManageUsers"; // Importing ManageUsers component
import Prioritylist from "./Components/priorList"; // Importing Prioritylist component
import Message from "./Components/Message"; // Importing Message component
import MessageDisplay from "./Components/MessageDisplay"; // Importing MessageDisplay component
import Descript from "./Components/Descript"; // Importing Descript component

const App = () => {
  return (
    <>
      {/* Setting up routing using BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            {/* Route for default page with Layout */}
            <Route index element={<Login/>} />
            {/* Route for login page */}
            <Route path="insert" element={<Insert/>} />
            {/* Route for insert page */}
            <Route path="display" element={<Display/>} />
            {/* Route for display page */}
            <Route path="edit/:id" element={<Edit/>} />
            {/* Route for edit page */}
            <Route path="register" element={<Register/>} />
            {/* Route for register page */}
            <Route path="login" element={<Login/>} />  
            {/* Route for login page */}
            <Route path="manageuser" element={<Manageusers/>} />
            {/* Route for manage user page */}
            <Route path="priority" element={<Prioritylist/>} />
            {/* Route for priority list page */}
            <Route path="Des/:description/:date/:descriptiondetail" element={<Descript/>} />
            {/* Route for description page */}
            <Route path="admin" element={<AdminHome/>} >
              {/* Route for admin home page */}
              <Route index element={<AdminHome/>}/>
              {/* Default route for admin home */}
            </Route>
            <Route path="user" element={<UserHome/>} > 
              {/* Route for user home page */}
              <Route index element={<UserHome/>}/>
              {/* Default route for user home */}
            </Route>
            <Route path="message" element={<Message/>} /> 
            {/* Route for message page */}
            <Route path="messagedisplay" element={<MessageDisplay/>} /> 
            {/* Route for message display page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
