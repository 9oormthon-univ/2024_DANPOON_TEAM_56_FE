import React from "react";
import styles from "./MissionLevel.module.css";
import MissionLevelButton from "../MissionLevelButton/MissionLevelButton";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


function MissionLevel() {
  const navigate = useNavigate();

  return(
    <div className={styles.frame}>
      <div>
        <MissionLevelButton
            name="Lv.1"
            className={`${styles.level1}`}
            onClick={() => navigate('/missionroadmap')}
        />
        <MissionLevelButton
            name="Lv.2"
            className={`${styles.level2}`}
            onClick={() => navigate('/missionroadmap')}
        />
        <MissionLevelButton
            name="Lv.3"
            className={`${styles.level3}`}
            onClick={() => navigate('/missionroadmap')}
        />
        <MissionLevelButton
            name="Lv.4"
            className={`${styles.level4}`}
            onClick={() => navigate('/missionroadmap')}
        />
        <MissionLevelButton
            name="Lv.5"
            className={`${styles.level5}`}
            onClick={() => navigate('/missionroadmap')}
        />
      </div>
      <NavBar />
    </div>
  )
}

export default MissionLevel;