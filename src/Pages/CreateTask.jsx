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
      <div>
        <label htmlFor="priority">tags:</label>
        <select
          name=""
          id="priority"
          value={priority}
          onChange={handlePriority}
        >
          <option disabled value="-1">
            Please select a priority
          </option>
          <option value="important">Urgent</option>
          <option value="moderate">Moderate priority</option>
          <option value="low">Easy peasy</option>
        </select>
        {/* <BasicSelect name="" id="tags" value={tags} onChange={handleTags} /> */}
      </div>
      {/* <div>
        <label htmlFor="tags">Tags: </label>
        <textarea
          name=""
          id="tags"
          value={tags}
          onChange={handleTags}
        ></textarea>
      </div> */}
      <div>
        <label htmlFor="dueDate">Due date: </label>
        <input
          type="date"
          name=""
          id="dueDate"
          value={dueDate}
          onChange={handleDueDate}
        ></input>
      </div>
      <div>
        <div>
          <label htmlFor="urgent">Urgent: </label>
          <input
            type="radio"
            name="priority"
            id="urgent"
            value={"urgent"}
            checked={tags === "urgent"}
            onChange={handleTags}
          />
        </div>
        <div>
          <label htmlFor="medium">Medium:</label>
          <input
            type="radio"
            name="priority"
            id="medium"
            value={"medium"}
            checked={tags === "medium"}
            onChange={handleTags}
          />
        </div>
        <div>
          <label htmlFor="low">Low:</label>
          <input
            type="radio"
            name="priority"
            id="low"
            value={"low"}
            checked={tags === "low"}
            onChange={handleTags}
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
      <button>Create Project</button>
    </form>
  );
}

export default CreateTask;
