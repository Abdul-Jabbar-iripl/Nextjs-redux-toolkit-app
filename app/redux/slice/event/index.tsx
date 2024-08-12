import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Event {
  event?: string[];
  reminder?: string[];
}

interface EventsState {
  [key: string]: Event;
}

const initialState: EventsState = {};

// const eventsSlice = createSlice({
//   name: "events",
//   initialState,
//   reducers: {
//     addEvent: (
//       state,
//       action: PayloadAction<{ date: string; description: string }>
//     ) => {
//       const { date, description } = action.payload;
//       if (!state[date]) {
//         state[date] = { event: [], reminder: [] };
//       }
//       state[date].event?.push(description);
//     },
//     addReminder: (
//       state,
//       action: PayloadAction<{ date: string; description: string }>
//     ) => {
//       const { date, description } = action.payload;
//       if (!state[date]) {
//         state[date] = { event: [], reminder: [] };
//       }
//       state[date].reminder?.push(description);
//     },
//   },
// });

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (
      state,
      action: PayloadAction<{ date: string; description: string }>
    ) => {
      const { date, description } = action.payload;
      if (!state[date]) state[date] = { event: [], reminder: [] };
      state[date].event?.push(description);
    },
    addReminder: (
      state,
      action: PayloadAction<{ date: string; description: string }>
    ) => {
      const { date, description } = action.payload;
      if (!state[date]) state[date] = { event: [], reminder: [] };
      state[date].reminder?.push(description);
    },
    updateEvent: (
      state,
      action: PayloadAction<{
        date: string;
        index: number;
        description: string;
      }>
    ) => {
      const { date, index, description } = action.payload;
      if (state[date]?.event) state[date].event[index] = description;
    },
    updateReminder: (
      state,
      action: PayloadAction<{
        date: string;
        index: number;
        description: string;
      }>
    ) => {
      const { date, index, description } = action.payload;
      if (state[date]?.reminder) state[date].reminder[index] = description;
    },
    deleteEvent: (
      state,
      action: PayloadAction<{ date: string; index: number }>
    ) => {
      const { date, index } = action.payload;
      state[date]?.event?.splice(index, 1);
    },
    deleteReminder: (
      state,
      action: PayloadAction<{ date: string; index: number }>
    ) => {
      const { date, index } = action.payload;
      state[date]?.reminder?.splice(index, 1);
    },
  },
});

export const {
  addEvent,
  addReminder,
  deleteReminder,
  deleteEvent,
  updateReminder,
  updateEvent,
} = eventsSlice.actions;
export default eventsSlice.reducer;
