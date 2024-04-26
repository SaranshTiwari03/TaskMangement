import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";

function TableUH() {
    const[taskData,setTaskData]=useState([]);
    var SNo=0;
    const loadData=()=>{
        axios.get("http://localhost:8000/task/Display").then((res)=>{
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
                        <td>{key.title}</td>
                        <td>{key.description}</td>
                        <td>{key.status}</td>
                        <td>{key.date}</td>
                    </tr>
                </tbody>
            </>
        )
        
    })

  return (
    <>  
        <div className='tableUH'>
            <div className="panel-body table-responsive TableTask">
                <h1 >Task<span class="text-primary"> Table</span></h1> 
                                    <table className="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <th>SNO</th>
                                                <th>Task</th>
                                                <th>Desicription</th>
                                                <th>Status</th>
                                                <th>Due Date</th>
                                            </tr>
                                        </thead>
                                        {ans}
                                           
                                    </table>
                                </div>
                            </div>
    </>
  )
}

export default TableUH
