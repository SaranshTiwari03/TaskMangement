import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import axios from "axios"; // Importing axios for making HTTP requests
import "../StyleComponents/Message.css"; // Importing your CSS file for styling
import {_apiurlmessage } from '../APIurlpath/_apiurl'; // Importing API URL for messages

const Latestmessage = () => {
  const [input, setInput] = useState([]); // Initializing state for input data
  var total=0;
  var message="";

  // Function to load message data
  const LoadData = () => {
    let url = _apiurlmessage + "display";
    axios.get(url).then((res) => {
      setInput(res.data); // Setting input data with fetched data
    });
  };

  useEffect(()=>{
    LoadData(); // Loading data on component mount
  },[]);



  // Mapping input data to display the latest message
  const ans = input.map((key,i)=>{
    total++;
    if(total=== input.length ){
      message=key.message.slice(0,60); // Slicing message to display only the first 60 characters
      return(
          <>
              <h6>Latest<span className="text-success">  Message</span></h6>
              <p>From: {key.uname}</p>
              <h5><span className="text-primary">Message:</span>{message}...</h5>
          </>
      );
    }
  });

  return (
    <>
      <div className="lastestmessage">
        {ans} {/* Rendering the latest message */}
      </div>
    </>
  );
};

export default Latestmessage;