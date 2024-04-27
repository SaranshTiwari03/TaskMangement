import CanvasJSReact from '@canvasjs/react-charts'; // Importing CanvasJSReact for pie chart
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import axios from "axios"; // Importing axios for making HTTP requests

var CanvasJS = CanvasJSReact.CanvasJS; // Importing CanvasJS for pie chart
var CanvasJSChart = CanvasJSReact.CanvasJSChart; // Importing CanvasJSChart component
const Piechart = () => {
    var Lowpriority = 0; // Variable to count low priority tasks
    var Midpriority = 0; // Variable to count medium priority tasks
    var Highpriority = 0; // Variable to count high priority tasks
    const [taskData, setTaskData] = useState([]); // State to manage task data

    // Function to load task data from the server
    const loadData = () => {
        axios.get("http://localhost:8000/task/Display").then((res) => {
            setTaskData(res.data);
        });
    };

    // Load data on component mount
    useEffect(() => {
        loadData();
    }, []);

    // Mapping the task data to count tasks based on priority
    const ans = taskData.map((key) => {
        if (key.priority === "High") {
            Highpriority = Highpriority + 1;
        }
        if (key.priority === "Medium") {
            Midpriority = Midpriority + 1;
        }
        if (key.priority === "Low") {
            Lowpriority = Lowpriority + 1;
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
            text: "Task priority"
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
                { y: Lowpriority, label: "Low Priority" },
                { y: Highpriority, label: "High Priority" },
                { y: Midpriority, label: "Medium Priority" },
            ]
        }]
    };

    return (
        <div className='Piechart'>
            <CanvasJSChart className="chart-div" options={options} />
        </div>
    );
};

export default Piechart;
