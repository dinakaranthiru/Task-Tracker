import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks,updateTask,deleteTask}) => {
  if (tasks.length === 0) return <p> No Task Found</p>;

  return (
    <div className="task-list">
        {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            deleteTask = {deleteTask}
            updateTask = {updateTask}
            
            ></TaskItem>
        ))}
    </div>
  )
};


export default TaskList;