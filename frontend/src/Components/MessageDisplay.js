import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import axios from "axios"; // Importing axios for making HTTP requests
import "../StyleComponents/Message.css"; // Importing CSS for styling
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import {_apiurlmessage } from '../APIurlpath/_apiurl'; // Importing API URL for messages
import { MdDelete } from "react-icons/md"; // Importing MdDelete icon from react-icons library

const MessageDisplay = () => {
  const [input, setInput] = useState([]); // State to manage message input
  const navigate= useNavigate(); // Function for navigation

  // Function to load message data from the server
  const LoadData = () => {
    let url = _apiurlmessage + "display";
    axios.get(url).then((res) => {
      setInput(res.data);
    });
  };

  // Function to delete a message
  const del = (id) => {    
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            const url = _apiurlmessage+"Delete";
            axios.post(url, { id: id })
                .then((res) => {
                    LoadData();
                })
                .catch((error) => {
                    console.error("Error deleting item:", error);
                });
        }
    };

  // Load data on component mount
  useEffect(()=>{
    LoadData();
  },[])

  // Function to close the modal
  const closeModal = () => {
    navigate(-1);
  };

  // Mapping the message data to table rows
  const ans =input.map((key)=>{
    return(
        <>
            <tbody>
                <tr>
                    <td>{key.uname}</td>
                    <td>{key.message}</td>
                    <td><button onClick={()=>{del(key._id)}}><MdDelete style={{fontSize:"25px"}} /></button></td>
                </tr>
            </tbody>
        </>
    )
  });

  return (
    <div className="modal-overlay">
      <div className="insert-modal">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span> 
        <div className="insert-task">
          <div className='tableUH'>
            <div className="panel-body table-responsive TableTask">
              <h3 >User<span class="text-primary"> Message</span></h3> 
              <table className="table table-bordered" >
                <thead>
                  <tr>
                    <th>UserName</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {ans}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDisplay;
