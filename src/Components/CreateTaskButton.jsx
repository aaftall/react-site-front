import { useNavigate } from "react-router-dom";

// fill form
// post
// useNavigate redirect hp

function Create() {
  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/tasks/create");
  };

  return <button onClick={handleNavigation}>Create a task</button>;
}

export default Create;
