import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faEye, faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import NavBar from "../NavBar/NavBar";

function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.frame}>

            <button className={styles.profileCard}
                /* onclick={() => navigate("/myPage")} */    
            >
                <div className={styles.profileInfo}>
                    <div className={styles.avatar}>
                        <FontAwesomeIcon icon={faCircleUser}  style={{color: "#C7D2D8", fontSize: "100px"}}/>
                    </div>
                    <div className={styles.userInfo}>
                        <h2 className={styles.name}>
                            John
                            <span className={styles.editIcon}>
                                <FontAwesomeIcon icon={faPen} />
                            </span>
                        </h2>
                        <p>Join Date: <br />2024.11.20</p>
                        <p>Game Progress: <br />6 tasks completed</p>
                    </div>
                </div>
                <div className={styles.levelSection}>
                    <p className={styles.level}>Lv. 2</p>
                    <div className={styles.progressBar}>
                        <div className={styles.progress}></div>
                    </div>
                </div>
            </button>

            <button className={styles.calendar}
                /* onClick={() => navigate("/calendar")} */
            >
                <div>
                    CALENDAR
                </div>
            </button>

            <button className={styles.stats}>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faHeart}  className={styles.icon} />
                    <span>11</span>
                </div>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faComment}  className={styles.icon} />
                    <span>8</span>
                </div>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faEye}  className={styles.icon} /> 
                    <span>35</span>
                </div>
            </button>

            <button
                className={styles.mission}
                onClick={() => navigate("/missionlevel")}
            >
                Today's <br/> Mission    
            </button>

            <NavBar />
        </div>
    );
}

export default Home;
