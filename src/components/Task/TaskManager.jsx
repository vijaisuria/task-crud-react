import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { CircularProgress } from "@mui/material";

//import react toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks from the API
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  // Function to delete a task by ID
  const deleteTask = (id) => {
    fetch(`http://localhost:8080/api/v1/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // If deletion is successful, update the task list
          const updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
          toast.success("Task deleted successfully!");
        } else {
          toast.error("Failed to delete task");
          console.error("Failed to delete task");
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
        console.log(id);
      });
  };

  return (
    <div>
      <h2>Task Manager</h2>
      {loading ? (
        <CircularProgress /> // Show a loading indicator while fetching data
      ) : (
        <TaskList tasks={tasks} onDelete={deleteTask} />
      )}
      <ToastContainer />
    </div>
  );
};

export default TaskManager;
