import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import axios from "axios"; // Importing axios for making HTTP requests
import "../StyleComponents/priorList.css"; // Importing CSS file for styling

const Prioritylist = () => {
  const [taskData, setTaskData] = useState(() => {
    // Initializing state for task data. If there is any data stored in localStorage, use it; otherwise, initialize as an empty array.
    const storedData = localStorage.getItem("taskData");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    // Fetching task data from the server when the component mounts
    axios.get("http://localhost:8000/task/Display").then((res) => {
      // Setting the fetched task data to state
      setTaskData(res.data);
      // Storing the fetched task data in localStorage
      localStorage.setItem("taskData", JSON.stringify(res.data)); // Store data in local storage
    });
  }, []);

  const onDragStart = (event, task) => {
    // Handling drag start event for tasks
    event.dataTransfer.setData("task", JSON.stringify(task));
  };

  const onDragOver = (event) => {
    // Handling drag over event for drop zones
    event.preventDefault();
  };

  const onDrop = (event, priority) => {
    // Handling drop event for drop zones
    event.preventDefault();
    const task = JSON.parse(event.dataTransfer.getData("task"));
    const updatedTaskData = taskData.map((t) => {
      // Updating the priority of the dropped task and creating updated task data
      if (t.title === task.title && t.description === task.description) {
        return { ...t, priority };
      }
      return t;
    });

    setTaskData(updatedTaskData);
    // Updating localStorage with the updated task data
    localStorage.setItem("taskData", JSON.stringify(updatedTaskData)); // Update local storage
    // Updating task priority on the server
    axios.put(`http://localhost:8000/task/${task._id}`, { priority })
      .then((res) => {
        console.log("Task priority updated successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error updating task priority:", error);
      });
  };

  return (
    <>
    <div className="prioritylistpage">
      <div className="priority">
          <div
            className="myDiv"
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, "High")}
          >
            <h1>High Priority</h1>
            {taskData
              .filter((task) => task.priority === "High")
              .map((task, index) => (
                // Rendering tasks with high priority
                <div
                  key={index}
                  draggable
                  onDragStart={(event) => onDragStart(event, task)}
                  className="task"
                >
                  <span className="span1">{task.title}</span>
                  <span className="span2">{task.description}</span>
                </div>
              ))}
          </div>
          <div
            className="myDiv1"
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, "Medium")}
          >
            <h1>Medium Priority</h1>
            {taskData
              .filter((task) => task.priority === "Medium")
              .map((task, index) => (
                // Rendering tasks with medium priority
                <div
                  key={index}
                  draggable
                  onDragStart={(event) => onDragStart(event, task)}
                  className="task"
                >
                  <span className="span1">{task.title}</span>
                  <span className="span2">{task.description}</span>
                </div>
              ))}
          </div>
          <div
            className="myDiv3"
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, "Low")}
          >
            <h1>Low Priority</h1>
            {taskData
              .filter((task) => task.priority === "Low")
              .map((task, index) => (
                // Rendering tasks with low priority
                <div
                  key={index}
                  draggable
                  onDragStart={(event) => onDragStart(event, task)}
                  className="task"
                >
                  <span className="span1">{task.title}</span>
                  <span className="span2">{task.description}</span>
                </div>
              ))}
          </div>
      </div>
    </div>
    </> 
  );
};

export default Prioritylist;
