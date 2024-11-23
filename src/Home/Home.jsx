import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

import UserIcon from "../images/UserIcon.png"

import UserInfo from "../UserInfo/UserInfo";
import WeekStatus from "../WeekStatus/WeekStatus";
import SocialFeatures from "../SocialFeatures/SocialFeatures";
import MenuButton from "../menu/MenuButton";
import NavBar from "../NavBar/NavBar";

function Home() {
    const navigate = useNavigate();

    // status mock data
    const statuses = [
        'success', // 월
        'border',  // 화
        'success', // 수
        'border',  // 목
        'success', // 금
        'border',  // 토
        'border',  // 일
    ];
      

    return (
        <div className={styles.frame}>
                <UserInfo src={UserIcon} name = "John" date = "2024.11.20" taskNum={6} lv = {2}/>
                <WeekStatus statuses={statuses}/>
                <SocialFeatures likes={11} comments= {8} view = {35} />
                <MenuButton
                    name="Today's Mission"
                    className={`${styles.mission_button}`}
                    onClick={() => navigate('/levels')}
                />
                
            <NavBar />
        </div>
    );
}

export default Home;
