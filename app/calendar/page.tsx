"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import EventReminderCalendar from '../component/calendarEvent/EventReminderCalendar'

const page = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
       <Provider store={store}>
      <EventReminderCalendar />
    </Provider>
    </div>
  )
}

export default page
