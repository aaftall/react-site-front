import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../consts.js";
import ColorCheckboxes from "../Components/Checkbox.jsx";

function TasksList() {
  const [tasks, setTasks] = useState(null);

  async function fetchAllProducts() {
    try {
      const response = await axios.get(URL + "/tasks");
      console.log(response);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (!tasks) {
    return <p>Loading...</p>;
  }
  return (
    <div className="tableContainer">
      <table className="table">
        <tr>
          <th className="tableTitle">Title</th>
          <th className="tableDescription">Description</th>
          <th className="tableDD">Due date</th>
          <th className="tablePriority">Priority</th>
          <th className="tableDone">Done</th>
        </tr>
        {tasks.map((p) => {
          return (
            <tr key={p.id}>
              <Link className="tableTitle" to={`/tasks/${p.id}`}>
                {p.title}
              </Link>
              <td className="tablePriority">{p.description}</td>
              <td className="tableDD">{p.dueDate}</td>
              <td className="tablePriority">{p.priority}</td>

              <td className="tableDone">
                <ColorCheckboxes />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default TasksList;
