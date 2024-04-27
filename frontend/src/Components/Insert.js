import { useState } from "react"; // Importing useState hook from React
import axios from "axios"; // Importing axios for making HTTP requests
import "../StyleComponents/Insertmodal.css"; // Importing your CSS file for styling
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import {_apiurltask } from '../APIurlpath/_apiurl'; // Importing API URL for tasks

const Insert = () => {
  const [input, setInput] = useState({}); // Initializing state for input data
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation

  // Function to handle input change
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    let url = _apiurltask + "insert";
    axios.post(url, input).then((res) => {
      alert("Task saved successfully"); // Alerting user about successful task creation
    });
  };

  // Function to close the modal
  const closeModal = () => {
    navigate(-1); // Navigate back one step in history
  };

  return (
    <div className="modal-overlay">
      <div className="insert-modal">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <h1 className="modal-title">Assign Tasks</h1>
        <div className="insert-task">
          <form>
            <div class="form-group">
              <label >Task Name:</label>
              <input type="text" class="form-control" name="title" value={input.title} onChange={handleInput} required />
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
            <br/>
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

export default Insert;
