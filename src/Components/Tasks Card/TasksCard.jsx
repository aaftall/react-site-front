import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../consts.js";
import "./TasksCard.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import DeleteButton from "../Delete Button/DeleteButton.jsx";
import "/src/assets/image.png";

function TasksCard() {
  const params = useParams();
  const [tasks, setTasks] = useState(null);

  async function fetchAllProducts() {
    try {
      const response = await axios.get(`${URL}/tasks/${params.id}`);
      console.log(response);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, [params]);

  if (!tasks) {
    return <Loader />;
  }
  return (
    <div className="tasks-container">
      <div className="taskClass" key={tasks.id}>
        <h1 className="taskTitle">{tasks.title}</h1>
        <div className="taskSpec">
          <div className="taskDueDate">{tasks.dueDate}</div>
          <div className="taskTags">{tasks.tags}</div>
          <div className="taskPriority">{tasks.priority}</div>
        </div>
        <h3 className="taskDescription">{tasks.description}</h3>

        <div className="cardFooter">
          <div>
            <button className="taskDone">Done</button>
            <button className="taskEdit">Edit</button>
          </div>
          <DeleteButton />
        </div>
      </div>
    </div>
  );
}

export default TasksCard;
