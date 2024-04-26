import Calender from "./Calender";
import Piechart from "./Piechart1";
import "../StyleComponents/Userhome.css"
import Doughnut from "./Doughnut";
import Table from "./TableUH";



const Userhome=()=> {
  return (

    <>
                    <div className="Pagelayout">
                        <div className="Userhome"> 
                            <div>
                                <Piechart/>
                            </div>
                            <div>
                                <Doughnut/>
                            </div>
                            <div>
                            <Calender/>
                            </div>  
                      </div>
                        <div>
                            <Table/>
                        </div>
                    </div>
                        
    </>           
    );
}

export default Userhome;