import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserInfo from "../UserInfo/UserInfo";
import WeekStatus from "../WeekStatus/WeekStatus";
import SocialFeatures from "../SocialFeatures/SocialFeatures";
import MenuButton from "../menu/MenuButton";
import NavBar from "../NavBar/NavBar";

function Home() {
    const navigate = useNavigate();

    // const [userInfo, setUserInfo] = useState({});
    // const { nickname, profile_image } = userInfo;

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
    
    const [userData, setUserData] = useState({
        nickname: "",
        id: "",
        profileImage: "",
    });

    const fetchUserInfo = async () => {
        try {
            const response = await axios.post(
                "https://klay-ten.vercel.app/api/info",
                {},
                {
                    withCredentials: true,
                }
            );
            const { nickname, id, profileImage } = response.data;
            setUserData({ nickname, id, profileImage });
        } catch (error) {
            console.error("Failed to fetch user info:", error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);
      

    return (
        <div className={styles.frame}>
            <UserInfo 
                src={userData.profileImage}
                name = {userData.nickname}
                date="2024.11.20" 
                taskNum={6} 
                lv={2} 
            />            
            <WeekStatus statuses={statuses} />            
            <SocialFeatures />            
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
