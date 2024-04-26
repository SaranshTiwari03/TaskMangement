import { useState, useEffect } from "react";
import axios from "axios";
import "../StyleComponents/Message.css"; 
import {_apiurlmessage } from '../APIurlpath/_apiurl';



const Latestmessage = () => {
  const [input, setInput] = useState([]);
  var last={};
    var total=0;
    var uname="";
    var message="";
  const LoadData = () => {
    let url = _apiurlmessage + "display";
    axios.get(url).then((res) => {
      setInput(res.data);
    });
  };

  useEffect(()=>{
    LoadData();
  },[])

  last=input[input.length-1];
  console.log(input.length-1)
  
  const ans =input.map((key,i)=>{
    total++;
     if(total=== input.length ){

        message=key.message.slice(0,60)
    return(
        <>
            <h6>Latest<span className="text-success">  Message</span></h6>
            <p>From: {key.uname}</p>
            <h5><span className="text-primary">Message:</span>{message}...</h5>
            
        </>
    )
  }
})

  return (
    <>
        <div className="lastestmessage">
            {ans}
        </div>
    </>
  );
};

export default Latestmessage;