import Calender from "./Calender"; // Importing the Calender component
import "../StyleComponents/Adminhome.css"; // Importing the CSS file for Adminhome
import Doughnut from "./Doughnut"; // Importing the Doughnut component
import Piechartadmin from "./Piechart"; // Importing the Piechartadmin component
import TableAD from "./TableAD"; // Importing the TableAD component
import Latestmessage from "./LatestMessage"; // Importing the Latestmessage component

const Adminhome=()=> {
  return (
    <>

    {/* Admin Home */}
    <div className="Pagelayout">
            {/* Top section of the Admin Home */}
            <div className="Adminhome adminTop"> 
                <div>
                    <Piechartadmin/> {/* Rendering the Piechartadmin component */}
                </div>
                <div>
                    <Doughnut/> {/* Rendering the Doughnut component */}
                </div>
                <div>
                    <Calender/> {/* Rendering the Calender component */}
                </div>  
            </div>
            {/* Bottom section of the Admin Home */}
            <div className="Adminhome"> 
                <div>
                    <Latestmessage/> {/* Rendering the Latestmessage component */}
                </div>
                <div>
                    <TableAD/> {/* Rendering the TableAD component */}
                </div>
            </div> 
    </div>
    {/* End of Admin Home */}
   
    </>
    );
}

export default Adminhome;
