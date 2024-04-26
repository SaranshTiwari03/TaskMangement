import { useParams,useNavigate } from "react-router-dom";
const Description = () => {
  const {description,  date, descriptiondetail } = useParams();
    const mynav= useNavigate();

    const navigateback=()=>{
        mynav("/display")
    }
  return (
    <>
     <h3>Description Page</h3>
 <div className="description-card">
           
            <div className="card">
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