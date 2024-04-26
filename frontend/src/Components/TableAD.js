import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
import { _apiurluser } from '../APIurlpath/_apiurl';

function TableAD() {
    const[taskData,setTaskData]=useState([]);
    var SNo=0;
    const loadData=()=>{
        axios.get(_apiurluser + "Display").then((res)=>{
        setTaskData(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    },[])

    const ans =taskData.map((key)=>{
        SNo= SNo+1;
        
        return(
            <>
                <tbody>
                    <tr>
                        <td>{SNo}</td>
                        <td>{key.name}</td>
                        <td>{key.email}</td>
                        <td>{key.role}</td>
                        <td>{key.gender}</td> 
                    </tr>
                </tbody>
            </>
        )
        
    })

  return (
    <>  
        <div className='tableUH'>
            <div className="panel-body table-responsive TableTask">
                <h1 >User<span class="text-primary"> Table</span></h1> 
                                    <table className="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <th>SNO</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Gender</th>
                                            </tr>
                                        </thead>
                                        {ans}
                                           
                                    </table>
                                </div>
                            </div>
    </>
  )
}

export default TableAD
