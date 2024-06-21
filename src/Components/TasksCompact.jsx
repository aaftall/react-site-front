import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../consts.js";
import ColorCheckboxes from "./Checkbox.jsx";

function TasksCompact() {
  const [tasks, setTasks] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  // Function to sort data
  const sortByDate = () => {
    const sortedData = [...tasks].sort((a, b) => {
      if (a.dueDate < b.dueDate) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a.dueDate > b.dueDate) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
    setTasks(sortedData);
    // Toggle the direction
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

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
        <thead>
          <tr>
            <th className="tableTitle">Title</th>
            <th className="tableDescription">Description</th>
            <th className="tableDD" onClick={sortByDate}>
              {sortDirection === "asc" ? "🔼" : "🔽"}
              Due date
            </th>
            <th className="tablePriority">Priority</th>
            <th className="tableDone">Done</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((p) => {
            return (
              <tr key={p.id}>
                <td>
                  <Link className="tableTitle" to={`/tasks/${p.id}`}>
                    {p.title}
                  </Link>
                </td>
                <td className="tablePriority">{p.description}</td>
                <td className="tableDD">{p.dueDate}</td>
                <td className="tablePriority">{p.priority}</td>
                <td className="tableDone">
                  <ColorCheckboxes />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TasksCompact;
