import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateDiv } from './SubComponent';
import MainComponent from './MainComponent';
export default function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isDateValid = (date) => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const maxDate = new Date(currentDate);
    maxDate.setFullYear(currentDate.getFullYear() - 18); // User must be at least 18 years old

    return selectedDate <= maxDate;
  };
  console.log('value' + selectedDate);

  return (
    <>
      <DateDiv>
        <h2>Date of Birth</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat='MM/dd/yyyy'
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          isClearable
          maxDate={new Date()} // Disable future dates
        />
        {!isDateValid(selectedDate) && (
          <p style={{ color: 'red' }}>You must be at least 18 years old.</p>
        )}
      </DateDiv>

      {selectedDate != null && isDateValid(selectedDate) && (
        <MainComponent DOB={selectedDate} />
      )}
    </>
  );
}
