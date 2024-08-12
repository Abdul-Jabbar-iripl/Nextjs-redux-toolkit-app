import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addEvent,
  addReminder,
  updateEvent,
  updateReminder,
  deleteEvent,
  deleteReminder,
} from "../../redux/slice/event";
import styles from "./Calendar.module.css";

const EventReminderCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [type, setType] = useState<"event" | "reminder" | "">("");
  const [description, setDescription] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<{
    date: string;
    type: "event" | "reminder";
    index: number;
  } | null>(null);

  const dispatch = useDispatch();
  const events: any = useSelector((state: RootState) => state.event);

  const handleDateChange = (newDate: Date | Date[] | null) => {
    if (newDate instanceof Date) {
      setDate(newDate);
      setCurrentDate(newDate.toISOString().split("T")[0]);
      setDialogOpen(true);
    }
  };

  const handleSave = () => {
    if (description && currentDate) {
      if (type === "event") {
        dispatch(addEvent({ date: currentDate, description }));
      } else if (type === "reminder") {
        dispatch(addReminder({ date: currentDate, description }));
      }
      setDialogOpen(false);
      setDescription("");
      setType("");
    }
  };

  const handleTileClick = (
    date: Date,
    type: "event" | "reminder",
    index: number
  ) => {
    setDialogOpen(false); // Close add dialog if open
    setSelectedItem({ date: date.toISOString().split("T")[0], type, index });
    setEditDialogOpen(true);
  };

  const tileContent = ({ date }: { date: Date }) => {
    const key = date.toISOString().split("T")[0];
    if (events[key]) {
      return (
        <div>
          {events[key].event?.map((e: any, i: any) => (
            <Tooltip title={e} arrow key={i}>
              <div
                className={styles.event}
                onClick={() => handleTileClick(date, "event", i)}
              >
                {e}
              </div>
            </Tooltip>
          ))}
          {events[key].reminder?.map((r: any, i: any) => (
            <Tooltip title={r} arrow key={i}>
              <div
                className={styles.reminder}
                onClick={() => handleTileClick(date, "reminder", i)}
              >
                {r}
              </div>
            </Tooltip>
          ))}
        </div>
      );
    }
    return null;
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const key = date.toISOString().split("T")[0];
    if (events[key]) {
      if (events[key].event.length > 0) return styles.event;
      if (events[key].reminder.length > 0) return styles.reminder;
    }
    return "";
  };

  const handleEditSave = () => {
    if (selectedItem && description) {
      const { date, type, index } = selectedItem;
      if (type === "event") {
        dispatch(updateEvent({ date, index, description }));
      } else if (type === "reminder") {
        dispatch(updateReminder({ date, index, description }));
      }
      setEditDialogOpen(false);
      setDescription("");
    }
  };

  const handleDelete = () => {
    if (selectedItem) {
      const { date, type, index } = selectedItem;
      if (type === "event") {
        dispatch(deleteEvent({ date, index }));
      } else if (type === "reminder") {
        dispatch(deleteReminder({ date, index }));
      }
      setEditDialogOpen(false);
      setDescription("");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Add Event/Reminder</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Description"
              fullWidth
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={() => setType("event")}>Add Event</Button>
            <Button onClick={() => setType("reminder")}>Add Reminder</Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Item</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Description"
              fullWidth
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditSave}>Save</Button>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default EventReminderCalendar;
