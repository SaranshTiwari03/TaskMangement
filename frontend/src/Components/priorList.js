import { useState, useEffect } from "react";
import axios from "axios";
import "../StyleComponents/priorList.css"

const Prioritylist = () => {
  const [taskData, setTaskData] = useState(() => {
    const storedData = localStorage.getItem("taskData");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    axios.get("http://localhost:8000/task/Display").then((res) => {
      setTaskData(res.data);
      localStorage.setItem("taskData", JSON.stringify(res.data)); // Store data in local storage
    });
  }, []);

  const onDragStart = (event, task) => {
    event.dataTransfer.setData("task", JSON.stringify(task));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, priority) => {
    event.preventDefault();
    const task = JSON.parse(event.dataTransfer.getData("task"));
    const updatedTaskData = taskData.map((t) => {
      if (t.title === task.title && t.description === task.description) {
        return { ...t, priority };
      }
      return t;
    });

    setTaskData(updatedTaskData);
    localStorage.setItem("taskData", JSON.stringify(updatedTaskData)); // Update local storage
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
