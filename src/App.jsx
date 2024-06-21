import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CreateTask from "./Pages/CreateTask";
import Pricing from "./Pages/Pricing";
import TasksList from "./Pages/TasksList";
import NavBar from "./Components/NavBar";
import TasksCard from "./Components/Tasks Card/TasksCard";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tasks" element={<TasksList />} />
          <Route path="/tasks/:id" element={<TasksCard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
