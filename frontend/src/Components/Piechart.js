import CanvasJSReact from '@canvasjs/react-charts'; // Importing CanvasJSReact for pie chart
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import axios from "axios"; // Importing axios for making HTTP requests
import { _apiurluser } from '../APIurlpath/_apiurl'; // Importing API URL for user data

var CanvasJSChart = CanvasJSReact.CanvasJSChart; // Declaring CanvasJSChart component
const Piechartadmin = () => {
    var verified = 0; // Variable to count verified users
    var notverified = 0; // Variable to count not verified users
    var total = 0; // Variable to count total users
    const [taskData, setTaskData] = useState([]); // State to manage user data

    // Function to load user data from the server
    const loadData = () => {
        axios.get(_apiurluser + "Display").then((res) => {
            setTaskData(res.data);
        });
    };

    // Load data on component mount
    useEffect(() => {
        loadData();
    }, []);

    // Mapping the user data to count verified and not verified users
    const ans = taskData.map((key) => {
        total++;
        if (key.role === "user" && key.status === 1) {
            verified = verified + 1;
        }
        if (key.role === "user" && key.status === 0) {
            notverified = notverified + 1;
        }
        return (
            <>
            </>
        );
    });

    // Options for the pie chart
    const options = {
        animationEnabled: true,
        width: 300,
        height: 300,
        title: {
            text: "User Verification"
        },
        data: [{
            type: "pie",
            startAngle: 0,
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 15,
            indexLabelPlacement: "inside",
            indexLabel: "{y}",
            dataPoints: [
                { y: verified, label: "Verified" },
                { y: notverified, label: "Not verified" },
            ]
        }]
    };

    return (
        <div className='Piechart'>
            <CanvasJSChart className="chart-div" options={options} />
        </div>
    );
};

export default Piechartadmin;
