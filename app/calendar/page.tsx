"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import EventReminderCalendar from '../component/calendarEvent/EventReminderCalendar'

const page = () => {
  return (
    <div>
       <Provider store={store}>
      <EventReminderCalendar />
    </Provider>
    </div>
  )
}

export default page
