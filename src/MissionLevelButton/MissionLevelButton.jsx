import React from "react";
import styles from "./MissionLevelButton.module.css";

function MissionLevelButton(props) {
    return (
        <button
            className={`${styles.level_button} ${props.className}`}
            onClick={props.onClick}
        >
            <div className={styles.button_text}>{props.name}</div>
        </button>
    );
}

export default MissionLevelButton;
