import React from 'react';
import styles from './LevelButton.module.css';
import { useNavigate } from 'react-router-dom';

function LevelButton({ level, progress, disabled, backgroundColor }) {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.levelButton} ${disabled ? styles.disabled : ''}`}
      onClick={disabled ? undefined : () => navigate('/missionroadmap')}
      disabled={disabled} // Prevent button interactions
      style={{
        backgroundColor: disabled ? '#c0c0c0' : backgroundColor, // Override with gray if disabled
      }}// Dynamically apply background color
    >
      <div className={styles.levelText}>{level}</div>
      {!disabled && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </button>
  );
}

export default LevelButton;
