import React, { useState, useEffect } from "react";
import axios from "axios";
import { _apiurltask } from '../APIurlpath/_apiurl';

function TableUH() {
    const [taskData, setTaskData] = useState([]); // State to store task data
    let SNo = 0; // Variable to store the serial number

    // Function to fetch task data from the server
    const loadData = () => {
        axios.get(_apiurltask + "Display").then((res) => {
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

        return (
            <tbody key={key._id}>
                <tr>
                    <td>{SNo}</td>
                    <td>{key.title}</td>
                    <td>{key.description}</td>
                    <td>{key.status}</td>
                    <td>{key.date}</td>
                </tr>
            </tbody>
        );
    });

    // Render the component
    return (
        <>  
            <div className='tableUH'>
                <div className="panel-body table-responsive TableTask">
                    <h1>Task <span className="text-primary">Table</span></h1> 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        {ans}
                    </table>
                </div>
            </div>
        </>
    );
}

export default TableUH;
