"use client";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/slice/todo";
import ToDoForm from "./TodoForm";
import { useState } from "react";
import { RootState } from "../../redux/store";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<any>(null);

  const handleEdit = (todo: any) => {
    setCurrentTodo(todo);
    setEditMode(true);
  };

  const handleDelete = (id: any) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo: any) => (
              <TableRow key={todo.id}>
                <TableCell>{todo.firstName}</TableCell>
                <TableCell>{todo.lastName}</TableCell>
                <TableCell>{todo.age}</TableCell>
                <TableCell>{todo.designation}</TableCell>
                <TableCell>{todo.city}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(todo)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(todo.id)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {editMode && (
        <ToDoForm
          editMode={editMode}
          existingTodo={currentTodo}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
};

export default ToDoList;
