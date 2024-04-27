import { useParams, useNavigate } from "react-router-dom"; // Importing useParams and useNavigate from react-router-dom
import "../StyleComponents/Description.css"; // Importing CSS for Description component

const Descript = () => {
  const { description, date, descriptiondetail } = useParams(); // Destructuring parameters from URL
  const mynav = useNavigate(); // Initializing useNavigate hook

  // Function to navigate back to the previous page
  const navigateback = () => {
    mynav(-1);
  };

  return (
    <>
      {/* Description Page */}
      <div className="description" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"}}>
        <h3 className="text-primary">Description Page</h3>
        <div className="card" style={{padding:"20px"}}>
          <table className="table table-bordered ">
            <tbody class="">
              <tr >
                <td class="table-active">Date:</td>
                <td>{date}</td>
              </tr>
              <tr >
                <td class="table-active">title:</td>
                <td>{description}</td>
              </tr>
              <tr  height="60">
                <td class="table-active">Task:</td>
                <td>{descriptiondetail}</td>
              </tr>
              <tr >
                {/* Go back link */}
                <td style={{color:"darkcyan"}} onClick={navigateback}>-------Go back------</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Descript;
