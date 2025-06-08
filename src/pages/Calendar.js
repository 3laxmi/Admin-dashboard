import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());

  return (
     <div className="ml-48 p-10">    
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Calendar</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-xl">
        <Calendar
          onChange={setValue}
          value={value}
          className="w-full rounded border-0"
        />
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Selected Date: {value.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;
