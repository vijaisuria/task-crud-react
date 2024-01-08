import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

const Task = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching task:", error);
        setLoading(false);
      });
  }, [id]);

  const handleEdit = () => {
    // Implement the edit functionality
    console.log(`Edit task ${id}`);
  };

  const handleDelete = () => {
    // Implement the delete functionality
    console.log(`Delete task ${id}`);
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <IconButton onClick={goBack}>
        <ArrowBackIcon />
      </IconButton>
      {loading ? (
        <CircularProgress />
      ) : (
        task && (
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                {task.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {task.description}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Due Date: {task.dueDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        )
      )}
    </div>
  );
};

export default Task;
