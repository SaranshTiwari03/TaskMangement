import "../StyleComponents/Topbar.css";
import { IoMdNotificationsOutline } from 'react-icons/io';


const Topbar=()=>{
    const image= localStorage.getItem("image");
    const imgurl=image.slice(0,12);
    const img=image.replace(imgurl,"")
    return(
        <>

        <div className="top-bar">
            <div className="logo-section">
                <img src="./images/logo task_1@2x.png" width="150px" alt="Logo" />
            </div>
            <div className="search-section">
                
                <input type="text" placeholder="Search..." />
                <i className="fas fa-search"></i> 
            </div>
            <div className="notification-section">
                
            <IoMdNotificationsOutline className="bell-icon" />
                
                <div className="profile-pic">
                    <img className="Topbarimg" src={"./ProfileImg/"+img} alt="" />
                    
                </div>
            </div>
        </div>

        
        </>
    )

}

export default Topbar;