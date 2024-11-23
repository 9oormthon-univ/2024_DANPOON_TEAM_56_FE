import React from 'react';
import styles from './WeekStatus.module.css';

function WeekStatus({ statuses }) {

  const getWeekDates = () => {
    const weekDates = [];
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const mondayDiff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Adjust to Monday if today is Sunday

    // Get the start of the week (Monday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + mondayDiff);

    // Generate dates from Monday to Sunday
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      weekDates.push(date);
    }

    return weekDates;
  };
    // 예제 실행
    const today = new Date(); // 오늘 날짜
    const week = getWeekDates(today);
    
    console.log("이번 주 날짜:");
    week.forEach(date => {
        console.log(date.toISOString().split('T')[0]); // 날짜 형식: YYYY-MM-DD
    });
    
  // Calculate the week starting from Sunday
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  // Generate an array of dates for the week
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });

  // Map weekdays abbreviations
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className={styles.container}>
      {daysOfWeek.map((date, index) => {
        const isToday = date.toDateString() === today.toDateString();
        const dayStatus = statuses[index]; // Props for statuses

        return (
          <div key={index} className={styles.day}>
            <p className={styles.weekday}>{weekdays[index]}</p>
            <div
              className={`${styles.circle} ${
                dayStatus === 'success'
                  ? styles.success
                  : isToday
                  ? styles.today
                  : styles.border
              }`}
            >
              {dayStatus !== 'success' ? (
                <span className={styles.date}>{date.getDate()}</span>
              ) : (
                <span className={styles.check}>&#10003;</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeekStatus;
