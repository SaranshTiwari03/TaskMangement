import CanvasJSReact from '@canvasjs/react-charts';
import { useState,useEffect } from "react";
import axios from "axios";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Doughnut=()=> {
    var completed=0;
    var pending=0;
    var percentage= 0;
    var total=0;
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
    total= total+1;
    if(key.status==="pending"){
        pending=pending + 1;
    }
    if(key.status==="completed"){
        completed= completed + 1;
    }
    percentage=parseInt((completed/total)*100);
    return(
        <>
            
        </>
    )
    
})


	
        const options = {
            animationEnabled: true,
            width:320,
            height:300,
            title: {
                text: "Task Completed"
            },
            subtitles: [{
                text: percentage+"% completed",
                verticalAlign: "center",
                fontSize: 20,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",

                yValueFormatString: "#,###",
                radius: "90%",
                innerRadius:"80%",
                dataPoints: [
                    { name: "Completed", y: completed },
                    { name: "Pending", y: pending },
                    
                ]
            }]
        }
        return (
            <>
        <div className='doughnut'>
            <CanvasJSChart options = {options}
                
            />   
        </div>
        </>
        );
		
	}

export default Doughnut;  