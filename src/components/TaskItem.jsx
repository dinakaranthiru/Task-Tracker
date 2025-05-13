import React, { useState } from "react";

const TaskItem = ({task,deleteTask,updateTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editDate, setEditDate] = useState(task.dueDate);

  const handleComplete = () => {
    updateTask({ ...task, status: "Completed" });
  };

  const handleEdit = () => {
    updateTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
      dueDate: editDate,
    });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <input
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>

          <button
            onClick={handleComplete}
            disabled={task.status === "Completed"}
          >
            Complete
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};


export default TaskItem;