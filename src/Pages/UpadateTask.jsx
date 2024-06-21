import { useState, useEffect } from "react";
import { URL } from "../consts";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  const { id } = useParams();

  const handleTitle = (e) => setTitle(e.currentTarget.value);
  const handleDescription = (e) => setDescription(e.currentTarget.value);

  async function fetchOneProject() {
    try {
      const response = await axios.get(URL + `/projects/${id}`);
      console.log(response);
      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOneProject();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!title) {
        throw Error("Title is needed");
      }

      /**
       * The data that you create is up to you
       * There is no verification steps with JSON server / Mock API
       */
      const updatedProject = {
        // id: "hello",
        title: title,
        description: description,
        // helloooooo: "Woop woop",
      };
      /**
       * PUT syntax
       * axios.put(URL + idOfTheressource, updatedData) return a response object
       */
      const response = await axios.put(URL + `/tasks/${id}`, updatedProject);
      nav("/projects/" + id);
      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" value={title} onChange={handleTitle} />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <textarea
          name=""
          id="description"
          value={description}
          onChange={handleDescription}
          rows={5}
        ></textarea>
      </div>
      <button>Update Project</button>
    </form>
  );
}

export default UpdateProjectPage;
