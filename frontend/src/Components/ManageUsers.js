import { useState , useEffect } from 'react'; // Importing useState and useEffect hooks from React
import axios from 'axios'; // Importing axios for making HTTP requests
import {_apiurluser } from '../APIurlpath/_apiurl'; // Importing API URL for users

const Manageusers=()=> {

  const [userDetails , setUserDetails] = useState([]); // Initializing state for user details
  var Nouser;

  // Function to load user data
  const loadData = () => {
    axios.get(_apiurluser + "fetch?role=user")
      .then((response) => {
        setUserDetails(response.data); // Setting user details with fetched data
      })
      .catch((error) => {
        console.error('Error loading data:', error); // Logging error if data loading fails
      });
  };
  
  useEffect(()=>{
    loadData(); // Loading data on component mount
  },[]);      

  // Function to manage user status (block, verify, delete)
  const manageuserstatus=(_id,s)=>{
    if(s==="block") {
        let updateDetails={"condition_object":{"_id":_id},"set_condition":{"status":0}};
        axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            loadData(); // Reloading data after update
        }).catch((err)=>{
            console.log(err);
        });            
    } else if(s==="verify") {
        let updateDetails={"condition_object":{"_id":_id},"set_condition":{"status":1}};
        axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            loadData(); // Reloading data after update
        }).catch((err)=>{
            console.log(err);
        });            
    } else {
        let deleteDetails={"data":{"_id":_id}};
        axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
            loadData(); // Reloading data after deletion
        }).catch((err)=>{
            console.log(err);
        });            
    }
  }

  // Mapping user details to display in the table
  const ans=userDetails.map((row)=>{
    return(
        <>
            <tr>    
                <td>{row._id}</td>
                <td>{row.name}</td>   
                <td>{row.email}</td>
                <td>{row.gender}</td>
                <td>{row.info}</td>
                <td>
                {row.status === 0 &&
                    <a style={{"color":"green"}}  onClick={()=>{ manageuserstatus(row._id,"verify") }} >Verify User</a>
                }
                {row.status === 1 &&
                    <a style={{"color":"orange"}}  onClick={()=>{ manageuserstatus(row._id,"block") }} >Block User</a>
                }    
                </td>
                <td><a style={{"color":"red"}} onClick={()=>{ manageuserstatus(row._id,"delete") }} >Delete</a></td>
            </tr>
        </>
    )
  });

  // Checking if user details are empty to display appropriate message
  if(!userDetails.empty){
    Nouser=<></>
  } else{
    Nouser= <div><h1 > Register  A<span class="text-primary">User First</span></h1></div>
  }
    
  return (
    <>
      <div  style={{width:"70%",margin:"auto" }}>
        <h1 >
          View & Manage <span class="text-primary">User Details</span>
        </h1>
        {Nouser}
        <table class="table table-bordered" cellspacing="5" cellpadding="5">
          <thead> 
            <tr>
              <th>RegID</th>
              <th>Name</th>    
              <th>Email</th>
              <th>Info</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>    
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manageusers;
