import React, { useState } from 'react';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Navigate to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  // Navigate to the next month
  const handleNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  // Navigate to the previous year
  const handlePrevYear = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear() - 1, prevDate.getMonth(), 1));
  };

  // Navigate to the next year
  const handleNextYear = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear() + 1, prevDate.getMonth(), 1));
  };

  // Get the full name of the month
  const getMonthName = (date: Date) => {
    return date.toLocaleString('default', { month: 'long' });
  };

  // Get the number of days in the current month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get the day of the week for the first day of the month
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Render the calendar grid
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    const days = [];

    // Add previous month's dates
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: lastDayOfPrevMonth - i,
        isCurrentMonth: false,
      });
    }

    // Add current month's dates
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
      });
    }

    // Add next month's dates
    const totalCells = 42; // 6 rows x 7 columns
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
      });
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {days.map(({ day, isCurrentMonth }, index) => (
          <div
            key={`day-${index}`}
            className={`text-center p-2 rounded ${
              isCurrentMonth ? 'text-black' : 'text-gray-400'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[23.2vw] mt-6 px-3 py-1 bg-zinc-100 rounded-lg shadow-lg">
      {/* Calendar Header */}
      <div className="flex justify-between items-center     ">
        <button
          onClick={handlePrevMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &lt;
        </button>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">
            {getMonthName(currentDate)} {currentDate.getFullYear()}
          </h2>
          <div className="flex flex-col  ">
            <button
              onClick={handleNextYear}
              className="p-1 rounded-full rotate-180 hover:bg-red-100"
            >
              v
            </button>
            <button
              onClick={handlePrevYear}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              v
            </button>
          </div>
        </div>
        <button
          onClick={handleNextMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>

      {/* Calendar Body */}
      <div className="mt-4">
        {/* Weekday Labels */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm text-gray-600">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;