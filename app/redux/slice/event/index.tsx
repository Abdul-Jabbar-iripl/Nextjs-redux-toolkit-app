import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Event {
  event?: string;
  reminder?: string;
}

interface EventsState {
  [key: string]: Event;
}

const initialState: EventsState = {};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (
      state,
      action: PayloadAction<{ date: string; description: string }>
    ) => {
      const { date, description } = action.payload;
      if (!state[date]) {
        state[date] = {};
      }
      state[date].event = description;
    },
    addReminder: (
      state,
      action: PayloadAction<{ date: string; description: string }>
    ) => {
      const { date, description } = action.payload;
      if (!state[date]) {
        state[date] = {};
      }
      state[date].reminder = description;
    },
  },
});

export const { addEvent, addReminder } = eventsSlice.actions;
export default eventsSlice.reducer;
