// import { useParams,useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// const Edit=()=>{
//     const {id}=useParams();
//     const myNav=useNavigate();
//     const[input, setinput]=useState({})

//     const loadData=()=>{
//         let url="http://localhost:8000/task/geteditdata"
//         axios.post(url,{id:id}).then((res)=>{
//          setinput(res.data)
//          console.log(res.data)
//         })
//     }

//     const handleInput=(e)=>{
//         let name=e.target.name
//         let value=e.target.value
//         setinput(values=>({...values,[name]:value}))
//     }

//     const handleSubmit=()=>{
        
//         let url="http://localhost:8000/task/editsave"
//         axios.post(url,input).then((res)=>{
//             alert('updated')
//             myNav("/display")
//         })
//     }


//     useEffect(()=>{
//         loadData()
//     },[])


//     return(
//         <>

// <center>
// <h1 class="display-5 text-uppercase mb-4" >Edit Your  <span class="text-primary">Task Here</span></h1> </center>


// <div class="py-5 "  >
//         <div class=" py-5" >
//             <div class="row g-8">
//                 <div class="col-lg-5" style={{margin:"auto"}}>
                

                  
//                 </div>
//             </div>
//         </div>
//     </div>
    
//         </>
//     )
// }

// export default Edit;


import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../StyleComponents/Editmodal.css"; // Import your CSS file for styling

const Edit = () => {
  const { id } = useParams();
  const myNav = useNavigate();
  const [input, setInput] = useState({});

  const loadData = () => {
    let url = "http://localhost:8000/task/geteditdata";
    axios.post(url, { id: id }).then((res) => {
      setInput(res.data);
      console.log(res.data);
    });
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let url = "http://localhost:8000/task/editsave";
    axios.post(url, input).then((res) => {
      alert("updated");
      myNav("/display");
    });
  };

  const closeModal = () => {
    myNav(-1); // Navigate back one step in history
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <center>
          <h1 className="modal-title">
            Edit Your <span className="text-primary">Task Here</span>
          </h1>
        </center>
        
                <div className="insert-task">
                <form>
                      <div class="form-group">
                        <label >Task Name:</label>
                        <input type="text" class="form-control" name="title" value={input.title} onChange={handleInput}  />
                      </div>
                      <div class="form-group">
                        <label >User Name:</label>
                        <input type="text" class="form-control" name="uname" value={input.uname} onChange={handleInput}  />
                      </div>
                      <div class="form-group">
                        <label >Enter Description Title:</label>
                        <input type="text" class="form-control" name="description" value={input.description} onChange={handleInput} />
                      </div>
                      <div class="form-group">
                        <label >Enter Description:</label>
                        <textarea rows="8" class="form-control" name="descriptiondetail" value={input.descriptiondetail} onChange={handleInput} ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="city">City:</label>
                        <select class="form-control" name="priority" value={input.priority} onChange={handleInput} >
                        <option>Select Task Priority</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>    
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="pwd">Due Date</label>
                        <input  class="form-control" type="date" name="date" value={input.date} onChange={handleInput} />
                      </div>

                      
                      <br/>
                      <button type="button" onClick={handleSubmit} class="button-submit">Assign Task</button>
                  </form>
                </div>
              </div>
            </div>
          
  );
};

export default Edit;