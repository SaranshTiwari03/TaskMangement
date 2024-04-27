import React, { useState, useEffect } from "react";
import axios from "axios";
import { _apiurluser } from '../APIurlpath/_apiurl';

function TableAD() {
    const [taskData, setTaskData] = useState([]); // State to store task data
    let SNo = 0; // Variable to store the serial number

    // Function to fetch task data from the server
    const loadData = () => {
        axios.get(_apiurluser + "Display").then((res) => {
            setTaskData(res.data);
        });
    };

    // Load data when the component mounts
    useEffect(() => {
        loadData();
    }, []);

    // Map through taskData and render table rows
    const ans = taskData.map((key) => {
        SNo = SNo + 1; // Increment the serial number
        if(key.role==="user"){
        return (
            <tbody key={key._id}>
                <tr>
                    <td>{SNo}</td>
                    <td>{key.name}</td>
                    <td>{key.email}</td>
                    <td>{key.role}</td>
                    <td>{key.gender}</td>
                </tr>
            </tbody>
        );
        }
    });

    // Render the component
    return (
        <>
            <div className='tableUH'>
                <div className="panel-body table-responsive TableTask">
                    <h1>User <span className="text-primary">Table</span></h1>
                    <table className="table table-bordered">
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
    );
}

export default TableAD;
