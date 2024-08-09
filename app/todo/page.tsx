"use client";

import { useState } from "react";
import ToDoForm from "../component/todo/TodoForm";
import ToDoList from "../component/todo/TodoList";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function TodoHome() {
  return (
    <>
     
      {/* <ToDoForm editMode={false} existingTodo={null} setEditMode={() => {}} /> */}
      {/* <ToDoList /> */}
      <Provider store={store}>
      <ToDoForm editMode={false} existingTodo={null} setEditMode={() => {}} />
    </Provider>
    </>
  );
}
