import React from "react";
import styles from "./Comment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Comment(props) {
    return (
        <div className={styles.commentFrame}>
            <div className={styles.image}>
            <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.play}>
                {props.play}
            </div>
            <div className={styles.date}>
                {props.date}
            </div>
        </div>
    );
}

export default Comment;