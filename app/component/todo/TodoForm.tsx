"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/slice/todo/";
import { TextField, Button, Box, Container } from "@mui/material";
import Link from "next/link";

interface ToDoFormProps {
  editMode: boolean;
  existingTodo: any;
  setEditMode: (mode: boolean) => void;
}

const ToDoForm = ({ editMode, existingTodo, setEditMode }: ToDoFormProps) => {
  const [formData, setFormData] = useState(
    existingTodo || {
      firstName: "",
      lastName: "",
      age: "",
      designation: "",
      city: "",
    }
  );

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateTodo({ ...formData }));
      setEditMode(false);
    } else {
      dispatch(addTodo({ ...formData }));
    }
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      designation: "",
      city: "",
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
          p: 2,
          borderRadius: 1,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        <h2>{editMode ? "Edit To-Do" : "Add To-Do"}</h2>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            name="age"
            label="Age"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formData.age}
            onChange={handleChange}
          />
          <TextField
            name="designation"
            label="Designation"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formData.designation}
            onChange={handleChange}
          />
          <TextField
            name="city"
            label="City"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formData.city}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {editMode ? "Update" : "Add"} To-Do
          </Button>

          <Link href="/todoList" passHref>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Go To Details
            </Button>
          </Link>
        </form>
      </Box>
    </Container>
  );
};

export default ToDoForm;
