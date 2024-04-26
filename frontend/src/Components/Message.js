import { useState } from "react";
import axios from "axios";
import "../StyleComponents/Message.css"; 
import { useNavigate } from "react-router-dom";



const Message = () => {
  const [input, setInput] = useState({});
  const navigate= useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let url = "http://localhost:8000/message/insert";
    axios.post(url, input).then((res) => {
      alert("Message sent successfully");
      setInput(" ");
    });
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <div className="modal-overlay">
      <div className="insert-modal">
            <span className="close-modal" onClick={closeModal}>
            &times;
            </span>
                
                <div className="insert-task">
                <div class="modal__header">
                    <span class="modal__title">New message</span>
                </div>
                <div class="modal__body">
                    <div class="input">
                        <label class="input__label">User Name</label>
                        <input class="input__field" type="text" name="uname" value={input.uname} onChange={handleInput} /> 
                        <p class="input__description">Write your user name here..</p>
                    </div>
                    <div class="input">
                                        <label class="input__label">Message</label>
                        <textarea class="input__field input__field--textarea" name="message" value={input.message} onChange={handleInput}></textarea>
                            <p class="input__description">Write your content here, message should be of at least 32 words</p>
                    </div>
                </div>
                <div class="modal__footer">
                    <button class=" button-submit" onClick={handleSubmit}>Send Message</button>
                </div>
                </div>
            
        </div>
      </div>
    
  );
};

export default Message;