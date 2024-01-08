import React from "react";
import TaskCard from "./TaskCard";

import "../../styles/TaskList.css";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="container">
      <div className="taskList">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
