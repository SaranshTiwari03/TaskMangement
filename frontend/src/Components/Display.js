import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {_apiurltask } from '../APIurlpath/_apiurl';

const Display=()=>{

  const mynav=useNavigate()
  const[taskData,setTaskData]=useState([])

  const Namenow=localStorage.getItem("name");

  const [currentPage,setCurrentPage]= useState(1);
  const recordsperPage=5;
  const lastIndex = currentPage * recordsperPage;
  const firstIndex= lastIndex - recordsperPage;
  const records= taskData.slice(firstIndex,lastIndex);
  const npage= Math.ceil(taskData.length / recordsperPage);

  const numbers= [...Array(npage + 1).keys()].slice(1);



  const prevPage=()=>{
    if(currentPage!== 1){
      setCurrentPage(currentPage-1);
    }
  }


  const nextPage=()=>{
    if(currentPage!== npage){
      setCurrentPage(currentPage+1);
    }
  }


  const changeCPage=(id)=>{
    setCurrentPage(id);
  }




  const loadData=()=>{
          axios.get(_apiurltask+"Display").then((res)=>{
          setTaskData(res.data)
          })
  }

      useEffect(()=>{
          loadData()
      },[])

      

      const handleToggleStatus = async (id, status) => {
          try {
            const newStatus = status === 'pending' ? 'completed': 'pending';
            const updatedTodo = await axios.put(_apiurltask+`Display/${id}`, { status: newStatus });
            setTaskData(taskData.map(todo => (todo._id === id ? updatedTodo.data : todo)));
          } catch (error) {
            console.error(error);
          }
        };


        const del = (id) => {

          const confirmDelete = window.confirm("Are you sure you want to delete this item?"); 
            if (confirmDelete) {
                      const url = _apiurltask+"Delete";

                axios.post(url, { id: id })
                    .then((res) => {
                        loadData();
                    })
                    .catch((error) => {
                        console.error("Error deleting item:", error);
                    });
              }
          };
      
      
      
      const edit=(id)=>{
          mynav("/edit/"+id); 
      }    

        const descriptionHere = ( description,date, descriptiondetail ) => {
        mynav(`/Des/${description}/${date}/${descriptiondetail}`);
      };
      

  const mydata=records.map((key, index) => {
       return(
        < >
          
          
              
                    <tbody>
                      <tr>
                        
                        <td> { key.title}</td>
                        <td  onClick={()=>descriptionHere(key.description, key.date, key.descriptiondetail)}>{key.description}</td>
                        <td> {key.date}</td>
                      
                        <td> 
                        <div style={{display:"flex"}} >
                          {  key.status==="pending" &&<a><div style={{"color":"orangered",fontWeight:"600"}}  >{key.status}</div></a>}
                          {  key.status==="completed" &&<a><div style={{"color":"#4CBB17"}}  >{key.status}</div></a>}
                          
                          <button  onClick={() => handleToggleStatus(key._id, key.status)} class="button" style={{"--clr": "#00ad54"}}>
                                <span class="button-decor"></span>
                                  <div class="button-content">
                                      <div class="button__icon">
                                      <i class="fa-regular fa-circle-check" style={{color: "#ffffff"}}></i>
                                      </div>
                                      <span class="button__text">Status</span>
                                  </div>
                              </button>
                          </div></td>
                      <td><button onClick={()=>{edit(key._id)}} ><i class="fa-solid fa-pen-to-square" style={{color: "#000000"}}></i></button></td>
                      <td><button onClick={()=>{del(key._id)}}><i class="fa-solid fa-delete-left" style={{color: "#000000"}}></i></button></td>
                
                  </tr>
                  
              </tbody>
    
        </>
      )
   
  })



      return(
          <>
          <div style={{display:"flex",flexDirection:"column",marginTop:"100px",width:"100%",justifyContent:"center",padding:"40px"}}>
            <h1 class="" >Review Your<span class="text-primary"> Tasks Here</span></h1> 
            <div>
                <div >
                  
                        <table class="table table-bordered" >
                            <thead style={{color:"white",backgroundColor:"#212529"}}>
                                <tr>
                                <th>Title</th>
                                <th >description</th>
                                <th>date</th>
                                <th width="280">status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                      {mydata}   
              </table>
          

                      <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <a href="#" className="page-link" onClick={prevPage}>Prev</a>
                            </li>
                            {
                              numbers.map((n,i)=>(
                                <li className={`page-item ${currentPage===n ? 'active':''}`} key={i}>
                                    <a href="#" className="page-link" onClick={()=>{changeCPage(n)}} >{n}</a>
                                </li>
                              ))
                            }
                            <li className="page-item">
                                <a href="#" className="page-link" onClick={nextPage}>Next</a>
                            </li>
                        </ul>
                      </nav>
              </div>
            </div>
            </div>
                  
            
  </> 
)}       

export default Display;

