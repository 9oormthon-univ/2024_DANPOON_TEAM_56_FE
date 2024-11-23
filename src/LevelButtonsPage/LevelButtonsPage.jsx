import React from 'react';
import LevelButton from '../LevelButton/LevelButton';
import styles from './LevelButtonsPage.module.css';

import NavBar from '../NavBar/NavBar';

function LevelButtonsPage() {
  const levels = [
    { level: 'Lv.1', progress: 100, disabled: false, backgroundColor: '#FFFFFF' },
    { level: 'Lv.2', progress: 60, disabled: false, backgroundColor: '#E6F1F7' },
    { level: 'Lv.3', progress: 0, disabled: true, backgroundColor: '#C9E4F1' },
    { level: 'Lv.4', progress: 0, disabled: true, backgroundColor: '#95CDE7' },
    { level: 'Lv.5', progress: 0, disabled: true, backgroundColor: '#7AB8D6' },
  ];

  return (
    <div className={styles.frame}>
      {levels.map((level, index) => (
        <LevelButton
          key={index}
          level={level.level}
          progress={level.progress}
          disabled={level.disabled}
          backgroundColor={level.backgroundColor}
        />
      ))}
      <div className={styles.bottomDiv}></div>
      <NavBar />
    </div>
  );
}

export default LevelButtonsPage;
