import React, { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TaskForm from "./components/TaskFOrm";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFIlter] = useState("All");
  const [theme, setTheme] = useState("light");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setloading(true);
    setTimeout(() => {
      setTasks([...tasks, task]);
      setloading(false);
    }, 1000);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !==id));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" :"light"))
  }
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <Filter filter={filter} setFilter={setFIlter} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};

export default App;
