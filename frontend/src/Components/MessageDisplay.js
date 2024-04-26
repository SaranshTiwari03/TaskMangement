import { useState, useEffect } from "react";
import axios from "axios";
import "../StyleComponents/Message.css"; 
import { useNavigate } from "react-router-dom";
import {_apiurlmessage } from '../APIurlpath/_apiurl';
import { MdDelete } from "react-icons/md";


const MessageDisplay = () => {
  const [input, setInput] = useState([]);
  const navigate= useNavigate();
  

  const LoadData = () => {
    let url = _apiurlmessage + "display";
    axios.get(url).then((res) => {
      setInput(res.data);
    });
  };

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


  useEffect(()=>{
    LoadData();
  },[])

  const closeModal = () => {
    navigate(-1);
  };

  
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
    
})

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