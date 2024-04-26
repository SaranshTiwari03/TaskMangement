import Calender from "./Calender";
import "../StyleComponents/Adminhome.css"
import Doughnut from "./Doughnut";
import Piechartadmin from "./Piechart";
import TableAD from "./TableAD";
import Latestmessage from "./LatestMessage";

const Adminhome=()=> {
  return (

<>


    
    {/* Admin Home */}
    <div className="Pagelayout">
            <div className="Adminhome adminTop"> 
                <div>
                    <Piechartadmin/>
                </div>
                <div>
                    <Doughnut/>
                </div>
                <div>
                <Calender/>
                </div>  
            </div>
            <div className="Adminhome"> 
                <div>
                    <Latestmessage/>
                </div>
                <div >
                    <TableAD/>
                </div>
            </div> 
</div>
                        
    {/* Admin Home End */}    
   
    </>
    );
}

export default Adminhome;

