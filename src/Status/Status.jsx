import React from 'react';
import styles from './Status.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

function Status({ UserName, Participation, MissionNum, clearLv }) {
    return (
        <div className={styles.frame}>
            <div className={styles.row}>
                <FontAwesomeIcon icon={faPlay} size="l" className={styles.icon} />
                <p className={styles.text}>{UserName}, it's been {Participation} days straight!</p>
            </div>

            <div className={styles.row}>
                <FontAwesomeIcon icon={faStar} size="l" className={styles.icon} />
                <p className={styles.text}>Only {MissionNum} Missions left to acheive Lv.{clearLv}</p>
            </div>
        </div>
    );
}

export default Status;
