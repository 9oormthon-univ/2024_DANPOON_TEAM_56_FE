import React from 'react';
import styles from './WeekStatus.module.css';

function WeekStatus({ statuses }) {
  const getWeekDates = () => {
    const weekDates = [];
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayDiff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + mondayDiff);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  const isSameDay = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const today = new Date();
  const weekDates = getWeekDates();
  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  return (
    <div className={styles.container}>
      {weekDates.map((date, index) => {
        const isToday = isSameDay(date, today);
        const dayStatus = statuses[index];

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
