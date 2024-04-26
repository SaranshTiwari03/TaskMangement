import { useState , useEffect } from 'react'; 
import axios from 'axios';
import {_apiurluser } from '../Components/APIurlpath/_apiurl';


const Manageusers=()=> {

  const [userDetails , setUserDetails] = useState([]); 
  

  const loadData=()=>{
    axios.get(_apiurluser+"fetch?role=user").then((response)=>{
        setUserDetails(response.data); 
    })
  }

  useEffect(()=>{
    loadData();
},[]);      

  const manageuserstatus=(_id,s)=>{
    if(s==="block")
    {
        let updateDetails={"condition_object":{"_id":_id},"set_condition":{"status":0}};
        axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            loadData();
        }).catch((err)=>{
            console.log(err);
        });            
    }   
    else if(s==="verify")
    {
        let updateDetails={"condition_object":{"_id":_id},"set_condition":{"status":1}};
        axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            loadData();
        }).catch((err)=>{
            console.log(err);
        });            
    }
    else
    {
        let deleteDetails={"data":{"_id":_id}};
        axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
            loadData();
        }).catch((err)=>{
            console.log(err);
        });            
    }
  }
    
  return (
            <>
                

                <div  style={{width:"70%",margin:"auto" }}>
                    <h1 >
                            View & Manage <span class="text-primary">User Details</span>
                    </h1>
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
                                {
                                userDetails.map((row)=>(
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
                                ))    
                                }
                                </tbody>
                         </table>
                </div>
                        
                      
            </>
);
}

export default Manageusers;