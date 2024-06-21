import "./DeleteButton.css";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../consts.js";
import Loader from "../Loader/Loader.jsx";
import { useNavigate, useParams } from "react-router-dom";

function DeleteButton() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const deleteTask = async () => {
    setLoading(true);
    try {
      await axios.delete(`${URL}/tasks/${id}`);
      // Handle the UI update or redirection after successful deletion here
      // alert("Task deleted successfully");
      nav("/");
    } catch (error) {
      console.error("Failed to delete task:", error);
      setError(error);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error deleting the task: {error.message}</div>;
  }

  return (
    <div>
      <button className="deleteButton" onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;
