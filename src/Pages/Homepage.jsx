import TasksCompact from "../Components/TasksCompact";
import FullWidthTextField from "../Components/Button";
import { useState } from "react";
// import Create from "../Components/CreateTaskButton";

function Homepage() {
  const [count, setCount] = useState(3);
  return (
    <div>
      <div className="separator"></div>
      <div className="card">
        <button onClick={() => setCount(() => 3 + 1)}>
          {count} tasks to complete
        </button>
        <div>{/* <Create /> */}</div>
        <FullWidthTextField />
        <p className="action-desc">
          Write the title of your new task and press ENTER
        </p>
      </div>
      <TasksCompact />
      <div>{/* <EnhancedTable /> */}</div>
    </div>
  );
}

export default Homepage;
