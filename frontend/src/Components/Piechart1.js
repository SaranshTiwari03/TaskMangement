import CanvasJSReact from '@canvasjs/react-charts';
import { useState,useEffect } from "react";
import axios from "axios";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Piechart=()=> {
    var Lowpriority=0;
    var Midpriority=0;
    var Highpriority=0;
    const[taskData,setTaskData]=useState([])

    const loadData=()=>{
        axios.get("http://localhost:8000/task/Display").then((res)=>{
        setTaskData(res.data)
        })
}
useEffect(()=>{
    loadData();
},[])


const ans =taskData.map((key)=>{
    if(key.priority==="High"){
        Highpriority= Highpriority + 1;
    }
    if(key.priority==="Medium"){
        Midpriority= Midpriority + 1;
    }
    if(key.priority==="Low"){
        Lowpriority= Lowpriority + 1;
    }
    return(
        <>
            
        </>
    )
})
	
		const options = {
			
			animationEnabled: true,
            width:300,
            height:300,
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
		}
		return (
		<div className='Piechart'>
			<CanvasJSChart className="chart-div" options = {options}
			
			/>
			
		</div>
		);
	}

export default Piechart;  