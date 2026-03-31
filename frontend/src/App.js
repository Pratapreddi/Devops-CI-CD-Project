import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await API.post("/tasks", { name });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task Manager</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map((t) => (
        <div key={t._id}>
          {t.name}
          <button onClick={() => deleteTask(t._id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;