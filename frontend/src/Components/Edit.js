import { useParams, useNavigate } from "react-router-dom"; // Importing useParams and useNavigate from react-router-dom
import axios from "axios"; // Importing axios for making HTTP requests
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import "../StyleComponents/Editmodal.css"; // Import your CSS file for styling
import {_apiurltask } from '../APIurlpath/_apiurl'; // Importing API URL for tasks

const Edit = () => {
  const { id } = useParams(); // Getting ID parameter from URL
  const myNav = useNavigate(); // Initializing useNavigate hook for navigation
  const [input, setInput] = useState({}); // Initializing state for input data

  // Function to load data of the task to be edited
  const loadData = () => {
    let url = _apiurltask+"geteditdata";
    axios.post(url, { id: id }).then((res) => {
      setInput(res.data); // Setting input data with fetched data
    });
  };

  // Function to handle input change
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    let url = _apiurltask+ "editsave";
    axios.post(url, input).then((res) => {
      alert("updated"); // Alerting user about successful update
      myNav("/display"); // Redirecting to display page
    });
  };

  // Function to close the modal
  const closeModal = () => {
    myNav(-1); // Navigate back one step in history
  };

  useEffect(() => {
    loadData(); // Loading data on component mount
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
