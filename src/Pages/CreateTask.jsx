import { useState } from "react";
import { URL } from "../consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("-1");
  const [tags, setTags] = useState("");

  const nav = useNavigate();

  const handleTitle = (e) => setTitle(e.currentTarget.value);
  const handleDescription = (e) => setDescription(e.currentTarget.value);
  const handleDueDate = (e) => setDueDate(e.currentTarget.value);
  const handlePriority = (e) => setPriority(e.currentTarget.value);
  const handleTags = (e) => setTags(e.currentTarget.value);

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
      const newProject = {
        title: title,
        description: description,
        tags: tags,
        dueDate: dueDate,
        priority: priority,
        done: "No",
      };

      const response = await axios.post(URL + "/tasks", newProject);
      console.log(response);

      setTimeout(() => {
        nav("../");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <div className="item">
        <label htmlFor="title">Title: </label>
        <div className="item">
          <input type="text" id="title" value={title} onChange={handleTitle} />
        </div>
      </div>
      <div className="item">
        <label htmlFor="description">Description: </label>
        <div className="item">
          <textarea
            name=""
            id="description"
            value={description}
            onChange={handleDescription}
            rows={5}
          ></textarea>
        </div>
      </div>
      <div className="item">
        <label htmlFor="tags">Tags:</label>
        <select name="" id="priority" value={tags} onChange={handleTags}>
          <option disabled value="-1">
            Please select a tag
          </option>
          <option value="operations">Operations</option>
          <option value="finance">Finance</option>
          <option value="tech">Tech</option>
        </select>
        {/* <BasicSelect name="" id="tags" value={tags} onChange={handleTags} /> */}
      </div>

      <div className="item">
        <label htmlFor="dueDate">Due date: </label>
        <input
          type="date"
          name=""
          id="dueDate"
          value={dueDate}
          onChange={handleDueDate}
        ></input>
      </div>
      <div className="item">
        <div>
          <label htmlFor="Urgent">Urgent: </label>
          <input
            type="radio"
            name="priority"
            id="Urgent"
            value={"Urgent"}
            checked={priority === "Urgent"}
            onChange={handlePriority}
          />
        </div>
        <div>
          <label htmlFor="Medium">Medium:</label>
          <input
            type="radio"
            name="priority"
            id="Medium"
            value={"Medium"}
            checked={priority === "Medium"}
            onChange={handlePriority}
          />
        </div>
        <div>
          <label htmlFor="low">Low:</label>
          <input
            type="radio"
            name="priority"
            id="Low"
            value={"Low"}
            checked={priority === "Low"}
            onChange={handlePriority}
          />
        </div>
        {/* <ButtonGroup
          name=""
          id="priority"
          value={priority}
          onChange={handlePriority}
          variant="contained"
          aria-label="Basic button group"
        >
          <Button>Priority 1</Button>
          <Button>Priority 2</Button>
          <Button>Priority 3</Button>
        </ButtonGroup> */}
      </div>
      <button>Create Task</button>
    </form>
  );
}

export default CreateTask;
