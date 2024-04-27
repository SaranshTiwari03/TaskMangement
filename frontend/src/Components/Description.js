import { useParams,useNavigate } from "react-router-dom";
import "../StyleComponents/Description.css"

const Description = () => {
  const {description,  date, descriptiondetail } = useParams();
    const mynav= useNavigate();

    const navigateback=()=>{
        mynav(-1)
    }
  return (
    <>
     
 <div className="">
    <h3>Description Page</h3>
            <div className="description">
                <table>
                    <tbody>
                        <tr>
                            <td>Date:</td>
                            <td>{date}</td>
                        </tr>
                        <tr>
                            <td>Description title:</td>
                            <td>{description}</td>
                        </tr>
                        <tr>
                            <td>Full Description:</td>
                            <td>{descriptiondetail}</td>
                        </tr>
                        <tr>
                            <td style={{color:"darkcyan"}} onClick={navigateback}>-------Go back------</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>

    </>
  );
};

export default Description;