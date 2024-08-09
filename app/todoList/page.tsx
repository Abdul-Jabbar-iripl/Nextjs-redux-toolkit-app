"use client";
import React from "react";
import ToDoList from "../component/todo/TodoList";
import { Provider } from "react-redux";
import store from "../redux/store";

const TodoList = () => {
  return (
    <div>
      <Provider store={store}>
        <ToDoList />
      </Provider>
    </div>
  );
};

export default TodoList;
