import CanvasJSReact from '@canvasjs/react-charts';
import { useState,useEffect } from "react";
import axios from "axios";
import { _apiurluser } from '../APIurlpath/_apiurl';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Piechartadmin=()=> {
    var verified =0;
    var notverified=0;
    var total=0
    const[taskData,setTaskData]=useState([])

    const loadData=()=>{
        axios.get(_apiurluser + "Display").then((res)=>{
        setTaskData(res.data)
        })
}
useEffect(()=>{
    loadData();
},[])


const ans =taskData.map((key)=>{
    total++;
    if(key.role==="user" && key.status=== 1){
        verified = verified + 1;
    }
    if(key.role==="user" && key.status=== 0){
       notverified = notverified + 1;
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
		}
		return (
		<div className='Piechart'>
			<CanvasJSChart className="chart-div" options = {options}
			
			/>
			
		</div>
		);
	}

export default Piechartadmin;  