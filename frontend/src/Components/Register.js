import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {_apiurluser } from "./APIurlpath/_apiurl";
import { useNavigate } from 'react-router-dom';


function Register() {
    const [ output , setOutput ] = useState();
    const [ name , setName ] = useState();     
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ gender , setGender ] = useState();  
    const [ image , setImage] =useState();
    const navigate= useNavigate();

    const handleSubmit=()=>{
        var userDetails={"name":name,"email":email,"password":password,"gender":gender,"image":image}
        
        axios.post(_apiurluser+"save",userDetails).then((response)=>{
          setOutput(response.data.result);
          setName("");
          setEmail("");
          setPassword("");
          setImage("");
        }).catch((err)=>{
          console.log(err);
        })
    }

    const NavLogin=()=>{
        navigate("/login");
    }

  return (
    <div className='register'>
        <center>
            <font style={{"color":"//#123D52"}}>{output}</font>
          
            <div className="form1">

            <div class="title_container">
                <p class="title">Create a new account</p>
                <span class="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
            </div>
                <div className="flex-column1">
                    <label for="name">Name:</label>
                    
                    <div className="inputForm">
                        <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
                        <input type="text" className="input1" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="flex-column1">
                    <label for="email">Email:</label>
                    
                    <div className="inputForm">
                        <i class="fa-solid fa-at" style={{color: "#000000"}}></i>
                        <input type="email" className="input1" placeholder="Enter your Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="flex-column1">
                    <label for="pwd">Password:</label>
                    
                    <div className="inputForm">
                        <i class="fa-solid fa-lock" style={{color: "#000000"}}></i>
                        <input type="password" className="input1" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="flex-column1">
                    <label for="image">Image:</label> 
                    <div className="inputForm">
                        <input type="file" className="input2" placeholder="Enter your Password" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
            
                <div className="inputForm3">
                    <label className="labelgender" for="image">Gender:</label> 
                          Male <input type="radio" value="male" name="gender"
                    onChange={e => setGender(e.target.value)} />
                          &nbsp;&nbsp;
                          Female <input type="radio" value="female" name="gender"
                    onChange={e => setGender(e.target.value)} />
                          &nbsp;&nbsp;
                </div>
                 <br/>
                <div className="flex-row">
                    <div>
                    <input type="checkbox" />
                    <label>Remember me </label>
                    </div>
                    <span className="span">Forgot password?</span>
                </div>
                
                <button onClick={handleSubmit} className="button-submit">Sign Up</button>
                
                <p className="p">Already have an account? <span onClick={NavLogin} className="span">Log In</span></p>
                
                <p className="p line">Or With</p>
                
                <div className="flex-row">
                    <button className="btn google"><img src="./Images/google.png" width="18px" alt="" />Google</button>
                    
                    <button className="btn apple"><i class="fa-brands fa-apple" style={{color: "#000000"}}></i> Apple</button>
                </div>
            </div>
        </center>

      
    </div>
  )
}

export default Register
