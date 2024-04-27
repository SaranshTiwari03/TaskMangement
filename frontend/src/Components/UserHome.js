import Calender from "./Calender"; // Importing Calendar component
import Piechart from "./Piechart1"; // Importing Piechart component
import "../StyleComponents/Userhome.css"; // Importing CSS for styling
import Doughnut from "./Doughnut"; // Importing Doughnut component
import Table from "./TableUH"; // Importing Table component

const Userhome = () => {
  return (
    <>
      {/* Page layout */}
      <div className="Pagelayout">
        {/* User home section */}
        <div className="Userhome"> 
          {/* Piechart component */}
          <div>
            <Piechart/>
          </div>
          {/* Doughnut component */}
          <div>
            <Doughnut/>
          </div>
          {/* Calendar component */}
          <div>
            <Calender/>
          </div>  
        </div>
        {/* Table component */}
        <div>
          <Table/>
        </div>
      </div>
    </>           
  );
}

export default Userhome;
