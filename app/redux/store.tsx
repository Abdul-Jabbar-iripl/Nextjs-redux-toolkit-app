"use client";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/slice/todo";
import eventsSlice from "./slice/event/index";
export const store = configureStore({
  reducer: {
    todos: todoSlice,
    event: eventsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
