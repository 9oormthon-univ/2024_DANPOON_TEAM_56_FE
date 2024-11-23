import React from "react";
import styles from "./MenuButton.module.css";

function MenuButton(props) {
    return (
        <button
            className={`${styles.menu_button} ${props.className}`}
            onClick={props.onClick}
        >
            <div className={styles.button_text}>{props.name}</div>
            {props.icon && (
                <div className={styles.icon}>{props.icon}</div>
            )}
        </button>
    );
}

export default MenuButton;
