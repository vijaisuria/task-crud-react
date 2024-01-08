import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";

import "../../styles/TaskList.css";

const TaskCard = ({ task, onDelete }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  const handleClose = () => {
    setOpenDeleteDialog(false);
  };

  const confirmDelete = () => {
    onDelete(task.id);
    setOpenDeleteDialog(false);
  };

  return (
    <Card className="taskCard">
      <CardContent>
        <Typography variant="h5" component="h2">
          {task.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Edit task" style={{ color: "blue" }}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="View task" style={{ color: "black" }}>
          <ViewIcon />
        </IconButton>
        <IconButton
          aria-label="Delete task"
          onClick={handleDelete}
          style={{ color: "red" }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Task</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default TaskCard;
