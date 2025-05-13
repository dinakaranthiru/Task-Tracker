import React, { useState } from "react";

const TaskForm = ({addTask}) => {
  const [title, setTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) {
      alert("Please enter a valid title and due Date.");
      return;
    }
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      status: "Pending",
    };

    addTask(newTask);
    setTitle("");
    SetDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};


export default TaskForm;