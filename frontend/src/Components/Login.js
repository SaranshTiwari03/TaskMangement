import "../StyleComponents/Login.css"; // Importing your CSS file for styling
import { useState } from 'react'; // Importing useState hook from React
import axios from 'axios'; // Importing axios for making HTTP requests
import {_apiurluser } from '../APIurlpath/_apiurl'; // Importing API URL for users
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom

function Login() {
  
  const navigate= useNavigate(); // Initializing useNavigate hook for navigation
  const [ output , setOutput ] = useState(); // Initializing state for output message
  const [ email , setEmail ] = useState(null); // Initializing state for email
  const [ password , setPassword ] = useState(null); // Initializing state for password

  // Function to handle form submission
  const handleSubmit=()=>{
    var userDetails={"email":email,"password":password};
    if(email==="") { 
      setOutput("Email required"); // Setting output message for empty email
    } else if(password==="") { 
      setOutput("Password required"); // Setting output message for empty password
    } else {
      axios.post(_apiurluser+"login",userDetails).then((response)=>{
        if(response.data.token!=="error") {
          let user=response.data.userDetails;
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",user._id);
          localStorage.setItem("name",user.name);
          localStorage.setItem("email",user.email);
          localStorage.setItem("mobile",user.mobile);
          localStorage.setItem("gender",user.gender);
          localStorage.setItem("image",user.image);
          localStorage.setItem("role",user.role);
          localStorage.setItem("info",user.info);
          user.role==="admin"?navigate("/admin"):navigate("/user"); // Redirecting based on user role
        } else {
          setOutput("Invalid user or verify your account..."); // Setting output message for invalid user
          setEmail("");
          setPassword("");
        }
      });
    }
  };

  // Function to navigate to registration page
  const NavRegistration=()=>{
    navigate("/register");
  };

  return(
    <>
      <div className="top-bar1">
        <div className="logo-section">
          <img src="./images/logo task_1@2x.png" width="150px" alt="Logo" />
        </div> 
        <div className="notification-section">
          <div onClick={NavRegistration} className="Nav-Button">Sign Up</div>
        </div>
      </div>
    
      <div className="login">
        <center>
          <font style={{"color":"//#123D52"}}>{output}</font>
          <div className="form">
            <div class="title_container">
              <p class="title">Login to your Account</p>
              <span class="subtitle">Get started with our app, just log in to your account and enjoy the experience.</span>
            </div>
            <div className="flex-column">
              <label for="email">Email address:</label>
            </div>
            <div className="inputForm">
              <i class="fa-solid fa-at" style={{color: "#000000"}}></i>
              <input type="text" className="input" placeholder="Enter your Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
                
            <div className="flex-column">
              <label for="pwd">Password:</label>
            </div>
            <div className="inputForm">
              <i class="fa-solid fa-lock" style={{color: "#000000"}}></i>
              <input type="password" className="input" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
                
            <div className="flex-row">
              <div>
                <input type="checkbox" />
                <label>Remember me </label>
              </div>
              <span className="span">Forgot password?</span>
            </div>
                
            <button onClick={handleSubmit} className="button-submit">Sign In</button>
                
            <p className="p">Don't have an account? <span onClick={NavRegistration} className="span">Sign Up</span></p>
                
            <p className="p line">Or With</p>
                
            <div className="flex-row">
              <button className="btn google"><img src="./Images/google.png" width="18px" alt="" />Google</button>
                    
              <button className="btn apple"><i class="fa-brands fa-apple" style={{color: "#000000"}}></i> Apple</button>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Login;
