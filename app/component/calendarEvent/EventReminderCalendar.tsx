import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addEvent, addReminder } from '../../redux/slice/event';
import styles from './Calendar.module.css';

const EventReminderCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [type, setType] = useState<'event' | 'reminder' | ''>('');
  const [description, setDescription] = useState<string>('');
  
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.event);

  
  const handleDateChange = (newDate: Date | Date[] | null) => {
    if (newDate instanceof Date) {
      setDate(newDate);
      setCurrentDate(newDate.toISOString().split('T')[0]);
      setDialogOpen(true);
    }
  };

  const handleSave = () => {
    if (description && currentDate) {
      if (type === 'event') {
        dispatch(addEvent({ date: currentDate, description }));
      } else if (type === 'reminder') {
        dispatch(addReminder({ date: currentDate, description }));
      }
      setDialogOpen(false);
      setDescription('');
      setType('');
    }
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const key = date.toISOString().split('T')[0];
    if (events[key]) {
      if (events[key].event) return styles.event;
      if (events[key].reminder) return styles.reminder;
    }
    return '';
  };

  return (
    <>
    <div className={styles.container}>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={tileClassName}
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
          <Button onClick={() => setType('event')}>Add Event</Button>
          <Button onClick={() => setType('reminder')}>Add Reminder</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
      </div>
    </>
  );
};

export default EventReminderCalendar;
